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
        this.toothpicks = false;
        this.trophy = false;
        this.bossItem = false;
        this.rand = Math.floor(Math.random() * 6)+1
        this.payFor = false;
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
            }else if(this.rand == 6){
                if(this.bounceCount<0.5 && this.itemGet == false){
                    this.toothpicks = true;
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/toothpicks.png"),this.locX-5,this.itemY,128,128);
                    this.itemY += 25*this.game.clockTick;
                }else if(this.bounceCount < 1 && this.itemGet == false){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/toothpicks.png"),this.locX-5,this.itemY,128,128);
                    this.itemY -= 25*this.game.clockTick;
                }else if(this.bounceCount >= 1 && this.itemGet == false){
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/toothpicks.png"),this.locX-5,this.itemY,128,128);
                    this.bounceCount = 0;
                }
            }
            // else if(this.rand <= 7){
            //     if(this.bounceCount<0.5 && this.itemGet == false){
            //         this.squeezy = true;
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/costume_squeezy.png"),this.locX-5,this.itemY,128,128);
            //         this.itemY += 25*this.game.clockTick;
            //     }else if(this.bounceCount < 1 && this.itemGet == false){
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/costume_squeezy.png"),this.locX-5,this.itemY,128,128);
            //         this.itemY -= 25*this.game.clockTick;
            //     }else if(this.bounceCount >= 1 && this.itemGet == false){
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/costume_squeezy.png"),this.locX-5,this.itemY,128,128);
            //         this.bounceCount = 0;
            //     }
            // }
            if(this.payFor === false){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/itemP.png"),this.locX,this.locY,128,128);
                this.boundingBox = new BoundingBox(this.locX,this.locY,128,128)
                //ctx.strokeRect(this.locX,this.locY,128,128);
            }else if(this.payFor === true && !this.itemGet){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/1.png"),this.locX,this.locY,64,64);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/5.png"),this.locX+32,this.locY,64,64);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/cents.png"),this.locX+64,this.locY,64,64);
                this.boundingBox = new BoundingBox(this.locX,this.locY,64,64)
                this.bounceCount = 0;
                this.itemY -= 25*this.game.clockTick;
            }
            
        }else{
            this.trophy = true;
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/trophy.png"),this.locX,this.locY,128,256);
            this.boundingBox = new BoundingBox(this.locX,this.locY,128,256)
            //ctx.strokeRect(this.locX,this.locY,128,256);
        }
        
        
        
    };
}