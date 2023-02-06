
//TODO ATTACH BOUNDING BOXES TO MOVING ENEMIES

class Fly {
    constructor(locX, locY, game, isaac) {
        this.game = game;
        this.isaac = isaac
        this.paused = false;
        this.dead = false;
        this.deadTime = 0;
        this.clocktick = game.clocktick;

        this.xPosition = locX;
        this.yPosition = locY;
        this.moveBoundsRight = this.isaac.moveBoundsRight
        this.moveBoundsLeft = this.isaac.moveBoundsLeft
        this.moveBoundsUp = this.isaac.moveBoundsUp
        this.moveBoundsDown = this.isaac.moveBoundsDown
        this.movementSpeed = 300;

        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");

        this.animations = [];
        this.loadAnimations();
        this.bbWidth = 32
        this.bbHeight = 24
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight)
        this.flyHealth = 100
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.flySpritesheet, 0, 0, 32, 24, 2, 0.1, 2.5);
        //Dead = 1
        this.animations[1] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 2.5);

    };

    update() {

        if (this.dead) {

            if (this.deadTime === 0) {
                this.deadTime += this.game.clockTick;
            }
            if (this.deadTime > 1.1) {
                console.log("runs")
                this.boundingBox = undefined;
                this.removeFromWorld = true;

            }
        }
        if (!this.paused && !this.dead && !this.isaac.crying) {

            let distX =  this.isaac.xPosition - this.xPosition
            let distY =  this.isaac.yPosition - this.yPosition
            if(this.xPosition < this.moveBoundsRight && this.xPosition < this.isaac.xPosition){
                let distance = Math.sqrt(distX*distX+distY*distY)
                let velocityX = distX/distance*this.movementSpeed
                this.xPosition += velocityX*this.game.clockTick/2;
            }
            if(this.xPosition > this.moveBoundsLeft && this.xPosition > this.isaac.xPosition){
                let distance = Math.sqrt(distX*distX+distY*distY)
                let velocityX = distX/distance*this.movementSpeed
                this.xPosition -= -velocityX*this.game.clockTick/2;
            }
            if(this.yPosition > this.moveBoundsUp && this.yPosition > this.isaac.yPosition){
                let distance = Math.sqrt(distX*distX+distY*distY)
                let velocityY = distY/distance*this.movementSpeed
                this.yPosition += velocityY*this.game.clockTick/2;
            }
            if(this.yPosition < this.moveBoundsDown && this.yPosition < this.isaac.yPosition){
                let distance = Math.sqrt(distX*distX+distY*distY)
                let velocityY = distY/distance*this.movementSpeed
                this.yPosition += velocityY*this.game.clockTick/2;
            }

            this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);

        }

        if(this.flyHealth<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick
        }

    };

    draw(ctx) {
        if (this.dead) {
            this.animations[1].drawFrame(this.game.clockTick,ctx, this.xPosition, this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition,this.yPosition);
        }
    }
}

class Spider {
    constructor(locX, locY, game, isaac) {
        this.isaac = isaac
        this.game = game;
        this.paused = false;
        this.dead = false;
        this.walking = false;
        this.deadTime = 0;

        this.xPosition = locX;
        this.yPosition = locY;
        this.moveBoundsRight = this.isaac.moveBoundsRight
        this.moveBoundsLeft = this.isaac.moveBoundsLeft
        this.moveBoundsUp = this.isaac.moveBoundsUp
        this.moveBoundsDown = this.isaac.moveBoundsDown
        this.movementSpeed = 200;

        this.spiderSpriteSheet = ASSET_MANAGER.getAsset("./res/monster_spider.png");
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./res/monster_spider.png"), 0, 0, 32, 24, 2, 0.1, 2);
        // this.vertAnimator = new VertAnimator(ASSET_MANAGER.getAsset("./res/monster_spider.png"))

        this.animations = [];
        this.loadAnimations();
        this.bbWidth = 30
        this.bbHeight = 30
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition-20 ,this.bbWidth,this.bbHeight)
        this.health = 100
    };


    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        const spiderIdleStartX = 6
        const spiderIdleStartY = 6
        const spiderIdleWidth = 20
        const spiderIdleHeight = 10

        const spiderWalkingStartX = 37
        const spiderWalkingStartY = 5
        const spiderWalkingHeight = 15
        const spiderWalkingWidth = 21

        //Idle = 0
        this.animations[0] = new Animator(this.spiderSpriteSheet,
            spiderIdleStartX, spiderIdleStartY, spiderIdleWidth, spiderIdleHeight, 1, 1, 2.5);
        //Walking 1
        this.animations[1] = new VertAnimator(this.spiderSpriteSheet,
            spiderWalkingStartX, spiderWalkingStartY, spiderWalkingWidth, spiderWalkingHeight, 4, 0.1, 2.5);

    };

    update() {

        if (this.dead) {
            if (this.deadTime === 0) {
                this.deadTime += this.game.clockTick;
            }
            if (this.deadTime > 1.1) {
                console.log("runs")
                this.boundingBox = undefined;
                this.removeFromWorld = true;

            }
        }

        //TODO walk only when moving for anim
        this.walking = true
        if (!this.paused && !this.dead && !this.isaac.crying) {
            let r = Math.floor(Math.random() * 100);
            if(r===4){
                this.up = false;
                this.down = false;
                this.left = true;
                this.right = false;
            }else if(r===8){
                this.up = false;
                this.down = false;
                this.left = false;
                this.right = true;
            }else if(r===16){
                this.up = true;
                this.down = false;
                this.left = false;
                this.right = false;
            }else if(r===20){
                this.up = false;
                this.down = true;
                this.left = false;
                this.right = false;
            }
            if(this.xPosition < this.moveBoundsRight && this.left === true){
                this.xPosition += this.game.clockTick*this.movementSpeed;
                this.yPosition += this.game.clockTick*r
            }
            if(this.xPosition > this.moveBoundsLeft && this.right === true){
                this.xPosition -= this.game.clockTick*this.movementSpeed;
                this.yPosition -= this.game.clockTick*r;
            }
            if(this.yPosition > this.moveBoundsUp && this.up === true){
                this.yPosition -= this.game.clockTick*this.movementSpeed;

                this.xPosition -= this.game.clockTick*r;
            }
            if(this.yPosition < this.moveBoundsDown && this.down === true){
                this.yPosition += this.game.clockTick*this.movementSpeed;
                this.xPosition -= this.game.clockTick*r;
            }

            this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);

        }

        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick;
        }

    };

    draw(ctx) {
        if (this.dead) {
            this.animations[1].drawFrame(this.game.clockTick,ctx, this.xPosition, this.yPosition);
        } else if (this.walking) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        }
    }
}
