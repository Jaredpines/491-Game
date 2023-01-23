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
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_stats.png"),100, 100, 1000, 500);
        console.log("in hud draw");
    };

}