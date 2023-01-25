class Controls {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
    };


    update(){

    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/controls.png"),190-this.locX,300,1100,340);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/w.png"),200-this.locX,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/a.png"),260-this.locX,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/s.png"),320-this.locX,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/d.png"),380-this.locX,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/up.png"),500-this.locX,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/left.png"),560-this.locX,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/down.png"),620-this.locX,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/right.png"),680-this.locX,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/e.png"),880-this.locX,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/space.png"),1110-this.locX,620,135,50);
        
        
        
    };
}