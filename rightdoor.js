class Right_Door {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = new BoundingBox(50-locX,(this.height/2)-(125/2),92,125)
    };


    update(){
        
        
    };


    draw(ctx){
        ctx.save();
        ctx.scale(-1,1)
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_left.png"),80-this.locX,(this.height/2)-(125/2),92,125);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_left.png"),50-this.locX,(this.height/2)-(196/2),132,196);
        ctx.restore();
        
    };

}