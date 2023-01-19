class Controls {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.test = 0;
    };


    update(){

    };


    draw(ctx){
        let height = document.getElementById('gameWorld').height
        let width = document.getElementById('gameWorld').width
        if(this.test < width && this.test>width){
            this.test += 2000*this.game.clockTick
        }
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/controls.png"),190-this.locX+this.test,300,1100,340);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/w.png"),200-this.locX+this.test,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/a.png"),260-this.locX+this.test,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/s.png"),320-this.locX+this.test,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/d.png"),380-this.locX+this.test,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/up.png"),500-this.locX+this.test,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/left.png"),560-this.locX+this.test,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/down.png"),620-this.locX+this.test,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/right.png"),680-this.locX+this.test,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/e.png"),880-this.locX+this.test,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/space.png"),1110-this.locX+this.test,620,135,50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_left.png"),80-this.locX+this.test,(height/2)-(125/2),92,125);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_left.png"),50-this.locX+this.test,(height/2)-(196/2),132,196);
        ctx.save();
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_left.png"),100-this.locX-this.test,(height/2)-(125/2),92,125);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_left.png"),70-this.locX-this.test,(height/2)-(196/2),132,196);
        ctx.restore();
        
        
    };
}