class Down_Door {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = new BoundingBox((this.width/2)-(125/2),-180-this.locY,92,125)
    };


    update(){
        
        
    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_down.png"),(this.width/2)-(125/2),-180-this.locY,125,92);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_down.png"),(this.width/2)-(196/2),-190-this.locY,196,132);
    };

}