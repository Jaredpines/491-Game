class ItemP {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
    };


    update(){
        
        
        
    };

    

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/itemP.png"),this.locX,this.locY,116,100);
    };
}