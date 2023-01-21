class SceneManager {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.coins = 0;
        this.bombs = 0;
        this.keys = 0;


    }

    draw(ctx) {
        if (this.title && !this.credits) {
            var titleWidth = document.getElementById('gameWorld').width;
            var titleHeight = document.getElementById('gameWorld').height;
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 272, 0, 0, titleWidth, titleHeight);
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 109, 288, 266, 85, 116, 28, titleWidth, titleHeight);
        } else if (this.title && this.credits) {

        }

        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_stats.png"),2,2,12,12, 0, 0, 0.1 * titleWidth, 0.1 * titleHeight);

        ctx.fillText("Test", 150, 150, 500);
    };
}