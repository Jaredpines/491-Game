class Down_Door {
    constructor(locX, locY, game,skin){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.boundingBox = null;
        this.skin = skin;
    };


    update(){
        
        
    };


    draw(ctx){
        if(this.skin === "n"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_down.png"),(this.width/2)-(125/2)-this.locX,-180-this.locY,125,92);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_down.png"),(this.width/2)-(196/2)-this.locX,-190-this.locY,196,132);
        }else if(this.skin == "t"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_down.png"),(this.width/2)-(125/2)-this.locX,-180-this.locY,125,112);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/treasure_door_way_down.png"),(this.width/2)-(196/2)-this.locX,-190-this.locY,196,152);
        }else if(this.skin == "b"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_way_down.png"),(this.width/2)-(165/2)-this.locX,-180-this.locY,165,112);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_way_light_down.png"),(this.width/2)-(236/2)-this.locX,-300-this.locY,236,152);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_down.png"),(this.width/2)-(236/2)-this.locX,-190-this.locY,236,152);
        }else if(this.skin == "d"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_way_down.png"),(this.width/2)-(125/2)-this.locX,-180-this.locY,125,112);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_down.png"),(this.width/2)-(196/2)-this.locX,-190-this.locY,196,152);
        }
        this.boundingBox = new BoundingBox((this.width/2)-(125/2)-this.locX+10,-190-this.locY,110,92);
        //ctx.strokeRect((this.width/2)-(125/2)-this.locX+10,-190-this.locY,110,92);
    };

}