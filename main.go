package main

import (
	"changeme/pkg/client"
	"embed"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	app := NewApp()

	client := client.NewClient(&app.ctx)

	err := wails.Run(&options.App{
		Title:  "TeamSyncMessenger",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
		OnStartup:        app.startup,
		OnShutdown:       client.Disconnect,
		Bind: []interface{}{
			app,
			client,
		},
		Windows: &windows.Options{
			WindowIsTranslucent:  true,
			WebviewIsTransparent: true,
			BackdropType:         windows.Mica,
			Theme:                windows.SystemDefault,
		},
	})

	if err != nil {
		log.Fatal(err.Error())
	}
}
