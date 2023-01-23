class Tears {
    constructor(locX, locY, direction ,game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.direction = direction;
        this.test = 0;
        this.range = 0.45
        this.shotSpeed = 1000;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_one.png"), 0, 0, 62, 52, 4, 0.1, 2);
        this.animator2 = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_two.png"), 0, 0, 62, 73, 4, 0.1, 2);
        this.animator3 = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_three.png"), 0, 0, 62, 53, 4, 0.1, 2);
    };


    update(){

    };


    draw(ctx){
        if(this.direction === "down"){
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/normal_tears.png"),this.locX,this.locY+50, 51,51);
                this.locY += this.shotSpeed*this.game.clockTick;
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX-5, this.locY+35)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX-20, this.locY+20)
                    console.log(this.animator2.isDone())
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX-5, this.locY+35)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (1*this.game.clockTick);
        }else if(this.direction === "up"){
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/normal_tears.png"), this.locX, this.locY - 30, 51, 51);
                this.locY -= this.shotSpeed*this.game.clockTick;
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX-5, this.locY-60)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX-20, this.locY-75)
                    console.log(this.animator2.isDone())
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX-5, this.locY-60)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (1*this.game.clockTick);
        }else if(this.direction === "right"){
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/normal_tears.png"),this.locX+50,this.locY, 51,51);
                this.locX += this.shotSpeed*this.game.clockTick;
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX+45, this.locY-15)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX+30, this.locY-30)
                    console.log(this.animator2.isDone())
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX+45, this.locY-15)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (1*this.game.clockTick);
        }else if(this.direction === "left"){
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/normal_tears.png"),this.locX-20,this.locY, 51,51);
                this.locX -= this.shotSpeed*this.game.clockTick;
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX-15, this.locY-15)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX-30, this.locY-30)
                    console.log(this.animator2.isDone())
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX-15, this.locY-15)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (1*this.game.clockTick);
        }else{
            
                this.removeFromWorld= true;
        }
        
    };
}