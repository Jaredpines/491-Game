class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.gameOver = false;

        this.title = true;
        this.credits = false;
        this.level = null;

    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        })
    }

    loadFloor(floor, x, y, transition, title) {
        this.title = title;
        this.floor = floor;
        //this.clearEntities();
        this.x = 0;

    }

    update() {
        this.menuButtonTimer += this.game.clockTick;

        if (!this.title && !this.transition && !this.paused) {
            if (this.timer === undefined) {
                this.timer = 0;
            } else {
                this.timer += this.game.clockTick;
            }

            if (this.timer > 0.4) {
                this.time -= 1;
                this.timer = undefined;
            }
        }
    };

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