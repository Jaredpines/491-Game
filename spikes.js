class Spikes {
    constructor(locX, locY, game){
        this.locX = locX;
        this.locY = locY;
        this.game = game;
        this.r = Math.floor(Math.random() * 4);
        this.boundingBox = null;
        this.c = 0;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/ani_down.png"), 0, 0, 32, 32, 4, 0.5, 4);
        this.animator2 = new Animator(ASSET_MANAGER.getAsset("./res/grid_spikes_ani.png"), 0, 0, 32, 32, 4, 0.1, 4);
        this.stab = false;
        this.static = false;
    };


    update(){
       
    };

    

    draw(ctx){
        if(this.c < 10){
            this.stab = true;
            if(this.r == 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes1.png"),this.locX,this.locY,128,128);
            }else if(this.r == 1){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes2.png"),this.locX,this.locY,128,128);
            }else if(this.r == 2){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes3.png"),this.locX,this.locY,128,128);
            }else if(this.r == 3){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes4.png"),this.locX,this.locY,128,128);
            }
        }else if(this.c >=10 && this.c < 10.2){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani4.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 10.2 && this.c < 10.4){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani3.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 10.4 && this.c < 10.6){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani2.png"),this.locX,this.locY,128,128);
            this.stab = false;
        }else if(this.c >= 10.6 && this.c < 10.8){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani1.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 10.8 && this.c < 20.8){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/grid_spikes_down.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 20.8 && this.c < 21.0){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani1.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 21.0 && this.c < 21.2){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani2.png"),this.locX,this.locY,128,128);
        }else if(this.c >= 21.2 && this.c < 21.4){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani3.png"),this.locX,this.locY,128,128);
            this.stab = true;
        }else if(this.c >= 21.4 && this.c < 21.6){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/ani4.png"),this.locX,this.locY,128,128);
        }else{
            this.c = 0;
        }
        if(this.static == false){
            this.c += 2*this.game.clockTick
        }

        this.boundingBox = new BoundingBox(this.locX+16,this.locY+16,96,96);
        //ctx.strokeRect(this.locX+16,this.locY+16,96,96);
    };
}