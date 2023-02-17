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
        this.cupidsarrow = false;
        this.thehalo = false;
        this.squeezy = false;
        this.jesusjuice = false;
        this.trophy = false;
        this.bossItem = false;
        this.rand = Math.floor(Math.random() * 5)+1
    };


    update(){
        this.bounceCount += 1*this.game.clockTick;
        this.game.orderCorrecter();
    };

    

    draw(ctx){
        if(this.bossItem === false){
            if(this.rand === 1){
                if(this.bounceCount<0.5 && !this.itemGet){
                    this.synthoil = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_synthoil.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_synthoil.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_synthoil.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }else if(this.rand === 2){
                if(this.bounceCount<0.5 && !this.itemGet){
                    this.stigmata = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_stigmata.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_stigmata.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_stigmata.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }else if(this.rand === 3){
                if(this.bounceCount<0.5 && !this.itemGet){
                    this.cupidsarrow = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_cupidsarrow.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_cupidsarrow.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_cupidsarrow.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }else if(this.rand === 4){
                if(this.bounceCount<0.5 && !this.itemGet){
                    this.jesusjuice = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_jesusjuice.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_jesusjuice.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_jesusjuice.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }else if(this.rand === 5){
                if(this.bounceCount<0.5 && !this.itemGet){
                    this.thehalo = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_thehalo.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_thehalo.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && !this.itemGet){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/item_thehalo.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/itemP.png"),this.locX,this.locY,128,128);
            this.boundingBox = new BoundingBox(this.locX,this.locY,128,128)
            ctx.strokeRect(this.locX,this.locY,128,128);
        }else{
            this.trophy = true;
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/trophy.png"),this.locX,this.locY,128,256);
            this.boundingBox = new BoundingBox(this.locX,this.locY,128,256)
            ctx.strokeRect(this.locX,this.locY,128,256);
        }
        
        
        
    };
}