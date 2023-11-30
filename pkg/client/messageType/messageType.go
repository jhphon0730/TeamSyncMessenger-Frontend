package messagetype

type Message struct {
	Type         string      `json:"type"`
	Content      interface{} `json:"content"`
	Buffer       []byte
	ByfferLength int
}

type ConnectSuccessMessage struct {
	Type    string `json:"type"`
	Content string `json:"content"`
}
