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
        this.titleMusic = true;

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
        this.chest = new Chest(400,400,this.game);      
        this.fly_enemy = new Fly(900, 400, this.game, this.isaac_body)
        this.spider_enemy = new Spider(400, 400, this.game, this.isaac_body)
        this.jumping_spider_enemy = new JumpingSpider(400, 600, this.game, this.isaac_body);
        this.key = new Key(400,410,this.game);
        this.gurgling
        this.gurgling2
        this.itemP
        this.i = 1;
        this.coolDown = 0;
        this.driftCounter = 0;
        this.tempClock = 0;




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
        //this.game.addEntity(this.jumping_spider_enemy);
        this.game.addEntity(this.hud);
        this.game.addEntity(this.chest);
        ASSET_MANAGER.pauseBackgroundMusic();
        ASSET_MANAGER.playAsset("./music/the_cellar_alt.ogg");
        ASSET_MANAGER.autoRepeat("./music/the_cellar_alt.ogg");
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

    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);
    }

    update() {


        this.isaac_body.damage = this.isaac_head.damage;
        this.isaac_body.range = this.isaac_head.range;


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
            while(this.floor1.DRoomMax > 0){
                this.floor1.addDevilRoom("D");
            }
            this.floor1.toString();
            //this.game.ctx.translate(0,-200)
            //console.log(this.game.entities)
            //console.log(this.floor1.entityCount)
            //this.floor1.addRoom("right");
        } else if (this.game.keys.Shift && this.gameOver === true) {
            this.game.camera.gameOver = false;
            this.gameOver = false;
            this.game.ctx.translate(this.floor1.camera.ogX,this.floor1.camera.ogY)
            this.clearEntities();
            this.game.addEntity(new SceneManager(this.game));

        }

        this.updateAudio();

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
                                    if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                        // if (this.gurgling.dead && this.gurgling2.dead) {
                                        //     this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                        //     this.game.addEntity(this.itemP);
                                        // }
                                    }
                                    if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                        this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                        this.game.addEntity(this.itemP);
                                        console.log(this.itemP.locX)
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
                                }
                                this.onceR = true;
                            }
                            else{
                                this.onceR = false;
                                this.moveBoundsR = false;
                            }
                        }
                    }

                    if(this.floor1.rooms[index][index2] != null && this.floor1.camera.slideR == 1471){
                        if(this.floor1.rooms[index][index2].doorOpR.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpR.boundingBox)|| (this.floor1.camera.slide != 0 &&this.once == true)){
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
                        if(this.floor1.rooms[index][index2].doorR.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorR.boundingBox)|| (this.floor1.camera.slideR != 1471 &&this.onceR == true)){
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
                                    if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                    if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                        this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                        this.game.addEntity(this.itemP);
                                        console.log(this.itemP.locX)
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
                                    if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                    if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                        this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                        this.game.addEntity(this.itemP);
                                        console.log(this.itemP.locX)
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
                        if(this.floor1.rooms[index][index2].doorOpU.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpU.boundingBox)|| (this.floor1.camera.slideD != 997 &&this.onceD == true)){
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
                                }
                                this.onceD = true;
                            }
                            else{
                                
                                this.onceD = false;
                                this.moveBoundsD = false;
                            }
                        }
                    }

                    if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slideD == 997 )){
                        if(this.floor1.rooms[index][index2].doorOpD.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpD.boundingBox)|| (this.floor1.camera.slideU != 0 &&this.onceU == true)){
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
                        if(this.floor1.rooms[index][index2].doorD.boundingBox != null){
                            if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorD.boundingBox)|| (this.floor1.camera.slideD != 997 &&this.onceD == true)){
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
                                    if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                        this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling);
                                        this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                        this.game.addEntity(this.gurgling2);
                                        console.log(this.gurgling.locX)
                                        console.log(this.isaac_body.xPosition)
                                    }
                                    if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                        this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                        this.game.addEntity(this.itemP);
                                        console.log(this.itemP.locX)
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
        this.tempClock += 1*this.game.clockTick;

        if(this.isaac_head.tear != null){
            if(this.isaac_head.tear.boundingBox != null && this.fly_enemy.boundingBox != null){
                if(this.isaac_head.tear.boundingBox.collide(this.fly_enemy.boundingBox)){
                    this.fly_enemy.flyHealth -= this.isaac_head.tear.damage
                    console.log(this.fly_enemy.flyHealth)
                    this.isaac_head.tear.range = 0;
                    this.isaac_head.tear.boundingBox = undefined;
                }
            }
            if (this.isaac_head.tear.boundingBox != null && this.spider_enemy.boundingBox != null) {
                if (this.isaac_head.tear.boundingBox.collide(this.spider_enemy.boundingBox)) {
                    this.spider_enemy.health -= this.isaac_head.tear.damage
                    this.isaac_head.tear.range = 0;
                    this.isaac_head.tear.boundingBox = undefined;
                }
            }
            if (this.gurgling != null) {

                if (this.isaac_head.tear.boundingBox != null && this.gurgling.boundingBox != null) {
                    if (this.isaac_head.tear.boundingBox.collide(this.gurgling.boundingBox)) {
                        this.gurgling.health -= this.isaac_head.tear.damage
                        this.isaac_head.tear.range = 0;
                        this.isaac_head.tear.boundingBox = undefined;
                    }
                }
                if (this.isaac_head.tear.boundingBox != null && this.gurgling2.boundingBox != null) {
                    if (this.isaac_head.tear.boundingBox.collide(this.gurgling2.boundingBox)) {
                        this.gurgling2.health -= this.isaac_head.tear.damage
                        this.isaac_head.tear.range = 0;
                        this.isaac_head.tear.boundingBox = undefined;
                    }
                }
            }
        }
        if (this.gurgling != null) {
            if (this.isaac_head != null && this.isaac_body != null && this.tempClock > 1) {
                if(this.gurgling.boundingBox != null){
                    if (this.isaac_head.boundingBox.collide(this.gurgling.boundingBox)
                        || this.isaac_body.boundingBox.collide(this.gurgling.boundingBox)) {
                        this.isaac_body.takeDamage(1);
                        console.log("took 1 damage");
                        this.tempClock = 0;
                    }
                }
            }
            if (this.isaac_head != null && this.isaac_body != null && this.tempClock > 1) {
                if(this.gurgling2.boundingBox != null){
                    if (this.isaac_head.boundingBox.collide(this.gurgling2.boundingBox)
                        || this.isaac_body.boundingBox.collide(this.gurgling2.boundingBox)) {
                        this.isaac_body.takeDamage(1);
                        console.log("took 1 damage");
                        this.tempClock = 0;
                    }
                }
            }
        }
        if (this.isaac_head != null && this.isaac_body != null && this.tempClock > 1) {
            if(this.fly_enemy.boundingBox != null){
                if (this.isaac_head.boundingBox.collide(this.fly_enemy.boundingBox)
                    || this.isaac_body.boundingBox.collide(this.fly_enemy.boundingBox)) {
                    this.isaac_body.takeDamage(1);
                    console.log("took 1 damage");
                    this.tempClock = 0;
                }
            }
            if(this.spider_enemy.boundingBox != null){
                if (this.isaac_head.boundingBox.collide(this.spider_enemy.boundingBox)
                    || this.isaac_body.boundingBox.collide(this.spider_enemy.boundingBox)) {
                    this.isaac_body.takeDamage(1);
                    console.log("took 1 damage");
                    this.tempClock = 0;
                }
            }
        }
        if (this.isaac_body != null) {
            if(this.chest.boundingBox != null){
                if (this.isaac_body.boundingBox.collide(this.chest.boundingBox)) {
                    if (this.chest.open == false) {
                        ASSET_MANAGER.playAsset("./sounds/chest_open_1.wav")
                    }
                    this.chest.open = true;
                    if(this.driftCounter < 0.1){
                        this.game.addEntity(this.key);
                    }
                    if(this.isaac_body.boundingBox.right-80 > this.chest.boundingBox.left){
                        this.chest.locX -= 500*this.game.clockTick;
                    }
                    if(this.isaac_body.boundingBox.left+80 < this.chest.boundingBox.right){
                        this.chest.locX += 500*this.game.clockTick;
                    }
                    if(this.isaac_body.boundingBox.bottom-60 > this.chest.boundingBox.top){
                        this.chest.locY -= 500*this.game.clockTick;
                    }
                    if(this.isaac_body.boundingBox.top+60 < this.chest.boundingBox.bottom){
                        this.chest.locY += 500*this.game.clockTick;
                    }
                    
                }
            }
            if (this.isaac_body != null) {
                if(this.key.boundingBox != null){
                    if (this.isaac_body.boundingBox.collide(this.key.boundingBox)) {
                       this.key.boundingBox = undefined;
                       this.key.removeFromWorld = true;
                       this.isaac_body.keyPickup += 1
                        
                    }
                }
            }
            if(this.chest != null){
                if(this.chest.open == true){
                    this.driftCounter += 1*this.game.clockTick;
                    if(this.driftCounter < 1){
                        this.key.locX += 200*this.game.clockTick;
                        this.key.locY += 200*this.game.clockTick;
                    }
                }
            }
            if (this.isaac_body != null && this.itemP != null) {
                if(this.itemP.boundingBox != null){
                    if (this.isaac_body.boundingBox.collide(this.itemP.boundingBox)) {
                        if(this.itemP.stigmata == true && this.itemP.itemGet == false){
                            this.isaac_head.damage += 0.3;
                            this.isaac_body.maxRedHearts += 2;
                            this.isaac_body.redHearts += 2;
                        }
                        if(this.itemP.synthoil == true && this.itemP.itemGet == false){
                            this.isaac_head.damage += 1;
                            this.isaac_head.range += 1.5;
                        }
                        this.itemP.itemGet = true;
                        if(this.driftCounter < 0.1){
                            this.game.addEntity(this.key);
                        }
                        if(this.isaac_body.boundingBox.right-80 > this.itemP.boundingBox.left){
                            this.itemP.locX -= 500*this.game.clockTick;
                        }
                        if(this.isaac_body.boundingBox.left+80 < this.itemP.boundingBox.right){
                            this.itemP.locX += 500*this.game.clockTick;
                        }
                        if(this.isaac_body.boundingBox.bottom-60 > this.itemP.boundingBox.top){
                            this.itemP.locY -= 500*this.game.clockTick;
                        }
                        if(this.isaac_body.boundingBox.top+60 < this.itemP.boundingBox.bottom){
                            this.itemP.locY += 500*this.game.clockTick;
                        }
                        
                    }
                    else{
                        this.itemP.locX = this.itemP.locXOg;
                        this.itemP.locY = this.itemP.locYOg;
                    }
                }
            }
        }

        if (this.title === true && this.titleMusic === true && this.game.click) {
            ASSET_MANAGER.pauseBackgroundMusic();
            ASSET_MANAGER.playAsset("./music/title_screen.ogg");
            ASSET_MANAGER.autoRepeat("./music/title_screen.ogg");
            this.titleMusic = false;
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