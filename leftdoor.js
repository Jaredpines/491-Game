class Left_Door {
    constructor(locX, locY, game,skin){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = new BoundingBox(50-locX,(this.height/2)-(125/2)+this.locY,92,125)
        this.skin = skin;
    };


    update(){
        
        
    };


    draw(ctx){
        if(this.skin === "n"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_left.png"),80-this.locX,(this.height/2)-(125/2)+this.locY,92,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_left.png"),50-this.locX,(this.height/2)-(196/2)+this.locY,132,196);
        }else if(this.skin == "t"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_left.png"),70-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/treasure_door_way_left.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
        }
        
        
    };

}