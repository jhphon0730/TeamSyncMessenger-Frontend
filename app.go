package main

import (
	"changeme/pkg/global"
	"context"
	"fmt"
	"log"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	err := global.SetServerIP("192.168.0.48:9090")
	if err != nil {
		log.Fatalln(err.Error())
	}
}

func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
