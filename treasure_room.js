class Treasure_Room {
    constructor(locX, locY, direction, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.direction = direction
        this.locTLX = Math.floor(0-this.locX)
        this.locTRX = Math.floor(-1471+this.locX)
        this.locBLX = Math.floor(0-this.locX)
        this.locBRX = Math.floor(-1471+this.locX)
        this.locTLY = Math.floor(0+this.locY)
        this.locTRY = Math.floor(0+this.locY)
        this.locBLY = Math.floor(-997-this.locY)
        this.locBRY = Math.floor(-997-this.locY)
        this.door = 0;
        this.doorU = 0;
        this.doorOp = 0;
        this.doorOpD = 0;
        this.skin = "t"
    };


    update(){
        if(this.direction === "left"){
            this.door = new Left_Door(this.locX-1471,this.locY,this.game,this.skin)
            this.doorOp = new Right_Door(this.locX-1250,this.locY,this.game,this.skin)
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "right"){
            this.door = new Left_Door(this.locX,this.locY,this.game,this.skin)
            this.doorOp = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "up"){
            this.doorU = new Up_Door(this.locX,(-this.locY)-987,this.game,this.skin)
            this.doorOpD = new Down_Door(this.locX,(-this.locY)-997,this.game,this.skin)
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpD);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "down"){
            this.doorU = new Up_Door(this.locX,-this.locY,this.game,this.skin)
            this.doorOpD = new Down_Door(this.locX,-this.locY,this.game,this.skin)
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpD);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "TL"||this.direction === "TR"||this.direction === "TU"||this.direction === "TD"){
            this.treasureRoom()
        }else{
            this.direction = "";
        }
        
    };

    treasureRoom(){
        if(this.direction === "TL"){
            this.direction = "left";
            this.skin = "t"
        }else if(this.direction === "TR"){
            this.direction = "right";
            this.skin = "t"
        }else if(this.direction === "TU"){
            this.direction = "up";
            this.skin = "t"
        }else if(this.direction === "TD"){
            this.direction = "down";
            this.skin = "t"
        }
    }

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locTLX,this.locTLY,769,532);
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locTRX,this.locTRY,769,532);
        ctx.restore();
        ctx.scale(-1,-1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locBLX,this.locBLY,769,532);
        ctx.restore();
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locBRX,this.locBRY,769,532);
        ctx.scale(-1,-1);
        ctx.restore();
        
    };
}