class Right_Door {
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
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),60-this.locX,(this.height/2)-(125/2)+this.locY,92,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_right.png"),50-this.locX,(this.height/2)-(196/2)+this.locY,132,196);
            this.boundingBox = new BoundingBox(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
        }else if(this.skin == "t"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/treasure_door_way_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            this.boundingBox = new BoundingBox(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
        }else if(this.skin == "s"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/shop_door_way_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            this.boundingBox = new BoundingBox(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
        }else if(this.skin == "b"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_way_right.png"),60-this.locX,(this.height/2)-(165/2)+this.locY,112,165);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_way_light_right.png"),-60-this.locX,(this.height/2)-(236/2)+this.locY,152,236);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_right.png"),50-this.locX,(this.height/2)-(236/2)+this.locY,152,236);
            this.boundingBox = new BoundingBox(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
        }else if(this.skin == "d"){        
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            this.boundingBox = new BoundingBox(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
        } else if(this.skin === "n_closed"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,92,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_closed_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,132,196);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_frame_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,132,196);
        }else if(this.skin == "t_closed"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/treasure_door_closed_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/treasure_door_way_right.png"),30-this.locX,(this.height/2)-(125/2)-35+this.locY,152,196);
        }else if(this.skin == "s_closed"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/shop_door_closed_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/shop_door_way_right.png"),30-this.locX,(this.height/2)-(125/2)-35+this.locY,152,196);
        }else if(this.skin == "b_closed"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_way_right.png"),60-this.locX,(this.height/2)-(165/2)+this.locY,112,165);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_closed_right.png"),20-this.locX,(this.height/2)-(196/2)+this.locY,200,200);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/boss_door_right.png"),50-this.locX,(this.height/2)-(236/2)+this.locY,152,236);
        }else if(this.skin == "d_closed"){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_closed_right.png"),40-this.locX,(this.height/2)-(196/2)+this.locY,152,196);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/devil_door_way_right.png"),50-this.locX,(this.height/2)-(125/2)+this.locY,112,125);
        }

        //ctx.strokeRect(50-this.locX,(this.height/2)-(125/2)+this.locY+10,92,110);
    };

}