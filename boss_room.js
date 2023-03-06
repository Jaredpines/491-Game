class Boss_Room {
    constructor(locX, locY, direction, game,level,s){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.direction = direction
        this.locTLX = Math.floor(0-this.locX)
        this.locTRX = Math.floor(-1472+this.locX)
        this.locBLX = Math.floor(0-this.locX)
        this.locBRX = Math.floor(-1472+this.locX)
        this.locTLY = Math.floor(0+this.locY)
        this.locTRY = Math.floor(0+this.locY)
        this.locBLY = Math.floor(-992-this.locY)
        this.locBRY = Math.floor(-992-this.locY)
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
        this.skin = "b"
        this.level = level;
        this.s = s;
    };


    update(){
        if(this.direction === "left"){
            this.door = new Left_Door(this.locX-1472,this.locY,this.game,this.skin)
            this.doorOp = new Right_Door(this.locX-1250,this.locY,this.game,this.skin)
            this.game.addEntity(this.door);
            this.game.addEntity(this.doorOp);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "right"){
            this.doorR = new Right_Door(this.locX+221,this.locY,this.game,this.skin)
            this.doorOpR = new Left_Door(this.locX,this.locY,this.game,this.skin)
            this.game.addEntity(this.doorR);
            this.game.addEntity(this.doorOpR);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "up"){
            this.doorU = new Up_Door(this.locX,(-this.locY)-987,this.game,this.skin)
            this.doorOpU = new Down_Door(this.locX,(-this.locY)-992,this.game,this.skin)
            this.game.addEntity(this.doorU);
            this.game.addEntity(this.doorOpU);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "down"){
            this.doorD = new Down_Door(this.locX,-this.locY,this.game,this.skin)
            this.doorOpD = new Up_Door(this.locX,-this.locY,this.game,this.skin)
            this.game.addEntity(this.doorD);
            this.game.addEntity(this.doorOpD);
            this.game.orderCorrecter();
            this.direction = "";
        }else if(this.direction === "BL"||this.direction === "BR"||this.direction === "BU"||this.direction === "BD"){
            this.bossRoom()
        }else{
            this.direction = "";
        }
        
    };

    bossRoom(){
        if(this.direction === "BL"){
            this.direction = "left";
            this.skin = "b"
        }else if(this.direction === "BR"){
            this.direction = "right";
            this.skin = "b"
        }else if(this.direction === "BU"){
            this.direction = "up";
            this.skin = "b"
        }else if(this.direction === "BD"){
            this.direction = "down";
            this.skin = "b"
        }
    }

    draw(ctx){
        if(this.level < 3){
            if(this.s == 1){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }else{
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/02_cellar_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/02_cellar_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/02_cellar_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/02_cellar_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }
        }else if(this.level >= 3 && this.level < 5){
            if(this.s == 1){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/03_caves_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/03_caves_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/03_caves_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/03_caves_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }else{
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/04_catacombs_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/04_catacombs_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/04_catacombs_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/04_catacombs_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }
            
        }else if(this.level >= 5){
            if(this.s == 1){
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/05_depths_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/05_depths_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/05_depths_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/05_depths_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }else{
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/06_necropolis_basic.png"),this.locTLX,this.locTLY,768,544);
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/06_necropolis_basic.png"),this.locTRX,this.locTRY,768,544);
                ctx.restore();
                ctx.scale(-1,-1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/06_necropolis_basic.png"),this.locBLX,this.locBLY,768,544);
                ctx.restore();
                ctx.scale(-1,1);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/06_necropolis_basic.png"),this.locBRX,this.locBRY,768,544);
                ctx.scale(-1,-1);
                ctx.restore();
            }
            
        }
        
    };
}