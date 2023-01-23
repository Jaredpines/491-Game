class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        const titleWidth = document.getElementById('gameWorld').width;
        const titleHeight = document.getElementById('gameWorld').height;


        this.gameOver = false;

        this.title = true;
        this.credits = false;
        this.level = null;

        this.titleSpritesheet = ASSET_MANAGER.getAsset("./res/title_menu_sprites.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 540, 0, 0, titleWidth, titleHeight);

        this.animations = [];
        this.loadAnimations();

    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        })
    };

    loadFloor(floor, x, y, transition, title) {
        this.title = title;
        this.floor = floor;
        this.clearEntities();
        this.x = 0;
        this.game.addEntity(new Room(1471,0,this.game));
        this.game.addEntity(new Room(0,0,this.game));
        this.game.addEntity(new Controls(0,0,this.game));
        let isaac_body = new Isaac_Body(this.game)
        let isaac_head = new Isaac_Head(this.game)
        this.game.addEntity(isaac_body);
        this.game.addEntity(isaac_head);

    };

    loadAnimations() {
        for (var i = 0; i < 2; i++) { // Three animated title aspects
            this.animations.push([]);
        }

        //Press Start = 0
        this.animations[0] = new Animator(this.titleSpritesheet, 9, 386, 158, 140, 2, 0.5, 3.5);
        //Fly = 1
        this.animations[1] = new Animator(this.titleSpritesheet, 344, 383, 68, 85, 4, 0.1, 3);
        //Title = 3
        this.animations[2] = new Animator(this.titleSpritesheet, 108, 288, 264, 80, 3, 0.5, 3);

    };



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

        if (this.game.keys.Enter) {
            this.title = false;
            console.log("Enter key pressed")
            this.loadFloor()
        }

    };

    draw(ctx) {
        this.count += (1*this.game.clockTick);
        const titleWidth = document.getElementById('gameWorld').width;
        const titleHeight = document.getElementById('gameWorld').height;
        if (this.title && !this.credits) {

            ctx.drawImage(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 272, 0, 0, titleWidth, titleHeight);

            this.animations[0].drawFrame(this.game.clockTick, ctx, titleWidth * .3, titleHeight * 0.35);
            this.animations[1].drawFrame(this.game.clockTick, ctx, titleWidth * .73, titleHeight * 0.4);
            this.animations[2].drawFrame(this.game.clockTick, ctx, titleWidth * .235, titleHeight * 0.09);


        } else if (!this.title && this.credits) {

        } else if (!this.title && !this.credits) {
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_stats.png"),2,2,12,12, 0, 0, 0.1 * titleWidth, 0.1 * titleHeight);
        }


    };
}