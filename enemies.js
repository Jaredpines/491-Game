
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
        this.boundingBox = null;
        this.flyHealth = 5
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.flySpritesheet, 0, 32, 32, 32, 3, 0.08, 2.5);
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

            

        }

        if(this.flyHealth<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
        ctx.strokeRect(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
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
        this.tempCount = 0;

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
        this.boundingBox = null;
        this.health = 6.5
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

        const spiderDeathStartX = 68
        const spiderDeathStartY = 8
        const spiderDeathHeightAndWidth = 60


        //Idle = 0
        this.animations[0] = new Animator(this.spiderSpriteSheet,
            spiderIdleStartX, spiderIdleStartY, spiderIdleWidth, spiderIdleHeight, 1, 1, 2.5);
        //Walking = 1
        this.animations[1] = new VertAnimator(this.spiderSpriteSheet,
            spiderWalkingStartX, spiderWalkingStartY, spiderWalkingWidth, spiderWalkingHeight, 4, 0.1, 2.5);
        //Dead = 2
        this.animations[2] = new Animator(this.spiderSpriteSheet,
            spiderDeathStartX, spiderDeathStartY, spiderDeathHeightAndWidth, spiderDeathHeightAndWidth, 12, 0.1, 2.5)
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

        }

        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);
        ctx.strokeRect(this.xPosition+10,this.yPosition+5,this.bbWidth+5,this.bbHeight);
        if (this.dead) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else if (this.walking) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        }
        
    }
}

class JumpingSpider {
    constructor(locX, locY, game, isaac) {
        this.isaac = isaac
        this.game = game;
        this.paused = false;
        this.dead = false;
        this.windUp = false;
        this.jumpUp = false;
        this.jumpDown = false;
        this.jumpPeak = 0;
        this.deadTime = 0;
        this.tempCount = 0;

        this.xPosition = locX;
        this.yPosition = locY;
        this.moveBoundsRight = this.isaac.moveBoundsRight
        this.moveBoundsLeft = this.isaac.moveBoundsLeft
        this.moveBoundsUp = this.isaac.moveBoundsUp
        this.moveBoundsDown = this.isaac.moveBoundsDown
        this.movementSpeed = 200;

        this.jumpingSpiderSpriteSheet = ASSET_MANAGER.getAsset("./res/monster_jumping_spider.png");
        this.spiderSpriteSheet = ASSET_MANAGER.getAsset("./res/monster_spider.png");

        this.animations = [];
        this.loadAnimations();
        this.bbWidth = 30
        this.bbHeight = 30
        this.boundingBox = null;
        this.health = 100
    };


    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        const idleStartX = 5
        const idleStartY = 16
        const idleWidth = 37
        const idleHeight = 23

        const windUpStartX = 0
        const windUpStartY = 16
        const windUpHeight = 23
        const windUpWidth = 47

        const jumpUpStartX = 0
        const jumpUpStartY = 51
        const jumpUpWidth = 48
        const jumpUpHeight = 37

        const jumpDownStartX = 0
        const jumpDownStartY = 99
        const jumpDownWidth = 48
        const jumpDownHeight = 37

        const deathStartX = 68
        const deathStartY = 8
        const deathHeightAndWidth = 60


        //Idle = 0
        this.animations[0] = new Animator(this.jumpingSpiderSpriteSheet,
            idleStartX, idleStartY, idleWidth, idleHeight, 1, 1, 2.5);
        //Wind Up = 1
        this.animations[1] = new VertAnimator(this.jumpingSpiderSpriteSheet,
            windUpStartX, windUpStartY, windUpWidth, windUpHeight, 4, 0.2, 2.5);
        //Jump Up = 2
        this.animations[2] = new Animator(this.jumpingSpiderSpriteSheet,
            jumpUpStartX, jumpUpStartY, jumpUpWidth, jumpUpHeight, 4, 0.2, 2.5);
        //Jump Down = 3
        this.animations[3] = new Animator(this.jumpingSpiderSpriteSheet,
            jumpDownStartX, jumpDownStartY, jumpDownWidth, jumpDownHeight, 4, 0.2, 2.5);
        //Dead = 4
        this.animations[4] = new Animator(this.spiderSpriteSheet,
            deathStartX, deathStartY, deathHeightAndWidth, deathHeightAndWidth, 12, 0.1, 2.5)
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
            let lastIsaacXPosition = this.isaac.xPosition
            let lastIsaacYPosition = this.isaac.yPosition

            if (this.xPosition <= lastIsaacXPosition && this.yPosition <= lastIsaacYPosition) {
                //above, left of isaac

            } else if (this.xPosition >= lastIsaacXPosition && this.yPosition <= lastIsaacYPosition) {
                //above, right of isaac

            } else if (this.xPosition >= lastIsaacXPosition && this.yPosition >= lastIsaacYPosition) {
                //below, right of isaac

            } else if (this.xPosition <= lastIsaacXPosition && this.yPosition >= lastIsaacYPosition) {
                //below, left of isaac

            }

            while(this.xPosition){
                this.xPosition += this.game.clockTick*this.movementSpeed;
                this.yPosition += this.game.clockTick*r;
            }

        }

        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);
        ctx.strokeRect(this.xPosition+10,this.yPosition+5,this.bbWidth+5,this.bbHeight);
        if (this.dead) {
            this.animations[4].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else if (this.windUp) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else if (this.jumpUp) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else if (this.jumpDown) {
            this.animations[3].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        }
    }
}
