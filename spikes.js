class Spikes {
    constructor(locX, locY, game){
        this.locX = locX;
        this.locY = locY;
        this.game = game;
        this.r = Math.floor(Math.random() * 4);
        this.boundingBox = null;
        this.c = 0;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/grid_spikes_ani.png"), 0, 0, 32, 32, 4, 0.1, 4);
        this.stab = false;
    };


    update(){
       
    };

    

    draw(ctx){
        if(this.c<4){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes_down.png"),this.locX,this.locY,128,128);
            this.c += 1*this.game.clockTick;
            this.stab = false;
        }else if(this.c >= 4 && this.c <= 4.4){
            this.animator.drawFrameReverseS(this.game.clockTick, ctx, this.locX, this.locY);
            this.c += 1*this.game.clockTick;
            if(this.c > 4.2 && this.c <= 4.4){
                this.stab = true;
            }
        }else if(this.c > 4.4 && this.c <= 8.4){
            if(this.r == 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes1.png"),this.locX,this.locY,128,128);
            }else if(this.r == 1){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes2.png"),this.locX,this.locY,128,128);
            }else if(this.r == 2){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes3.png"),this.locX,this.locY,128,128);
            }else if(this.r == 3){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes4.png"),this.locX,this.locY,128,128);
            }
            this.c += 1*this.game.clockTick;
            this.stab = true;
        }else{
            this.animator.drawFrameD(this.game.clockTick, ctx, this.locX, this.locY);
            this.c += 1*this.game.clockTick;
            if(this.c >= 8.6 && this.c < 8.8){
                this.stab = false;
            }
        }
        if(this.c >= 8.8){
            this.c = 0;
        }
       
        this.boundingBox = new BoundingBox(this.locX+16,this.locY+16,96,96);
        //ctx.strokeRect(this.locX+16,this.locY+16,96,96);
    };
}