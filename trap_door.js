class Trap_Door {
    constructor(locX, locY, game,floor){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = null;
        this.floor = floor;
    };


    update(){
        
        
    };


    draw(ctx){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/trap_door_open.png"),(this.width/2)-(256/2)+this.locX,this.locY+(this.height/2)-(256/2),256,256);
            this.boundingBox = new BoundingBox((this.width/2)-(256/2)+this.locX+64,64+this.locY+(this.height/2)-(256/2),128,128);
            //ctx.strokeRect((this.width/2)-(256/2)+this.locX+64,64+this.locY+(this.height/2)-(256/2),128,128);
    };

}