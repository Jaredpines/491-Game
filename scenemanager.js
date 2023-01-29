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
        this.onceR = false;
        this.moveBounds = false;
        this.moveBoundsR = false;
        this.floor1 = new Floor(this.game,1);
        this.hud = new Hud(this.game, this.isaac_body);
        this.i = 1;
        this.coolDown = 0;

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
        
        this.game.addEntity(new Controls(0,0,this.game));
        this.game.addEntity(this.isaac_body);
        this.game.addEntity(this.isaac_head);
        let fly_enemy = new Fly(this.game)
        this.game.addEntity(fly_enemy);
        this.game.addEntity(this.hud);

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
        
        if (this.game.keys.Enter&&this.title == true) {
            this.title = false;
            this.loadFloor();
            while(this.floor1.roomMax != 0 || this.game.keys.j){
                this.floor1.addRoom("left");
                this.floor1.addRoom("right");
            }
            console.log(this.floor1.rooms.toString())
            //this.floor1.addRoom("right");
        }
        
        if(this.floor1.rooms != null){
            for (let index = 0; index < this.floor1.rooms.length; index++) {
                for (let index2 = 0; index2 < this.floor1.rooms.length; index2++) {
                    if(this.floor1.rooms[index][index2] != null && this.floor1.camera.slideR == 1471){
                        if(this.floor1.rooms[index][index2].door.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].door.boundingBox)|| (this.floor1.camera.slide != 0 &&this.once == true)){
                                this.floor1.moveRoom("left");
                                if(this.moveBounds == false){
                                    this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft - 1471;
                                    this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft - 1471;
                                    this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight - 1471;
                                    this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight - 1471;
                                    this.isaac_body.xPosition = this.isaac_body.xPosition - 450
                                    this.isaac_head.xPosition = this.isaac_head.xPosition - 450
                                    this.hud.hudStatsX = this.hud.hudStatsX-1471;
                                    this.hud.hudPickupsX = this.hud.hudPickupsX-1471;
                                    this.hud.hudHealthX = this.hud.hudHealthX-1471;
                                    this.moveBounds = true;
                                }
                                this.once = true;
                            }
                            else{
                                this.once = false;
                                this.moveBounds = false;
                            }
                        }
                    }
                    if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slide == 0 )){
                        if(this.floor1.rooms[index][index2].doorOp.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOp.boundingBox)|| (this.floor1.camera.slideR != 1471 &&this.onceR == true)){
                                this.floor1.moveRoom("right");
                                if(this.moveBoundsR == false){
                                    this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft + 1471;
                                    this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft + 1471;
                                    this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight + 1471;
                                    this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight + 1471;
                                    this.isaac_body.xPosition = this.isaac_body.xPosition + 450
                                    this.isaac_head.xPosition = this.isaac_head.xPosition + 450
                                    this.hud.hudStatsX = this.hud.hudStatsX+1471;
                                    this.hud.hudPickupsX = this.hud.hudPickupsX+1471;
                                    this.hud.hudHealthX = this.hud.hudHealthX+1471;
                                    this.moveBoundsR = true;
                                }
                                this.onceR = true;
                            }
                            else{
                                this.onceR = false;
                                this.moveBoundsR = false;
                            }
                        }
                    }
                }
                
            }
        }
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