class Gurgling {
    constructor(locX, locY, game, issac){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.issac = issac;
        this.moveBoundsLeft = this.issac.moveBoundsLeft+50;
		this.moveBoundsRight = this.issac.moveBoundsRight-50;
		this.moveBoundsUp = this.issac.moveBoundsUp;
		this.moveBoundsDown = this.issac.moveBoundsDown-100;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    };


    update(){
        let r = Math.floor(Math.random() * 100);
        if(r==4){
            this.up = false;
            this.down = false;
            this.left = true;
            this.right = false;
        }else if(r==8){
            this.up = false;
            this.down = false;
            this.left = false;
            this.right = true;
        }else if(r==16){
            this.up = true;
            this.down = false;
            this.left = false;
            this.right = false;
        }else if(r==20){
            this.up = false;
            this.down = true;
            this.left = false;
            this.right = false;
        }
        if(this.locX < this.moveBoundsRight && this.left == true){
            this.locX += this.game.clockTick*500;
        }
        if(this.locX > this.moveBoundsLeft && this.right == true){
            this.locX -= this.game.clockTick*500;
        }
        if(this.locY > this.moveBoundsUp && this.up == true){
            this.locY -= this.game.clockTick*500;
        }
        if(this.locY < this.moveBoundsDown && this.down == true){
            this.locY += this.game.clockTick*500;
        }
        
        
    };

    

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurgling.png"),this.locX,this.locY,164,136);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/gurgling_idle.png"),this.locX+36,this.locY+110,96,44);
    };
}