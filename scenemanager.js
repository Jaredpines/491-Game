class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.gameOver = false;
        this.game.camera.gameOver = false;
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
        this.onceU = false;
        this.onceD = false;
        this.moveBounds = false;
        this.moveBoundsR = false;
        this.moveBoundsU = false;
        this.moveBoundsD = false;
        this.floor1 = new Floor(this.game,1);
        this.hud = new Hud(this.game, this.isaac_body);
        this.fly_enemy = new Fly(900, 400, this.game, this.isaac_body)
        this.spider_enemy = new Spider(400, 400, this.game, this.isaac_body)
        this.gurgling;
        this.gurgling2;
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
        this.game.addEntity(this.fly_enemy);
        this.game.addEntity(this.spider_enemy);
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
        if (!this.title && !this.paused) {
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

        if (this.game.camera.gameOver === true) {
            this.title = false;
            this.credits = false;
            this.gameOver = true;
        }

        if (this.game.keys.Enter && this.title === true) {
            this.title = false;
            this.loadFloor();
            while(this.floor1.roomMax > 0){
                this.floor1.addRoom("left");
                this.floor1.addRoom("up");
                this.floor1.addRoom("right");            
                this.floor1.addRoom("down");
                //console.log(this.floor1.roomMax)
                //max -= this.game.clockTick*100
            }
            while(this.floor1.TRoomMax > 0){
                this.floor1.addTreasureRoom("T");
            }
            while(this.floor1.BRoomMax > 0){
                this.floor1.addBossRoom("B");
            }
            this.floor1.toString();
            //this.game.ctx.translate(0,-200)
            //console.log(this.game.entities)
            //console.log(this.floor1.entityCount)
            //this.floor1.addRoom("right");
        } else if (this.game.keys.Shift && this.gameOver === true) {
            this.game.camera.gameOver = false;
            this.gameOver = false;

            this.clearEntities();
            this.game.addEntity(new SceneManager(this.game));

        }
        if(this.game.keys.k){
            this.game.ctx.translate(0,-2000*this.game.clockTick)
        }
        if(this.game.keys.i){
            this.game.ctx.translate(0,2000*this.game.clockTick)
        }
        if(this.game.keys.j){
            this.game.ctx.translate(2000*this.game.clockTick,0)
        }
        if(this.game.keys.l){
            this.game.ctx.translate(-2000*this.game.clockTick,0)
        }
        if(this.floor1.rooms != null){
            for (let index = 0; index < this.floor1.rooms.length; index++) {
                for (let index2 = 0; index2 < this.floor1.rooms.length; index2++) {
                    if(this.floor1.rooms[index][index2] != null && this.floor1.camera.slideR == 1471){
                        if(this.floor1.rooms[index][index2].door.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].door.boundingBox)|| (this.floor1.camera.slide != 0 &&this.once == true)){
                                if(this.isaac_head.tear != null){
                                    this.isaac_head.tear.removeFromWorld = true;
                                }
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
                                    if(this.floor1.rooms[index][index2].skin == "b"){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
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
                                if(this.isaac_head.tear != null){
                                    this.isaac_head.tear.removeFromWorld = true;
                                }
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
                                    if(this.floor1.rooms[index][index2].skin == "b"){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                }
                                this.onceR = true;
                            }
                            else{
                                this.onceR = false;
                                this.moveBoundsR = false;
                            }
                        }
                    }
                    if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slideD == 997 )){
                        if(this.floor1.rooms[index][index2].doorU.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorU.boundingBox)|| (this.floor1.camera.slideU != 0 &&this.onceU == true)){
                                if(this.isaac_head.tear != null){
                                    this.isaac_head.tear.removeFromWorld = true;
                                }
                                this.floor1.moveRoom("up");
                                if(this.moveBoundsU == false){
                                    this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp - 997;
                                    this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp - 997;
                                    this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown - 997;
                                    this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown - 997;
                                    this.isaac_body.yPosition = this.isaac_body.yPosition - 500
                                    this.isaac_head.yPosition = this.isaac_head.yPosition - 500
                                    this.hud.hudStatsY = this.hud.hudStatsY-997;
                                    this.hud.hudPickupsY = this.hud.hudPickupsY-997;
                                    this.hud.hudHealthY = this.hud.hudHealthY-997;
                                    this.moveBoundsU = true;
                                    if(this.floor1.rooms[index][index2].skin == "b"){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                }
                                this.onceU = true;
                            }
                            else{
                                this.onceU = false;
                                this.moveBoundsU = false;
                            }
                        }
                    }
                    if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slideU == 0 )){
                        if(this.floor1.rooms[index][index2].doorOpD.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpD.boundingBox)|| (this.floor1.camera.slideD != 997 &&this.onceD == true)){
                                if(this.isaac_head.tear != null){
                                    this.isaac_head.tear.removeFromWorld = true;
                                }
                                this.floor1.moveRoom("down");
                                if(this.moveBoundsD == false){
                                    this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp + 997;
                                    this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp + 997;
                                    this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown + 997;
                                    this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown + 997;
                                    this.isaac_body.yPosition = this.isaac_body.yPosition + 500
                                    this.isaac_head.yPosition = this.isaac_head.yPosition + 500
                                    this.hud.hudStatsY = this.hud.hudStatsY+997;
                                    this.hud.hudPickupsY = this.hud.hudPickupsY+997;
                                    this.hud.hudHealthY = this.hud.hudHealthY+997;
                                    this.moveBoundsD = true;
                                    if(this.floor1.rooms[index][index2].skin == "b"){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                }
                                this.onceD = true;
                            }
                            else{
                                
                                this.onceD = false;
                                this.moveBoundsD = false;
                            }
                        }
                    }
                }
                
            }
        }
        if(this.isaac_head.tear != null){
            if(this.isaac_head.tear.boundingBox != null && this.fly_enemy.boundingBox != null){
                if(this.isaac_head.tear.boundingBox.collide(this.fly_enemy.boundingBox)){
                    this.fly_enemy.flyHealth -= this.isaac_head.tear.damage*this.game.clockTick
                    console.log(this.fly_enemy.flyHealth)
                    this.isaac_head.tear.range = 0;
                    this.isaac_head.tear.boundingBox = undefined;
                }
            }
            if (this.isaac_head.tear.boundingBox != null && this.spider_enemy.boundingBox != null) {
                if (this.isaac_head.tear.boundingBox.collide(this.spider_enemy.boundingBox)) {
                    this.spider_enemy.health -= this.isaac_head.tear.damage*this.game.clockTick
                    this.isaac_head.tear.range = 0;
                    this.isaac_head.tear.boundingBox = undefined;
                }
            }
        }
        if (this.isaac_head != null && this.isaac_body != null) {
            if(this.fly_enemy.boundingBox != null){
                if (this.isaac_head.boundingBox.collide(this.fly_enemy.boundingBox)
                    || this.isaac_body.boundingBox.collide(this.fly_enemy.boundingBox)) {
                    this.isaac_body.takeDamage(2);
                    console.log("took 2 damage");
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
        }


    };
}