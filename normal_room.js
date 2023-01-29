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
        this.doorU = 0;
        this.doorOp = 0;
        this.doorOpD = 0;
    };


    update(){
        if(this.direction === "left"){
            this.door = new Left_Door(this.locX-1471,0,this.game)
            this.doorOp = new Right_Door(this.locX-1250,0,this.game)
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "right"){
            this.door = new Left_Door(this.locX,0,this.game)
            this.doorOp = new Right_Door(this.locX+221,0,this.game)
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "up"){
            this.doorU = new Up_Door(0,(-this.locY)-987,this.game)
            this.doorOpD = new Down_Door(0,(-this.locY)-997,this.game)
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpD);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "down"){
            this.doorU = new Up_Door(0,-this.locY,this.game)
            this.doorOpD = new Down_Door(0,-this.locY,this.game)
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpD);
            this.game.orderCorrecter();
            this.direction = "";
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