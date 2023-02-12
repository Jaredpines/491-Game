class ItemP {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.locXOg = locX;
        this.locYOg = locY;
        this.bounceCount = 0;
        this.itemY = this.locY-120
        this.itemGet = false;
        this.boundingBox = null;
        this.synthoil = false;
        this.stigmata = false;
        this.rand = Math.floor(Math.random() * 2)+1
    };


    update(){
        this.bounceCount += 1*this.game.clockTick;
        this.game.orderCorrecter();
    };

    

    draw(ctx){
        this.boundingBox = new BoundingBox(this.locX,this.locY,116,100)
        ctx.strokeRect(this.locX,this.locY,116,100);
        if(this.rand == 1){
            if(this.bounceCount<0.5 && this.itemGet == false){
                this.synthoil = true;
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/synthoil.png"),this.locX-5,this.itemY,128,128);
                this.itemY += 25*this.game.clockTick;
            }else if(this.bounceCount < 1 && this.itemGet == false){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/synthoil.png"),this.locX-5,this.itemY,128,128);
                this.itemY -= 25*this.game.clockTick;
            }else{
                this.bounceCount = 0;
            }
        }else if(this.rand == 2){
            if(this.bounceCount<0.5 && this.itemGet == false){
                this.stigmata = true;
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/stigmata.png"),this.locX-5,this.itemY,128,128);
                this.itemY += 25*this.game.clockTick;
            }else if(this.bounceCount < 1 && this.itemGet == false){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/stigmata.png"),this.locX-5,this.itemY,128,128);
                this.itemY -= 25*this.game.clockTick;
            }else{
                this.bounceCount = 0;
            }
        }
        
        
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/itemP.png"),this.locX,this.locY,116,100);
    };
}