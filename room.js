class Room {
    constructor(){
    };


    update(){

    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),0,0,769,532);
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),-1471,0,769,532);
        ctx.restore();
        ctx.scale(-1,-1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),0,-997,769,532);
        ctx.restore();
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/01_basement_basic.png"),-1471,-997,769,532);
        ctx.scale(-1,-1);
        ctx.restore();
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/controls.png"),190,300,1100,340);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/w.png"),200,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/a.png"),260,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/s.png"),320,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/d.png"),380,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/up.png"),500,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/left.png"),560,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/down.png"),620,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/right.png"),680,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/e.png"),880,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/space.png"),1110,620,135,50);
    };
}