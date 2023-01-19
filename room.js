class Room {
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
        let locTL = Math.floor(0-this.locX+this.test)
        let locTR = Math.floor(-1471+this.locX-this.test)
        let locBL = Math.floor(0-this.locX+this.test)
        let locBR = Math.floor(-1471+this.locX-this.test)
        if(this.test < width && this.test>width ){
            this.test += 2000*this.game.clockTick
        }else{
            locTL = 0 + this.locX
            locTR = -1471 + this.locX
            locBL = 0 + this.locX
            locBR = -1471 + this.locX
        }
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),locTL,0-this.locY,769,532);
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),locTR,0-this.locY,769,532);
        ctx.restore();
        ctx.scale(-1,-1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),locBL,-997-this.locY,769,532);
        ctx.restore();
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),locBR,-997-this.locY,769,532);
        ctx.scale(-1,-1);
        
        
    };
}