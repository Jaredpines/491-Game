class Pickup_coin {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = null;
        this.open = false;
    };


    update(){
        
        
    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_coin.png"), 0, 0, 32, 16, this.locX,this.locY,96,48);
        this.boundingBox = new BoundingBox(this.locX,this.locY,48,28);
        ctx.strokeRect(this.locX+20, this.locY+10,52,32);
        
    };

}