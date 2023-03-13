class Gurdy_jr {

    constructor(locX, locY, game, isaac){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.isaac = isaac
        this.moveBoundsLeft = this.isaac.moveBoundsLeft;
		this.moveBoundsRight = this.isaac.moveBoundsRight-200;
		this.moveBoundsUp = this.isaac.moveBoundsUp+50;
		this.moveBoundsDown = this.isaac.moveBoundsDown-50;
        this.boundingBox = null;
        this.health = 250;
        this.distX =  this.isaac.xPosition - this.locX
        this.distY =  this.isaac.yPosition - this.locY
        this.wall = false
        this.wallU = false
        this.speed = 0
        this.dead = false;
        this.deadTime = 0;
        this.speedU = 0
        this.count = 0;
        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");
        this.animations = [];
        this.loadAnimations();
        this.animations[0] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 7);
        this.state = 0;
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // One State
            this.animations.push([]);
        }
    }

    update(){

        if (this.health <= 0) {
            this.dead = true;
            this.deadTime += 1 * this.game.clockTick;
            this.state = 0;
        }


        if (this.dead) {
            if (this.deadTime <= 0.01) {
                console.log("runs")
                this.deadTime += this.game.clockTick;
                ASSET_MANAGER.playAsset("./sounds/animal_squish_1.wav")

            }
            if (this.deadTime > 4.1) {
                console.log("runs")
                this.boundingBox = undefined;
                this.removeFromWorld = true;
            }
        }
        this.count += 1*this.game.clockTick;
        if(this.count > 2 && !this.dead){
            if(this.speed > 0 || this.speedU > 0){
                this.speed -= Math.abs(this.distX*this.game.clockTick);
                this.speedU -= Math.abs(this.distY*this.game.clockTick);
            }else{
                this.distX =  this.isaac.xPosition - this.locX
                this.distY =  this.isaac.yPosition - this.locY
                this.speed = Math.abs(this.distX)*2
                this.speedU = Math.abs(this.distY)*2
                if(this.distX > 0){
                    this.wall = true
                }else{
                    this.wall = false
                }
    
                if(this.distY > 0){
                    this.wallU = false
                }else{
                    this.wallU = true
                }
                
            }
            if(this.speed > 0){
                if(this.locX > this.moveBoundsLeft && this.wall == false){
                    this.locX -= (this.speed)*this.game.clockTick
                }else if(this.locX < this.moveBoundsRight){
                    this.locX += (this.speed)*this.game.clockTick
                    this.wall = true;
                }else{
                    this.wall = false;
                }
            }
            
            if(this.speedU > 0){
                if((this.locY < this.moveBoundsDown) && this.wallU == false){
                    this.locY += (this.speedU)*this.game.clockTick
                }else if(this.locY > this.moveBoundsUp ){
                    this.locY -= (this.speedU)*this.game.clockTick
                    this.wallU = true;
                }else{
                    this.wallU = false;
                }
            }
            console.log(this.wall)
        }
        if(this.count >= 4){
            this.count = 0
        }
        if (this.health <= 0) {
            this.dead = true;
            this.deadTime += 1 * this.game.clockTick;
            this.state = 0;
        }

        
    };

    

    draw(ctx){
        if(this.dead) {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_body.png"),this.locX,this.locY-160,320,320);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_move.png"),this.locX+60,this.locY-80,192,128);
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.locX-60, this.locY-110);
        } else if(!this.dead) {
            this.boundingBox = new BoundingBox(this.locX+20, this.locY, 280, 320/2.5);
            //ctx.strokeRect(this.locX+20, this.locY, 280, 320/2.5);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_body.png"),this.locX,this.locY-160,320,320);
            if(this.count <= 2){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_idle.png"),this.locX+60,this.locY-80,200,128);
            }else{
                if(Math.floor(this.count * 100)%2 == 0){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_move.png"),this.locX+60,this.locY-80,192,128);
                }else{
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurdy_jr_move2.png"),this.locX+60,this.locY-80,192,128);
                }
            }
        }
    };
}