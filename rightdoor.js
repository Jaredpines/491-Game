class Right_Door {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = new BoundingBox(50-locX,(this.height/2)-(125/2)+this.locY,92,125)
    };


    update(){
        
        
    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),60-this.locX,(this.height/2)-(125/2)+this.locY,92,125);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_right.png"),50-this.locX,(this.height/2)-(196/2)+this.locY,132,196);
    };

}