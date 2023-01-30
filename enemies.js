class Fly {
    constructor(game) {
        this.game = game;
        this.paused = true;
        this.dead = false;
        this.deadTime = 0;

        this.xPosition = 900;
        this.yPosition = 400;
        this.movementSpeed = 500;

        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/monster_fly.png"), 0, 0, 32, 24, 2, 0.1, 2);

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