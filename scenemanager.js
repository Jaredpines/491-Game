class SceneManager {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.coins = 0;
        this.bombs = 0;
        this.keys = 0;


    }

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hudpickups.png"),0,0,50,250);
    }
}