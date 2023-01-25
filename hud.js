class Hud {
    constructor(game) {
        this.game = game;

        this.coins = 0;
        this.bombs = 0;
        this.keys = 0;
        this.x = 0
        this.y = 175
    }

    update(ctx) {

    };

    draw(ctx) {
        ctx.font = 'Upheaval';
        ctx.fontSize = "150%";
        ctx.fillStyle = "White";
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_stats.png"),this.x,this.y, 100, 600);
    };

}