
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
        this.health = 5
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.flySpritesheet, 0, 32, 32, 32, 4, 0.08, 2.5);
        //Dead = 1
        this.animations[1] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 2.5);

    };

    update() {

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

        if(this.health<=0){
            this.deadTime += 1*this.game.clockTick
            this.dead = true;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
        //ctx.strokeRect(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
        if (this.dead) {
            this.animations[1].drawFrame(this.game.clockTick,ctx, this.xPosition, this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition,this.yPosition);
        }
    }
}

class Sucker {
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
        this.movementSpeed = 100;

        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");
        this.suckerSpritesheet = ASSET_MANAGER.getAsset("./res/monster_sucker.png");

        this.animations = [];
        this.loadAnimations();
        this.bbWidth = 32
        this.bbHeight = 24
        this.boundingBox = null;
        this.health = 5
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.suckerSpritesheet, 0, 0, 32, 32, 2, 0.08, 2.5);
        //Dead = 1
        this.animations[1] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 2.5);

    };

    update() {

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

        if(this.health<=0){
            this.deadTime += 1*this.game.clockTick
            this.dead = true;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
        //ctx.strokeRect(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
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
                ASSET_MANAGER.playAsset("./sounds/animal_squish_1.wav")

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
            }else if(r===24){
                this.up = false;
                this.down = true;
                this.left = true;
                this.right = false;
            }else if(r===28){
                this.up = false;
                this.down = true;
                this.left = false;
                this.right = true;
            }else if(r===32){
                this.up = true;
                this.down = false;
                this.left = true;
                this.right = false;
            }else if(r===36){
                this.up = true;
                this.down = false;
                this.left = false;
                this.right = true;
            }else if(r == 50){
                this.up = false;
                this.down = false;
                this.left = false;
                this.right = false;
            }
            if(this.xPosition < this.moveBoundsRight+35 && this.left === true){
                this.xPosition += this.game.clockTick*this.movementSpeed;
            }
            if(this.xPosition > this.moveBoundsLeft+15 && this.right === true){
                this.xPosition -= this.game.clockTick*this.movementSpeed;
            }
            if(this.yPosition > this.moveBoundsUp+35 && this.up === true){
                this.yPosition -= this.game.clockTick*this.movementSpeed;

            }
            if(this.yPosition < this.moveBoundsDown+50 && this.down === true){
                this.yPosition += this.game.clockTick*this.movementSpeed;
            }

        }

        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);
        //ctx.strokeRect(this.xPosition+10,this.yPosition+5,this.bbWidth+5,this.bbHeight);
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
        this.idle = true;
        this.windUp = false;
        this.jumpUp = false;
        this.jumpDown = false;
        this.jumpPeak = 0;
        this.deadTime = 0;
        this.elapsedTime = 0;
        this.intervalTime = 5;
        this.windUpTime = 1;

        this.xPosition = locX;
        this.yPosition = locY;
        this.moveBoundsRight = this.isaac.moveBoundsRight
        this.moveBoundsLeft = this.isaac.moveBoundsLeft
        this.moveBoundsUp = this.isaac.moveBoundsUp
        this.moveBoundsDown = this.isaac.moveBoundsDown
        this.movementSpeed = 200;
        this.lastIsaacXPosition = 0;
        this.lastIsaacYPosition = 0;

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
            idleStartX, idleStartY, idleWidth, idleHeight, 1, 1, 3);
        //Wind Up = 1
        this.animations[1] = new VertAnimator(this.jumpingSpiderSpriteSheet,
            windUpStartX, windUpStartY, windUpWidth, windUpHeight, 4, 0.2, 3);
        //Jump Up = 2
        this.animations[2] = new Animator(this.jumpingSpiderSpriteSheet,
            jumpUpStartX, jumpUpStartY, jumpUpWidth, jumpUpHeight, 4, 0.2, 3);
        //Jump Down = 3
        this.animations[3] = new Animator(this.jumpingSpiderSpriteSheet,
            jumpDownStartX, jumpDownStartY, jumpDownWidth, jumpDownHeight, 4, 0.2, 3);
        //Dead = 4
        this.animations[4] = new Animator(this.spiderSpriteSheet,
            deathStartX, deathStartY, deathHeightAndWidth, deathHeightAndWidth, 12, 0.1, 3)
    };

    update() {

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

        if (!this.paused && !this.dead && !this.isaac.crying) {

            this.elapsedTime += this.game.clockTick;
            console.log(this.elapsedTime);

            if (this.idle && this.elapsedTime >= this.intervalTime) {
                this.idle = false
                this.windUp = true
                this.elapsedTime = 0;
            }

            if (this.windUp) {
                this.lastIsaacXPosition = this.isaac.xPosition;
                this.lastIsaacYPosition = this.isaac.yPosition;
            }

            if (this.jumpUp) {
                while (this.xPosition !== this.lastIsaacXPosition && this.yPosition !== this.lastIsaacYPosition) {
                    let distX =  Math.abs(this.isaac.xPosition - this.xPosition);
                    let distY =  Math.abs(this.isaac.yPosition - this.yPosition);
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
                this.jumpUp = false;
                this.idle = true;
                this.elapsedTime = 0;
            }

            // while(this.xPosition){
            //     this.xPosition += this.game.clockTick*this.movementSpeed;
            //     this.yPosition += this.game.clockTick*r;
            // }

        }

        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,this.bbWidth,this.bbHeight);
        //ctx.strokeRect(this.xPosition+10,this.yPosition+5,this.bbWidth+5,this.bbHeight);
        if (this.dead) {
            this.animations[4].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        } else if (this.windUp) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
            if (this.animations[1].isDone()) {
                this.windUp = false;
                this.jumpUp = true;
            }
        } else if (this.jumpUp) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
            if (this.animations[2].isDone()) {
                this.jumpUp = false;
                this.jumpDown = true;
            }
        } else if (this.jumpDown) {
            this.animations[3].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
            if (this.animations[3].isDone()) {
                this.jumpDown = false;
                this.idle = true;
            }
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
        }
    }
}

