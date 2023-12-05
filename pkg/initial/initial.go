package initial

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type Initial struct {
	ctx *context.Context
}

func NewInitial(ctx *context.Context) *Initial {
	return &Initial{
		ctx: ctx,
	}
}

func (i *Initial) InitialGatewayPage() {
	runtime.WindowSetMinSize(*i.ctx, 355, 555)
	runtime.WindowSetSize(*i.ctx, 355, 555)
	runtime.WindowCenter(*i.ctx)
	runtime.WindowShow(*i.ctx)
}

func (i *Initial) InitialLoginPage() {
	runtime.WindowSetMinSize(*i.ctx, 355, 600)
	runtime.WindowSetSize(*i.ctx, 355, 600)
	runtime.WindowCenter(*i.ctx)
	runtime.WindowShow(*i.ctx)
}

func (i *Initial) InitialRegisterPage() {
	runtime.WindowSetMinSize(*i.ctx, 355, 640)
	runtime.WindowSetSize(*i.ctx, 355, 640)
	runtime.WindowCenter(*i.ctx)
	runtime.WindowShow(*i.ctx)
}
