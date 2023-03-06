//TODO IMPLEMENT FIRE STAGES
class Fires {
    constructor(color, locX, locY, game){
        this.locX = locX;
        this.locY = locY;
        this.game = game
        this.r = Math.floor(Math.random() * 3);
        this.boundingBox = null;

        this.health = 12
        this.dead = false;
        this.fireScale = 3.5
        this.stageChange = false
        this.firstStage = true
        this.secondStage = false
        this.thirdStage = false

        //TODO: implement random logs
        // if(this.r === 0){
        //     ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock1.png"),this.locX,this.locY,128,128);
        // }else if(this.r === 1){
        //     ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock2.png"),this.locX,this.locY,128,128);
        // }else if(this.r === 2){
        //     ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock3.png"),this.locX,this.locY,128,128);
        // }

        this.logsAnimator = new Animator(ASSET_MANAGER.getAsset("./res/fireplace.png"), 0, 32, 32, 32, 1, 0.1, this.fireScale);
        this.logsAnimatorBlue = new Animator(ASSET_MANAGER.getAsset("./res/fireplace_blue.png"), 0, 32, 32, 32, 1, 0.1, this.fireScale);
        this.logsAnimatorRed = new Animator(ASSET_MANAGER.getAsset("./res/fireplace_red.png"), 0, 0, 32, 32, 1, 0.1, this.fireScale);
        this.fireAnimator = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire.png"), 0, 0, 48, 48, 6, 0.1, this.fireScale);
        this.fireAnimatorBlue = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire_blue.png"), 0, 0, 48, 48, 5, 0.3, this.fireScale);
        this.fireAnimatorRed = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire_red.png"), 0, 0, 48, 48, 5, 0.3, this.fireScale);

        this.normalFire = false
        this.blueFire = false
        this.redFire = false
        switch (color) {
            case "normal":
                this.normalFire = true;
                break;
            case "blue":
                this.blueFire = true;
                break;
            case "red":
                this.redFire = true;
                break;
        }

    };


    update(){
        if(this.health<=0){
            this.dead = true;
            this.deadTime += this.game.clockTick;
        }
        if (this.dead) {
            if (this.deadTime === 0) {
                this.deadTime += this.game.clockTick;
                ASSET_MANAGER.playAsset("./sounds/animal_squish_1.wav")

            }
            if (this.deadTime > 1.1) {
                console.log("runs")
                this.boundingBox = undefined;
                this.removeFromWorld = true;

            }
        }
        if (this.health > 0 && this.health <= 4) {
            this.stageChange = true
            this.firstStage = false
            this.secondStage = false
            this.thirdStage = true
            this.stageChange = false
            this.fireScale = 0.5
            console.log("third stage")
        } else if (this.health > 4 && this.health <= 9) {
            this.stageChange = true
            this.firstStage = false
            this.secondStage = true
            this.thirdStage = false
            this.stageChange = false
            this.fireScale = 1.5
            console.log("second stage")
        } else if (this.health > 9 && this.health <= 12) {
            this.stageChange = true
            this.firstStage = true
            this.secondStage = false
            this.thirdStage = false
            this.stageChange = false
            this.fireScale = 2.5;
            //console.log("first stage")
        }
    };

    draw(ctx){
        if (this.normalFire) {
            if (this.stageChange) {
                this.fireAnimator = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire.png"), 0, 0, 48, 48, 6, 0.1, this.fireScale);
            }
            this.logsAnimator.drawFrame(this.game.clockTick, ctx, this.locX+2, this.locY+15);
            if (this.health > 0) {
                this.fireAnimator.drawFrame(this.game.clockTick, ctx, this.locX-28, this.locY-76);
            }
        } else if (this.blueFire) {
            if (this.stageChange) {
                this.fireAnimatorBlue = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire_blue.png"), 0, 0, 48, 48, 5, 0.3, this.fireScale);
            }
            this.logsAnimatorBlue.drawFrame(this.game.clockTick, ctx, this.locX+2, this.locY+15);
            if (this.health > 0) {
                this.fireAnimatorBlue.drawFrame(this.game.clockTick, ctx, this.locX-28, this.locY-76);
            }
        } else if (this.redFire) {
            if (this.stageChange) {
                this.fireAnimatorRed = new Animator(ASSET_MANAGER.getAsset("./res/effect_fire_red.png"), 0, 0, 48, 48, 5, 0.3, this.fireScale);
            }
            this.logsAnimatorRed.drawFrame(this.game.clockTick, ctx, this.locX+2, this.locY+15);
            if (this.health > 0) {
                this.fireAnimatorRed.drawFrame(this.game.clockTick, ctx, this.locX-28, this.locY-76);
            }
        }
        this.boundingBox = new BoundingBox(this.locX+2,this.locY-35,110,110);
        //ctx.strokeRect(this.locX+2,this.locY-35,110,110);
    };
}