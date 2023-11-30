package global

import (
	"errors"
	"log"
	"net"
	"os"
)

func SetServerIP(IP string) error {
	err := os.Setenv("ServerIP", IP)
	if err != nil {
		return err
	}

	return nil
}

func GetServerIP() (string, error) {
	ServerIP := os.Getenv("ServerIP")

	if len(ServerIP) == 0 {
		return "", errors.New("서버 IP가 존재하지 않습니다.")
	}

	return ServerIP, nil
}

func GetOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	return localAddr.IP
}
