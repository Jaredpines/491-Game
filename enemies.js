class Fly {
    constructor(game) {
        this.game = game;
        this.paused = true;
        this.dead = false;
        this.deadTime = 0;
        this.clocktick = game.clocktick;

        this.xPosition = 900;
        this.yPosition = 400;
        this.movementSpeed = 500;

        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");

        this.animations = [];
        this.loadAnimations();
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,32,24)
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
            this.boundingBox = new BoundingBox(0,0,0,0);
            if (this.deadTime === 0) {
                this.deadTime += this.game.clockTick;
            }
            if (this.deadTime > 1.1) {
                console.log("runs")
                this.removeFromWorld = true;
                
            }
        }
        if (!this.paused && !this.dead) {
            var that = this;
            /*this.game.entities.forEach(function (entity) {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Isaac_Body) {
                        entity.health -= 1;
                    };
                }
            });*/
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
    constructor(game) {
        this.game = game;
        this.paused = false;
        this.dead = false;
        this.walking = false;
        this.deadTime = 0;

        this.xPosition = 400;
        this.yPosition = 400;
        this.movementSpeed = 200;

        this.spiderSpriteSheet = ASSET_MANAGER.getAsset("./res/monster_spider.png");
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./res/monster_spider.png"), 0, 0, 32, 24, 2, 0.1, 2);
        // this.vertAnimator = new VertAnimator(ASSET_MANAGER.getAsset("./res/monster_spider.png"))

        this.animations = [];
        this.loadAnimations();
        this.boundingBox = new BoundingBox(this.xPosition,this.yPosition,21,15)
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
            this.boundingBox = new BoundingBox(0,0,0,0);
            if (this.deadTime === 0) {
                this.deadTime += this.game.clockTick;
            }
            if (this.deadTime > 1.1) {
                console.log("runs")
                this.removeFromWorld = true;

            }
        }
        if (!this.paused && !this.dead) {

            // function walk() {
            //     window.walking = true;
            //     console.log("walking")
            //     window.xPosition += window.clocktick * window.movementSpeed
            //     window.yPosition += window.clocktick * window.movementSpeed
            //     window.walking = false;
            //     setTimeout(walk, 2000)
            // }
            // setInterval(walk, 2000)
            // walk()

            // this.walking = true;
            // console.log("walking")
            // this.xPosition += this.game.clocktick
            // this.yPosition += this.game.clockTick


            // var that = this;
            /*this.game.entities.forEach(function (entity) {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Isaac_Body) {
                        entity.health -= 1;
                    };
                }
            });*/
        }
        if(this.health<=0){
            this.dead = true;
            this.deadTime += 1*this.game.clockTick
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
