class Rocks {
    constructor(locX, locY){
        this.locX = locX;
        this.locY = locY;
        this.r = Math.floor(Math.random() * 3);
    };


    update(){
        
    };

    

    draw(ctx){
        if(this.r == 0){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock1.png"),this.locX,this.locY,128,128);
        }else if(this.r == 1){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock2.png"),this.locX,this.locY,128,128);
        }else if(this.r == 2){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/rock3.png"),this.locX,this.locY,128,128);
        }
    };
}