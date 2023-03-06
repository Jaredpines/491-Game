class Pickup_hearts {
    constructor(heartType, locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        //heartType can be the following: fullRed, halfRed, fullBlue, halfBlue, fullBlack, halfBlack
        this.heartType = heartType
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = null;
        this.open = false;
    };


    update(){
        
        
    };


    draw(ctx){
        const heartWidthAndHeight = 32
        if (this.heartType === "fullRed") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 0, 0, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);
        } else if (this.heartType === "halfRed") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 32, 0, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);

        } else if (this.heartType === "fullBlue") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 0, 32, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);

        } else if (this.heartType === "halfBlue") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 32, 32, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);

        } else if (this.heartType === "fullBlack") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 0, 64, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);

        } else if (this.heartType === "halfBlack") {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/pickup_hearts.png"), 32, 64, heartWidthAndHeight, heartWidthAndHeight, this.locX,this.locY, 96, 96);

        }
        this.boundingBox = new BoundingBox(this.locX,this.locY,48,48);
        //ctx.strokeRect(this.locX+20, this.locY+20,48,48);
        
    };

}