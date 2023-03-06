class Pickup_key {
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
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_key.png"),this.locX,this.locY,48,66);
        this.boundingBox = new BoundingBox(this.locX,this.locY,48,66);
        //ctx.strokeRect(this.locX,this.locY,48,66);
        
    };

}