class Pooter {
    constructor(locX, locY, game, isaac) {
        this.game = game;
        this.isaac = isaac
        this.paused = false;
        this.dead = false;
        this.deadTime = 0;
        this.clocktick = game.clocktick;
        this.attackPooter = false;
        this.tempCount = 0;


        this.xPosition = locX;
        this.yPosition = locY;
        this.moveBoundsRight = this.isaac.moveBoundsRight
        this.moveBoundsLeft = this.isaac.moveBoundsLeft
        this.moveBoundsUp = this.isaac.moveBoundsUp
        this.moveBoundsDown = this.isaac.moveBoundsDown
        this.movementSpeed = 300;
        this.damage = 1;
        this.range = 8;
        this.shotSpeed = 0.4;
        this.tearSkin = "./res/tears_balloon.png";

        this.pooterSpritesheet = ASSET_MANAGER.getAsset("./res/monster_pooter.png");
        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");

        this.animations = [];
        this.attackPooterAnim = false;
        this.loadAnimations();
        this.bbWidth = 32
        this.bbHeight = 24
        this.boundingBox = null;
        this.health = 8
    };

    loadAnimations() {
        for (var i = 0; i < 2; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.pooterSpritesheet, 0, 0, 32, 32, 2, 0.08, 2.5);
        //Dead = 1
        this.animations[1] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 2.5);
        //Attack = 2
        this.animations[2] = new Animator(this.pooterSpritesheet, 0, 33, 32, 32, 10, 0.05, 2.5);

    };

    update() {
        // TODO: Fix animation for attack not being consistent
        this.tempCount += (1*this.game.clockTick);

        this.attackPooterTime = this.tempCount % 2 * 100;

        if (this.attackPooterTime <= 1) {
            this.attackPooter = true;
            this.attackPooterAnim = true;
        } else {
            this.attackPooter = false;
        }
        //console.log(this.attackPooterAnim);
        if (this.attackPooterAnim = true) {
            if (this.tempCount % 2 * 10 <= 2) {
                this.attackPooterAnim = true;
            } else {
                this.attackPooterAnim = false;
            }
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

            //Attack tears
            if (this.attackPooter && !this.dead) {
                if (this.xPosition < this.isaac.xPosition) {
                    this.tear = new Tears(this.xPosition-10,this.yPosition+60,"isaacR",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
                    this.game.swapTearEntity(this.tear);
                } else if (this.xPosition > this.isaac.xPosition) {
                    this.tear = new Tears(this.xPosition-10,this.yPosition+60,"isaacL",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
                    this.game.swapTearEntity(this.tear);
                }

            }





        }

        if(this.health<=0){
            this.deadTime += 1*this.game.clockTick
            this.dead = true;
        }

    };

    draw(ctx) {
        this.boundingBox = new BoundingBox(this.xPosition+25,this.yPosition+20,this.bbWidth,this.bbHeight);
        //ctx.strokeRect(this.xPosition+27,this.yPosition+25,this.bbWidth,this.bbHeight);
        if (this.dead) {
            this.animations[1].drawFrame(this.game.clockTick,ctx, this.xPosition, this.yPosition);
        } else if (this.attackPooterAnim) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.xPosition,this.yPosition);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.xPosition,this.yPosition);
        }
    }
}
