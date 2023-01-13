class Room {
    constructor(){
    };


    update(){

    };


    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./01_basement_basic.png"),0,0,769,532);
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./01_basement_basic.png"),-1471,0,769,532);
        ctx.restore();
        ctx.scale(-1,-1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./01_basement_basic.png"),0,-997,769,532);
        ctx.restore();
        ctx.scale(-1,1);
        ctx.drawImage(ASSET_MANAGER.getAsset("./01_basement_basic.png"),-1471,-997,769,532);
        ctx.scale(-1,-1);
        ctx.restore();
        ctx.drawImage(ASSET_MANAGER.getAsset("./controls.png"),190,300,1100,340);
        ctx.drawImage(ASSET_MANAGER.getAsset("./w.png"),200,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./a.png"),260,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./s.png"),320,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./d.png"),380,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./up.png"),500,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./left.png"),560,625,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./down.png"),620,615,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./right.png"),680,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./e.png"),880,620,55,60);
        ctx.drawImage(ASSET_MANAGER.getAsset("./space.png"),1110,620,135,50);
    };
}