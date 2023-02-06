class Gurgling {

    constructor(locX, locY, game, isaac){
        this.game = game;
        this.paused = false;
        this.locX = locX;
        this.locY = locY;
        this.isaac = isaac
        this.moveBoundsLeft = this.isaac.moveBoundsLeft+50;
		this.moveBoundsRight = this.isaac.moveBoundsRight-50;
		this.moveBoundsUp = this.isaac.moveBoundsUp;
		this.moveBoundsDown = this.isaac.moveBoundsDown-100;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.facing = 2; // 0 = up, 1 = right, 2 = down, 3 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = attack, 3 = dead
        this.movementSpeed = 200;
        this.dead = false;
        this.deadTime = 0;
        this.clocktick = game.clocktick;
        this.tempCount = 0;


        this.gurlgingSpritesheet = ASSET_MANAGER.getAsset("./res/gurgling_spritesheet.png");
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./res/gurgling_spritesheet.png"), 125, 0, 38, 20, 1, 1, 2.5);


        this.animationsFeet = [];
        this.animationsFace = [];
        this.loadAnimations();
        this.bbWidth = 114
        this.bbHeight = 120
        this.boundingBox = new BoundingBox(this.locX,this.locY,this.bbWidth,this.bbHeight)
        this.health = 10
    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // Four Directions
            this.animationsFeet.push([]);
            for (var j = 0; j < 3; j++) { // Three States of Movement
                this.animationsFeet[i].push([]);
            }
        }

        for (var i = 0; i < 4; i++) { // Four States
            this.animationsFace.push([]);
        }

        //Feet
        //Idle Animation state = 0
        this.animationsFeet[0][0] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 1, 1, 3);
        this.animationsFeet[1][0] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 1, 1, 3);
        this.animationsFeet[2][0] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 1, 1, 3);
        this.animationsFeet[3][0] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 1, 1, 3);

        //Walking Animation state = 1
        //Facing Up = 0
        this.animationsFeet[0][1] = new Animator(this.gurlgingSpritesheet, 124, 50, 38, 20, 6, 0.3, 3);
        //Facing Right = 1
        this.animationsFeet[1][1] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 4, 0.3, 3);
        //Facing Down = 2
        this.animationsFeet[2][1] = new Animator(this.gurlgingSpritesheet, 124, 75, 38, 20, 4, 0.3, 3);
        //Facing Left = 3
        this.animationsFeet[3][1] = new Animator(this.gurlgingSpritesheet, 124, 25, 38, 20, 4, 0.3, 3);

        //Attacking Animation state = 2
        //Facing Up = 0
        this.animationsFeet[0][2] = new Animator(this.gurlgingSpritesheet, 124, 50, 38, 20, 6, 0.1, 3);
        //Facing Right = 1
        this.animationsFeet[1][2] = new Animator(this.gurlgingSpritesheet, 124, 0, 38, 20, 4, 0.1, 3);
        //Facing Down = 2
        this.animationsFeet[2][2] = new Animator(this.gurlgingSpritesheet, 124, 75, 38, 20, 4, 0.1, 3);
        //Facing Left = 3
        this.animationsFeet[3][2] = new Animator(this.gurlgingSpritesheet, 124, 25, 38, 20, 4, 0.1, 3);

        //Face
        //Idle = 0
        this.animationsFace[0] = new Animator(this.gurlgingSpritesheet, 198, 216, 38, 40, 1, 1, 3.5);
        //Move = 1
        this.animationsFace[1] = new Animator(this.gurlgingSpritesheet, 197, 121, 40, 40, 2, 0.3, 3.5);
        //Attack = 2
        this.animationsFace[2] = new Animator(this.gurlgingSpritesheet, 192, 163, 41, 40, 5, 0.1, 3.5);
        //Dead = 3
        this.animationsFace[3] = new Animator(this.gurlgingSpritesheet, 198, 262, 38, 40, 1, 1, 3.5);

    };

    update(){

        if (this.health <= 0) {
            this.dead = true;
            this.deadTime += 1 * this.game.clockTick;
            this.state = 4;
        }

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

        if (!this.paused && !this.dead) {

            let r = Math.floor(Math.random() * 100);
            if (r == 4) {
                this.up = false;
                this.down = false;
                this.left = true;
                this.right = false;
            } else if (r == 8) {
                this.up = false;
                this.down = false;
                this.left = false;
                this.right = true;
            } else if (r == 16) {
                this.up = true;
                this.down = false;
                this.left = false;
                this.right = false;
            } else if (r == 20) {
                this.up = false;
                this.down = true;
                this.left = false;
                this.right = false;
            } else if (r >= 98) {
                this.up = false;
                this.down = false;
                this.left = false;
                this.right = false;
            }
            if (this.locX < this.moveBoundsRight && this.left === true) {
                this.locX += this.game.clockTick * 500;
            }
            if (this.locX > this.moveBoundsLeft && this.right === true) {
                this.locX -= this.game.clockTick * 500;
            }
            if (this.locY > this.moveBoundsUp && this.up === true) {
                this.locY -= this.game.clockTick * 500;
            }
            if (this.locY < this.moveBoundsDown && this.down === true) {
                this.locY += this.game.clockTick * 500;
            }

            this.boundingBox = new BoundingBox(this.locX, this.locY, this.bbWidth, this.bbHeight);
        }


        if (!this.dead) {
            if (this.left && !this.right) {
                this.facing = 3;
                this.state = 1;
            } else if (this.right && !this.left) {
                this.facing = 1;
                this.state = 1;
            } else if (this.up && !this.down) {
                this.facing = 0;
                this.state = 1;
            } else if (this.down && !this.up) {
                this.facing = 2;
                this.state = 1;
            } else {
                this.facing = 2;
                this.state = 0;
            }
        }

        if (this.health <= 0) {
            this.dead = true;
            this.deadTime += 1 * this.game.clockTick;
            this.state = 4;
        }

    };

    

    draw(ctx){

        this.count += (1*this.game.clockTick);
        if(this.dead) {
            this.animationsFace[0].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[2][0].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);

        } else if(this.down && !this.dead){
            this.animationsFace[this.state].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);


        }else if(this.right && !this.dead){
            this.animationsFace[this.state].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);


        }else if(this.left && !this.dead){
            this.animationsFace[this.state].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);


        }else if(this.up && !this.dead){
            this.animationsFace[this.state].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);

        } else {
            this.animationsFace[this.state].drawFrame(this.game.clockTick, ctx, this.locX, this.locY);
            this.animationsFeet[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.locX+33, this.locY+70);

        }
    };
}