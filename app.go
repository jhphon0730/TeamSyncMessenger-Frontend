package main

import (
	"changeme/pkg/global"
	"context"
	"io/ioutil"
	"log"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context

	serverIP string
}

// NewApp creates a new App application struct
func NewApp(serverIP string) *App {
	return &App{
		serverIP: serverIP,
	}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	err := global.SetServerIP(a.serverIP)
	if err != nil {
		log.Fatalln(err.Error())
	}
}

// Custom Error Dialog
func (a *App) CustomErrorDialog(errorMessage string) {
	fileBytes, _ := ioutil.ReadFile("build/appicon.png")
	runtime.MessageDialog(a.ctx, runtime.MessageDialogOptions{
		Title:   "경고",
		Message: errorMessage,
		Icon:    fileBytes,
	})
}

// Custom Info Dialog
func (a *App) CustomInfoDialog(InfoMessage string) {
	fileBytes, _ := ioutil.ReadFile("build/appicon.png")
	runtime.MessageDialog(a.ctx, runtime.MessageDialogOptions{
		Title:   "정보",
		Message: InfoMessage,
		Icon:    fileBytes,
	})
}
