class Pickup_bomb {
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
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_bomb.png"), 0, 0, 32, 32, this.locX,this.locY,96,96);
        this.boundingBox = new BoundingBox(this.locX,this.locY,56,56);
        ctx.strokeRect(this.locX+20, this.locY+20,56,56);
        
    };

}