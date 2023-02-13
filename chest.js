class Chest {
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
        if(this.open == false){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/chest_closed.png"),this.locX,this.locY,96,96);
        }else{
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/chest_open.png"),this.locX,this.locY,96,96);
        }
        this.boundingBox = new BoundingBox(this.locX,this.locY,96,96);
        ctx.strokeRect(this.locX,this.locY,96,96);
        
    };

}