class Hud {
    constructor(game) {
        this.game = game;

        this.coins = 0;
        this.bombs = 0;
        this.keys = 0;


    }

    update(ctx) {

    };

    draw(ctx) {
        ctx.font = 'Upheaval';
        ctx.fontSize = "150%";
        ctx.fillStyle = "White";
        // var hud_stats = new Image();
        // hud_stats.src = "./res/hud_stats.png"
        //
        // ctx.fillText("Test", 150, 150);
        //
        // hud_stats.onload = function () {
        //     ctx.drawImage(ASSET_MANAGER.getAsset(hud_stats),2,2,12,12, 300, 300);
        // };

    };

}