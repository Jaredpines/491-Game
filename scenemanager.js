class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.gameOver = false;
        this.activated = false;

        this.title = true;
        this.credits = false;
        this.level = null;

        this.titleWidth = document.getElementById('gameWorld').width;
        this.titleHeight = document.getElementById('gameWorld').height;

        this.titleSpritesheet = ASSET_MANAGER.getAsset("./res/title_menu_sprites.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 540, 0, 0, this.titleWidth, this.titleHeight);
        this.isaac_body = new Isaac_Body(this.game)
        this.isaac_head = new Isaac_Head(this.game)
        this.animations = [];
        this.loadAnimations();
        this.once = false;
        this.floor1 = new Floor(this.game);

    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        })
    };

    loadFloor(floor, x, y, transition, title) {
        this.title = title;
        this.floor = floor;
        this.x = 0;
        //this.game.addEntity(new Normal_Room(1471,0,this.game));
        this.floor1.addBaseRoom();
        this.floor1.addRoom("left");
        
        this.game.addEntity(new Controls(0,0,this.game));
        this.game.addEntity(this.isaac_body);
        this.game.addEntity(this.isaac_head);
        let fly_enemy = new Fly(this.game)
        this.game.addEntity(fly_enemy);
        this.game.addEntity(new Hud(this.game));

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
        
        //console.log(this.isaac_body.xPosition)
        if (this.game.keys.Enter&&this.title == true) {
            this.title = false;
            console.log("Enter key pressed");
            this.loadFloor();
        }

        if(this.isaac_body.boundingBox.collide(this.floor1.door.boundingBox)|| (this.floor1.camera.slide < 1471&&this.once == true)){
            this.floor1.moveRoom("left");
            this.once = true;
        }else{
            this.once = false;
        }
        console.log(this.floor1.camera.slide)

    };

    draw(ctx) {
        this.count += (1*this.game.clockTick);

        if (this.title && !this.credits) {

            ctx.drawImage(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 272, 0, 0, this.titleWidth, this.titleHeight);

            this.animations[0].drawFrame(this.game.clockTick, ctx, this.titleWidth * .3, this.titleHeight * 0.35);
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.titleWidth * .73, this.titleHeight * 0.4);
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.titleWidth * .235, this.titleHeight * 0.09);


        } else if (!this.title && this.credits) {

        } else if (!this.title) {
        }


    };
}