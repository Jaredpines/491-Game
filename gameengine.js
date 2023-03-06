// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.keys = {};

        // Options and the Details
        this.options = options || {
            debugging: false,
        };

    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });
        
        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        this.ctx.canvas.addEventListener("keydown", event => this.keys[event.key] = true);
        this.ctx.canvas.addEventListener("keyup", event => this.keys[event.key] = false);

    };


    addEntity(entity) {
        this.entities.reverse();
        let b
        for (let index = 0; index < this.entities.length; index++) {
            if(this.entities[index] instanceof Hud){
                b = this.entities.splice(index,1);
            }
        }
        this.entities.push(entity);
        if(b!=null){
            this.entities.push(b[0]);
        }
        this.entities.reverse();
    };
    orderCorrecter(){
        let list = this.entities;
        list.reverse();
        let e
        let b
        let o
        let c = []
        let s = []
        let r = []
        let f = []
        let j = []
        let sp = []
        let su = []
        let p = []
        let g = []
        for (let index = 0; index < list.length; index++) {
            if(list[index] instanceof Isaac_Head){
                e = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Isaac_Body){
                o = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Hud){
                b = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Spikes){
                s.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Rocks){
                r.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Fly){
                f.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof JumpingSpider){
                j.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Spider){
                sp.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Sucker){
                su.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Pooter){
                p.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Gurgling){
                g.push(list.splice(index,1))
                index--;
            }
            if(list[index] instanceof Chest){
                c.push(list.splice(index,1))
                index--;
            }
        }
        if(s != null){
            for (let index = 0; index < s.length; index++) {
                list.push(s[index][0])
            }
        }
        if(r != null){
            for (let index = 0; index < r.length; index++) {
                list.push(r[index][0])
            }
        }
        if(c != null){
            for (let index = 0; index < c.length; index++) {
                list.push(c[index][0])
            }
        }
        if(f != null){
            for (let index = 0; index < f.length; index++) {
                list.push(f[index][0])
            }
        }
        if(j != null){
            for (let index = 0; index < j.length; index++) {
                list.push(j[index][0])
            }
        }
        if(sp != null){
            for (let index = 0; index < sp.length; index++) {
                list.push(sp[index][0])
            }
        }
        if(su != null){
            for (let index = 0; index < su.length; index++) {
                list.push(su[index][0])
            }
        }
        if(p != null){
            for (let index = 0; index < p.length; index++) {
                list.push(p[index][0])
            }
        }
        if(g != null){
            for (let index = 0; index < g.length; index++) {
                list.push(g[index][0])
            }
        }
        list.push(o[0]);
        list.push(e[0]);
        list.push(b[0]);
        list.reverse();
        this.entities = list;

    }
    swapTearEntity(entity) {
        let list = this.entities;
        list.reverse();
        let e
        let b
        for (let index = 0; index < list.length; index++) {
            if(list[index] instanceof Isaac_Head){
                e = list.splice(index,1);
            }
            if(list[index] instanceof Hud){
                b = list.splice(index,1);
            }
        }
        
        list.push(entity);
        list.push(e[0]);
        list.push(b[0]);
        list.reverse();
        this.entities = list;
    };
    
    clearS(){
        let list = this.entities;
        list.reverse();
        let s
        let h
        let i
        let b
        for (let index = 0; index < list.length; index++) {
            if(list[index] instanceof SceneManager){
                s = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Hud){
                h = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Isaac_Head){
                i = list.splice(index,1);
                index--;
            }
            if(list[index] instanceof Isaac_Body){
                b = list.splice(index,1);
                index--;
            }
            if(list[index] != null){
                list[index].removeFromWorld = true;
            }
            
        }
        
        list.push(h[0]);
        list.push(i[0]);
        list.push(b[0]);
        list.push(s[0]);
        list.reverse();
        this.entities = list;
    }


    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
        //this.camera.draw(this.ctx);
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }
        //this.camera.update();

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)