class Up_Door {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = new BoundingBox((this.width/2)-(125/2)-this.locX,80-this.locY,125,92)
    };


    update(){
        
        
    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way.png"),(this.width/2)-(125/2)-this.locX,80-this.locY,125,92);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame.png"),(this.width/2)-(196/2)-this.locX,50-this.locY,196,132);
    };

}