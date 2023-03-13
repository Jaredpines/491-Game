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
        this.speedU = 0
        this.count = 0;
    };


    update(){
        this.count += 1*this.game.clockTick;
        if(this.count > 2){
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
        }

        
    };

    

    draw(ctx){
        if(!this.dead) {
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
        }else{
            this.boundingBox = undefined;
            this.game.removeFromWorld = true
        }
    };
}