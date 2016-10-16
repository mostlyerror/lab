const myCanvas = document.getElementById('myCanvas'),
    otherCanvas = document.getElementById('otherCanvas'),
    myCtx = myCanvas.getContext('2d'),
    otherCtx = otherCanvas.getContext('2d');

myCtx.scale(20, 20);
otherCtx.scale(20, 20);

myCtx.fillStyle = '#000';
myCtx.fillRect(0, 0, myCanvas.width, myCanvas.height);
otherCtx.fillStyle = '#000';
otherCtx.fillRect(0, 0, otherCanvas.width, otherCanvas.height);

class Player
{
    constructor(ctx)
    {
        this.ctx = ctx;
        this.pos = {x: 0, y: 0}
        this.COLORS = [ 
            '#FF0D72',
            '#0DC2FF',
            '#0DFF72',
            '#F538FF',
            '#FF8E0D',
            '#FFE138',
            '#3877FF'
        ];
        this.color = this.COLORS[(Math.random() * this.COLORS.length) | 0];
    }

    draw ()
    {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, 1, 1);
    }
}

class LocalPlayer extends Player
{
    constructor(ctx)
    {
        super(ctx);
        this.attachEventHandlers();
    }

    move ()
    {
        io.emit('move', this.pos);
        this.draw();
    }

    attachEventHandlers()
    {
        let that = this;

        const keyDown = function (event) {
            console.log(event.keyCode);
            let key = event.keyCode;
            if (key === 37) {
                that.pos.x--;
            }
            else if (key === 39) {
                that.pos.x++;
            }
            that.move();
        };
        document.addEventListener('keydown', keyDown);
    }
}

class RemotePlayer extends Player
{
    constructor(ctx, socket)
    {
        super(ctx)
        this.conn = socket;
        this.attachListeners();
    }

    attachListeners()
    {
        let that = this;

        this.conn.on('move', (data) => {
            that.pos = data;
            that.draw();
        });
    }
}

// LOCAL
const me = new LocalPlayer(myCtx);
me.draw();

// REMOTE
const opp = new RemotePlayer(otherCtx, io);
opp.draw();
