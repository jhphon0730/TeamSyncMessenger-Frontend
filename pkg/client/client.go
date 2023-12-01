package client

import (
	"bytes"
	messagetype "changeme/pkg/client/messageType"
	"changeme/pkg/global"
	"context"
	"encoding/json"
	"io"
	"log"
	"net"
)

type Client struct {
	ctx *context.Context

	Conn     net.Conn
	clientIP string
}

func NewClient(ctx *context.Context) *Client {
	return &Client{
		ctx: ctx,
	}
}

func (c *Client) server(messages chan messagetype.Message) {
	for {
		msg := <-messages
		switch msg.Type {
		case "connect_success":
			var message messagetype.ConnectSuccessMessage

			json.Unmarshal(msg.Buffer[:msg.ByfferLength], &message)
			c.clientIP = message.Content
		}
	}
}

func (c *Client) RunClient() bool {
	if c.Conn != nil {
		return false
	}

	conn, err := c.connectToServer()
	if err != nil {
		log.Println(err.Error())
		return false
	}
	c.Conn = conn

	log.Println("Connect Success")

	messages := make(chan messagetype.Message)
	go c.server(messages)
	go c.receiveMessages(messages)

	return true
}

func (c *Client) connectToServer() (net.Conn, error) {
	ServerIP, err := global.GetServerIP()
	if err != nil {
		log.Fatalln(err.Error())
	}

	serverAddress := ServerIP
	conn, err := net.Dial("tcp", serverAddress)
	if err != nil {
		return nil, err
	}
	return conn, nil
}

func (c *Client) sendMessage(message messagetype.Message) error {
	writeData, err := json.Marshal(message)
	if err != nil {
		return err
	}

	_, err = c.Conn.Write(writeData)
	return err
}

func (c *Client) Disconnect(ctx context.Context) {
	message := messagetype.Message{
		Type:    "disconnect",
		Content: c.clientIP,
	}

	// Send disconnect message to the server
	err := c.sendMessage(message)
	if err != nil {
		log.Fatalln("Failed to send disconnect message: ", err.Error())
	}
}

func (c *Client) receiveMessages(messages chan messagetype.Message) {
	for c.Conn != nil {
		var buffer []byte
		tempBuffer := make([]byte, 1024) // Temporary buffer

		for c.Conn != nil {
			n, err := c.Conn.Read(tempBuffer)
			if err != nil {
				if err != io.EOF {
					log.Println("메시지 받기 실패 에러: ", err.Error())
				}
				return
			}

			buffer = append(buffer, tempBuffer[:n]...)

			// Attempt to decode the received data as JSON
			var message messagetype.Message
			decoder := json.NewDecoder(bytes.NewReader(buffer))
			if err := decoder.Decode(&message); err == nil {
				// Successfully decoded a JSON object
				c.handleMessage(buffer[:decoder.InputOffset()], len(buffer[:decoder.InputOffset()]), messages)
				// Trim processed data from the buffer
				buffer = buffer[decoder.InputOffset():]
			}
		}
	}
}

func (c *Client) handleMessage(buffer []byte, n int, messages chan messagetype.Message) {
	var message messagetype.Message

	err := json.Unmarshal(buffer[:n], &message)
	if err != nil {
		log.Println("데이터 수신에 실패하였습니다.: ", err.Error())
		return
	}

	log.Println("서버로부터 받은 헤더: ", message.Type)
	messages <- messagetype.Message{
		Type:         message.Type,
		Content:      message.Content,
		Buffer:       buffer,
		ByfferLength: n,
	}
}
