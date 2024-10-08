class Chest {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = null;
        this.open = false;
        this.openSound = false;
    };


    update(){

    };


    draw(ctx){
        if(this.open == false){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/chest_closed.png"),this.locX,this.locY,128,128);
        }else{
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/chest_open.png"),this.locX,this.locY,128,128);
        }
        this.boundingBox = new BoundingBox(this.locX,this.locY,128,128);
        //ctx.strokeRect(this.locX,this.locY,128,128);
        
    };

}