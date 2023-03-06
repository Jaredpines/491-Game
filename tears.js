class Tears {
    constructor(locX, locY, direction,game,damage,range,shotSpeed,skin){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.direction = direction;
        this.test = 0;
        this.range = range
        this.shotSpeed = shotSpeed;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_one.png"), 0, 0, 62, 52, 4, 0.1, 2);
        this.animator2 = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_two.png"), 0, 0, 62, 73, 4, 0.1, 2);
        this.animator3 = new Animator(ASSET_MANAGER.getAsset("./res/tear_animation_three.png"), 0, 0, 62, 53, 4, 0.1, 2);
        this.boundingBox = null;
        this.damage = damage;
        this.pierced = false;
        // this.skin = "./res/normal_tears.png"
        this.skin = skin;
        //TODO: implement damage scaling size for tears
        this.tearSizeModifier;
    };

    update(){

    };


    draw(ctx){
        
        if(this.direction === "down"){
            if (this.skin === "./res/cupids_arrow_tear_right.png" ||
                this.skin === "./res/cupids_arrow_tear_left.png" ||
                this.skin === "./res/cupids_arrow_tear_up.png" ||
                this.skin === "./res/cupids_arrow_tear_down.png") {
                this.skin = "./res/cupids_arrow_tear_down.png"
            }
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin),this.locX+40,this.locY+50, 51,51);
                this.boundingBox = new BoundingBox(this.locX+52.5,this.locY+67.5, 25,25)
                //ctx.strokeRect(this.locX+52.5,this.locY+67.5, 25,25);
                this.locY += this.shotSpeed*(1000*this.game.clockTick);
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX+35, this.locY+35)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX+20, this.locY+20)
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX+35, this.locY+35)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (10*this.game.clockTick);
        }else if(this.direction === "up"){
            if (this.skin === "./res/cupids_arrow_tear_right.png" ||
                this.skin === "./res/cupids_arrow_tear_left.png" ||
                this.skin === "./res/cupids_arrow_tear_up.png" ||
                this.skin === "./res/cupids_arrow_tear_down.png") {
                this.skin = "./res/cupids_arrow_tear_up.png"
            }
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin), this.locX+40, this.locY - 30, 51, 51);
                this.boundingBox = new BoundingBox(this.locX+52.5,this.locY-12.5, 25,25)
                //ctx.strokeRect(this.locX+52.5,this.locY-12.5, 25,25);
                this.locY -= this.shotSpeed*(1000*this.game.clockTick);
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX+35, this.locY-60)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX+20, this.locY-75)
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX+35, this.locY-60)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (10*this.game.clockTick);
        }else if(this.direction === "right"){
            if (this.skin === "./res/cupids_arrow_tear_right.png" ||
                this.skin === "./res/cupids_arrow_tear_left.png" ||
                this.skin === "./res/cupids_arrow_tear_up.png" ||
                this.skin === "./res/cupids_arrow_tear_down.png") {
                this.skin = "./res/cupids_arrow_tear_right.png"
            }
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin),this.locX+50,this.locY+40, 51,51);
                this.boundingBox = new BoundingBox(this.locX+65,this.locY+52.5, 25,25)
                //ctx.strokeRect(this.locX+65,this.locY+52.5, 25,25);
                this.locX += this.shotSpeed*(1000*this.game.clockTick);
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX+45, this.locY+25)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX+30, this.locY+10)
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX+45, this.locY+25)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (10*this.game.clockTick);
        }else if(this.direction === "left"){
            if (this.skin === "./res/cupids_arrow_tear_right.png" ||
                this.skin === "./res/cupids_arrow_tear_left.png" ||
                this.skin === "./res/cupids_arrow_tear_up.png" ||
                this.skin === "./res/cupids_arrow_tear_down.png") {
                this.skin = "./res/cupids_arrow_tear_left.png"
            }
            if(this.range > 0){
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin),this.locX-20,this.locY+40, 51,51);
                this.boundingBox = new BoundingBox(this.locX-7.5,this.locY+52.5, 25,25)
                //ctx.strokeRect(this.locX-7.5,this.locY+52.5, 25,25);
                this.locX -= this.shotSpeed*(1000*this.game.clockTick);
            }else if(this.range <= 0){
                if(this.animator.isDone() === false){
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX-15, this.locY+25)
                }else if(this.animator.isDone() === true && this.animator2.isDone() === false){
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX-30, this.locY+10)
                }else if(this.animator2.isDone() === true && this.animator3.isDone() === false){
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX-15, this.locY+25)
                }else if(this.animator3.isDone() === true){
                    this.direction = null;
                }

            }
            this.range -= (10*this.game.clockTick);
        }else if(this.direction === "isaacL") {

            if (this.range > 0) {
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin), 0, 0, 32, 32, this.locX + 10, this.locY - 45, 90, 90);
                this.boundingBox = new BoundingBox(this.locX + 12.5, this.locY - 12.5, 25, 25)
                //ctx.strokeRect(this.locX+42,this.locY-12.5, 25,25);
                this.locX -= this.shotSpeed * (1000 * this.game.clockTick);
            } else if (this.range <= 0) {
                if (this.animator.isDone() === false) {
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX - 5, this.locY - 60)
                } else if (this.animator.isDone() === true && this.animator2.isDone() === false) {
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX - 20, this.locY - 75)
                } else if (this.animator2.isDone() === true && this.animator3.isDone() === false) {
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX - 5, this.locY - 60)
                } else if (this.animator3.isDone() === true) {
                    this.direction = null;
                }

            }
            this.range -= (10 * this.game.clockTick);


        }else if(this.direction === "isaacR") {

            if (this.range > 0) {
                ctx.drawImage(ASSET_MANAGER.getAsset(this.skin), 0, 0, 32, 32, this.locX + 20, this.locY - 45, 90, 90);
                this.boundingBox = new BoundingBox(this.locX + 12.5, this.locY - 12.5, 25, 25)
                //ctx.strokeRect(this.locX+42,this.locY-12.5, 25,25);
                this.locX += this.shotSpeed * (1000 * this.game.clockTick);
            } else if (this.range <= 0) {
                if (this.animator.isDone() === false) {
                    this.animator.drawFrame(this.game.clockTick, ctx, this.locX - 5, this.locY - 60)
                } else if (this.animator.isDone() === true && this.animator2.isDone() === false) {
                    this.animator2.drawFrame(this.game.clockTick, ctx, this.locX - 20, this.locY - 75)
                } else if (this.animator2.isDone() === true && this.animator3.isDone() === false) {
                    this.animator3.drawFrame(this.game.clockTick, ctx, this.locX - 5, this.locY - 60)
                } else if (this.animator3.isDone() === true) {
                    this.direction = null;
                }

            }
            this.range -= (10 * this.game.clockTick);
        }else{
                this.boundingBox = undefined;
                this.removeFromWorld= true;
        }
        
    };
}