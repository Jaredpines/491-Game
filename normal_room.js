class Normal_Room {
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
        this.doorOp = 0;
        this.doorR = 0;
        this.doorOpR = 0;
        this.doorU = 0;
        this.doorOpU = 0;
        this.doorD = 0;
        this.doorOpD = 0;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.skin = "n"
    };


    update(){
        if(this.direction === "left"){
            this.door = new Left_Door(this.locX-1471,this.locY,this.game,this.skin)
            this.doorOp = new Right_Door(this.locX-1250,this.locY,this.game,this.skin)
            if(this.down == true){
                this.doorU = new Up_Door(this.locX,(-this.locY)-987,this.game,this.skin)
                this.doorOpU = new Down_Door(this.locX,(-this.locY)-997,this.game,this.skin)
            }
            if(this.up == true){
                this.doorD = new Down_Door(this.locX,-this.locY,this.game,this.skin)
                this.doorOpD = new Up_Door(this.locX,-this.locY,this.game,this.skin)
            }
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            if(this.doorU != 0 && this.doorOpU != 0){
                this.game.addEntity(this.doorU);
                this.game.addEntity(this.doorOpU);
            }
            if(this.doorD != 0 && this.doorOpD != 0){
                this.game.addEntity(this.doorD);
                this.game.addEntity(this.doorOpD);
            }
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "right"){
            this.doorR = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
            this.doorOpR = new Left_Door(this.locX,this.locY,this.game,this.skin)
            if(this.down == true){
                this.doorU = new Up_Door(this.locX,(-this.locY)-987,this.game,this.skin)
                this.doorOpU = new Down_Door(this.locX,(-this.locY)-997,this.game,this.skin)
            }
            if(this.up == true){
                this.doorD = new Down_Door(this.locX,-this.locY,this.game,this.skin)
                this.doorOpD = new Up_Door(this.locX,-this.locY,this.game,this.skin)
            }
            this.game.addEntity(this.doorR);
            this.game.addEntity(this.doorOpR);
            if(this.doorU != 0 && this.doorOpU != 0){
                this.game.addEntity(this.doorU);
                this.game.addEntity(this.doorOpU);
            }
            if(this.doorD != 0 && this.doorOpD != 0){
                this.game.addEntity(this.doorD);
                this.game.addEntity(this.doorOpD);
            }
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "up"){
            this.doorU = new Up_Door(this.locX,(-this.locY)-987,this.game,this.skin)
            this.doorOpU = new Down_Door(this.locX,(-this.locY)-997,this.game,this.skin)
            if(this.right == true){
                this.doorR = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
                this.doorOpR = new Left_Door(this.locX,this.locY,this.game,this.skin)
                console.log("flip1");
            }
            if(this.left == true){
                this.door = new Left_Door(this.locX,this.locY,this.game,this.skin)
                this.doorOp = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
                console.log("flip2");
            }
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpU);
            if(this.doorR != 0 && this.doorOpR != 0){
                this.game.addEntity(this.doorR);
                this.game.addEntity(this.doorOpR);
            }
            if(this.door != 0 && this.doorOp != 0){
                this.game.addEntity(this.door);
                this.game.addEntity(this.doorOp);
            }
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "down"){
            this.doorD = new Down_Door(this.locX,-this.locY,this.game,this.skin)
            this.doorOpD = new Up_Door(this.locX,-this.locY,this.game,this.skin)
            if(this.right == true){
                this.doorR = new Right_Door(this.locX-1250,this.locY,this.game,this.skin)
                this.doorOpR = new Left_Door(this.locX-1471,this.locY,this.game,this.skin)
                console.log("flip3");
            }
            if(this.left == true){
                this.door = new Left_Door(this.locX,this.locY,this.game,this.skin)
                this.doorOp = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
                console.log("flip4");
            }
            this.game.addEntity(this.doorD);
            this.game.addEntity(this.doorOpD);
            if(this.doorR != 0 && this.doorOpR != 0){
                this.game.addEntity(this.doorR);
                this.game.addEntity(this.doorOpR);
            }
            if(this.door != 0 && this.doorOp != 0){
                this.game.addEntity(this.door);
                this.game.addEntity(this.doorOp);
            }
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "TL"||this.direction === "TR"||this.direction === "TU"||this.direction === "TD"){
            this.treasureRoom()
        }else if(this.direction === "BL"||this.direction === "BR"||this.direction === "BU"||this.direction === "BD"){
            this.bossRoom()
        }else{
            this.direction = "";
        }
        
    };

    

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