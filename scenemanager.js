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
        this.level = 1;
        this.titleMusic = true;
        this.win = false;

        this.titleWidth = document.getElementById('gameWorld').width;
        this.titleHeight = document.getElementById('gameWorld').height;

        this.titleSpritesheet = ASSET_MANAGER.getAsset("./res/title_menu_sprites.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 540, 0, 0, this.titleWidth, this.titleHeight);
        this.isaac_body = new Isaac_Body(this.game)
        this.isaac_head = new Isaac_Head(this.game,this.isaac_body)
        this.iX = 10;
        this.iY = 10;
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
        this.hud = new Hud(this.game, this.isaac_body);
        this.floor1 = new Floor(this.game,1, this.isaac_body);
        this.premade = Array.from({length: 20}, () => new Array(20));
        this.gurgling;
        this.gurgling2;
        this.itemP;
        this.trophy;
        this.i = 1;
        this.coolDown = 0;
        this.driftCounter = 0;
        this.tempClock = 0;
        this.devil = false;
        this.exists = false;
        this.EIR = false;
        this.slideF = false;
        this.fire = new Fires("normal", 200, 200, this.game)
        this.trapDoorE = false;
        this.bx
        this.by
        this.TExist = false;

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
        //this.game.addEntity(new Normal_Room(1472,0,this.game));
        this.floor1.addBaseRoom();
        this.game.addEntity(new Controls(0,0,this.game));
        this.game.addEntity(this.isaac_body);
        this.game.addEntity(this.isaac_head);
        
        // this.game.addEntity(this.fly_enemy);
        // this.game.addEntity(this.spider_enemy);
        //this.game.addEntity(this.jumping_spider_enemy);
        // this.game.addEntity(this.sucker_enemy);
        //this.game.addEntity(this.pooter_enemy);
        this.game.addEntity(this.hud);
        this.game.addEntity(this.fire);
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

    update(ctx) {


        this.isaac_body.damage = this.isaac_head.damage;
        this.isaac_body.range = this.isaac_head.range;
        this.isaac_body.shotSpeed = this.isaac_head.shotSpeed;
        this.isaac_body.tears = this.isaac_head.tears;

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
            this.game.camera.win = false;
            this.isaac_body.dead = false;
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
        //rooms and sliding
        if(this.floor1.rooms != null){
            for (let index = 0; index < this.floor1.rooms.length; index++) {
                for (let index2 = 0; index2 < this.floor1.rooms[index].length; index2++) {
                    if(this.EIR == false  || this.slideF == false){
                        this.slideF = false
                        
                        if(this.floor1.rooms[index][index2] != null && this.floor1.camera.slideR == 1472){
                            if(this.floor1.rooms[index][index2].door.boundingBox != null){
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].door.boundingBox)|| (this.floor1.camera.slide != 0 &&this.once == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("left");
                                    
                                    if(this.moveBounds == false){
                                        this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft - 1472;
                                        this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft - 1472;
                                        this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight - 1472;
                                        this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight - 1472;
                                        this.isaac_body.xPosition = this.isaac_body.xPosition - 450
                                        this.isaac_head.xPosition = this.isaac_head.xPosition - 450
                                        this.hud.hudStatsX = this.hud.hudStatsX-1472;
                                        this.hud.hudPickupsX = this.hud.hudPickupsX-1472;
                                        this.hud.hudHealthX = this.hud.hudHealthX-1472;
                                        this.moveBounds = true;
                                        this.iX--;
                                        
                                        
                                        
                                        if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                            this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling);
                                            this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling2);
                                            console.log(this.gurgling.locX)
                                            console.log(this.isaac_body.xPosition)
                                            this.devil = true;
                                            this.trapDoorE = true;
                                            this.bx = -this.floor1.rooms[index][index2].locX
                                            this.by = this.floor1.rooms[index][index2].locY
                                        }
                                        if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                            this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.game.addEntity(this.itemP);
                                            console.log(this.itemP.locX)
                                            console.log(this.isaac_body.xPosition)
                                        }else if(this.floor1.rooms[index][index2].skin == "d"&& this.trophy == null){
                                            this.trophy = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.trophy.bossItem = true;
                                            this.game.addEntity(this.trophy);
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
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOp.boundingBox)|| (this.floor1.camera.slideR != 1472 &&this.onceR == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("right");
                                    if(this.moveBoundsR == false){
                                        console.log("doorOp")
                                        this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft + 1472;
                                        this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft + 1472;
                                        this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight + 1472;
                                        this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight + 1472;
                                        this.isaac_body.xPosition = this.isaac_body.xPosition + 450
                                        this.isaac_head.xPosition = this.isaac_head.xPosition + 450
                                        this.hud.hudStatsX = this.hud.hudStatsX+1472;
                                        this.hud.hudPickupsX = this.hud.hudPickupsX+1472;
                                        this.hud.hudHealthX = this.hud.hudHealthX+1472;
                                        this.moveBoundsR = true;
                                        this.iX++;
                                    }
                                    this.onceR = true;
                                }
                                else{
                                    this.onceR = false;
                                    this.moveBoundsR = false;
                                }
                            }
                        }
    
                        if(this.floor1.rooms[index][index2] != null && this.floor1.camera.slideR == 1472){
                            if(this.floor1.rooms[index][index2].doorOpR.boundingBox != null){
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpR.boundingBox)|| (this.floor1.camera.slide != 0 &&this.once == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("left");
                                    if(this.moveBounds == false){
                                        console.log("doorOpR")
                                        this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft - 1472;
                                        this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft - 1472;
                                        this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight - 1472;
                                        this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight - 1472;
                                        this.isaac_body.xPosition = this.isaac_body.xPosition - 450
                                        this.isaac_head.xPosition = this.isaac_head.xPosition - 450
                                        this.hud.hudStatsX = this.hud.hudStatsX-1472;
                                        this.hud.hudPickupsX = this.hud.hudPickupsX-1472;
                                        this.hud.hudHealthX = this.hud.hudHealthX-1472;
                                        this.moveBounds = true;
                                        this.iX--;
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
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorR.boundingBox)|| (this.floor1.camera.slideR != 1472 &&this.onceR == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("right");
                                    if(this.moveBoundsR == false){
                                        this.isaac_body.moveBoundsLeft = this.isaac_body.moveBoundsLeft + 1472;
                                        this.isaac_head.moveBoundsLeft = this.isaac_head.moveBoundsLeft + 1472;
                                        this.isaac_body.moveBoundsRight = this.isaac_body.moveBoundsRight + 1472;
                                        this.isaac_head.moveBoundsRight = this.isaac_head.moveBoundsRight + 1472;
                                        this.isaac_body.xPosition = this.isaac_body.xPosition + 450
                                        this.isaac_head.xPosition = this.isaac_head.xPosition + 450
                                        this.hud.hudStatsX = this.hud.hudStatsX+1472;
                                        this.hud.hudPickupsX = this.hud.hudPickupsX+1472;
                                        this.hud.hudHealthX = this.hud.hudHealthX+1472;
                                        this.moveBoundsR = true;
                                        this.iX++;
                                        console.log(this.iX)
                                        if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                            this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling);
                                            this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling2);
                                            console.log(this.gurgling.locX)
                                            console.log(this.isaac_body.xPosition)
                                            this.devil = true;
                                            this.trapDoorE = true;
                                            this.bx = -this.floor1.rooms[index][index2].locX
                                            this.by = this.floor1.rooms[index][index2].locY                                            
                                        }
                                        if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                            this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.game.addEntity(this.itemP);
                                            console.log(this.itemP.locX)
                                            console.log(this.isaac_body.xPosition)
                                        }else if(this.floor1.rooms[index][index2].skin == "d"&& this.trophy == null){
                                            this.trophy = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.trophy.bossItem = true;
                                            this.game.addEntity(this.trophy);
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
    
                        if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slideD == 992 )){
                            if(this.floor1.rooms[index][index2].doorU.boundingBox != null){
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorU.boundingBox)|| (this.floor1.camera.slideU != 0 &&this.onceU == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("up");
                                    if(this.moveBoundsU == false){
                                        this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp - 992;
                                        this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp - 992;
                                        this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown - 992;
                                        this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown - 992;
                                        this.isaac_body.yPosition = this.isaac_body.yPosition - 500
                                        this.isaac_head.yPosition = this.isaac_head.yPosition - 500
                                        this.hud.hudStatsY = this.hud.hudStatsY-992;
                                        this.hud.hudPickupsY = this.hud.hudPickupsY-992;
                                        this.hud.hudHealthY = this.hud.hudHealthY-992;
                                        this.moveBoundsU = true;
                                        this.iY--;
                                        if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                            this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling);
                                            this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling2);
                                            console.log(this.gurgling.locX)
                                            console.log(this.isaac_body.xPosition)
                                            this.devil = true;
                                            this.trapDoorE = true;
                                            this.bx = -this.floor1.rooms[index][index2].locX
                                            this.by = this.floor1.rooms[index][index2].locY
                                        }
                                        if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                            this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.game.addEntity(this.itemP);
                                            console.log(this.itemP.locX)
                                            console.log(this.isaac_body.xPosition)
                                        }else if(this.floor1.rooms[index][index2].skin == "d"&& this.trophy == null){
                                            this.trophy = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.trophy.bossItem = true;
                                            this.game.addEntity(this.trophy);
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
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpU.boundingBox)|| (this.floor1.camera.slideD != 992 &&this.onceD == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("down");
                                    if(this.moveBoundsD == false){
                                        console.log("doorOpU")
                                        this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp + 992;
                                        this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp + 992;
                                        this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown + 992;
                                        this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown + 992;
                                        this.isaac_body.yPosition = this.isaac_body.yPosition + 500
                                        this.isaac_head.yPosition = this.isaac_head.yPosition + 500
                                        this.hud.hudStatsY = this.hud.hudStatsY+992;
                                        this.hud.hudPickupsY = this.hud.hudPickupsY+992;
                                        this.hud.hudHealthY = this.hud.hudHealthY+992;
                                        this.moveBoundsD = true;
                                        this.iY++;
                                    }
                                    this.onceD = true;
                                }
                                else{
                                    
                                    this.onceD = false;
                                    this.moveBoundsD = false;
                                }
                            }
                        }
    
                        if(this.floor1.rooms[index][index2] != null && (this.floor1.camera.slideD == 992 )){
                            if(this.floor1.rooms[index][index2].doorOpD.boundingBox != null){
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorOpD.boundingBox)|| (this.floor1.camera.slideU != 0 &&this.onceU == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("up");
                                    if(this.moveBoundsU == false){
                                        console.log("doorOpD")
                                        this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp - 992;
                                        this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp - 992;
                                        this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown - 992;
                                        this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown - 992;
                                        this.isaac_body.yPosition = this.isaac_body.yPosition - 500
                                        this.isaac_head.yPosition = this.isaac_head.yPosition - 500
                                        this.hud.hudStatsY = this.hud.hudStatsY-992;
                                        this.hud.hudPickupsY = this.hud.hudPickupsY-992;
                                        this.hud.hudHealthY = this.hud.hudHealthY-992;
                                        this.moveBoundsU = true;
                                        this.iY--;
                                        
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
                                if(this.isaac_body.boundingBox.collide(this.floor1.rooms[index][index2].doorD.boundingBox)|| (this.floor1.camera.slideD != 992 &&this.onceD == true)){
                                    if(this.isaac_head.tear != null){
                                        this.isaac_head.tear.removeFromWorld = true;
                                    }
                                    this.floor1.moveRoom("down");
                                    if(this.moveBoundsD == false){
                                        this.isaac_body.moveBoundsUp = this.isaac_body.moveBoundsUp + 992;
                                        this.isaac_head.moveBoundsUp = this.isaac_head.moveBoundsUp + 992;
                                        this.isaac_body.moveBoundsDown = this.isaac_body.moveBoundsDown + 992;
                                        this.isaac_head.moveBoundsDown = this.isaac_head.moveBoundsDown + 992;
                                        this.isaac_body.yPosition = this.isaac_body.yPosition + 500
                                        this.isaac_head.yPosition = this.isaac_head.yPosition + 500
                                        this.hud.hudStatsY = this.hud.hudStatsY+992;
                                        this.hud.hudPickupsY = this.hud.hudPickupsY+992;
                                        this.hud.hudHealthY = this.hud.hudHealthY+992;
                                        this.moveBoundsD = true;
                                        this.iY++;
                                        if(this.floor1.rooms[index][index2].skin == "b"&&this.gurgling == null){
                                            this.gurgling = new Gurgling(-this.floor1.rooms[index][index2].locX+200,this.floor1.rooms[index][index2].locY+200,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling);
                                            this.gurgling2 = new Gurgling(-this.floor1.rooms[index][index2].locX+1100,this.floor1.rooms[index][index2].locY+650,this.game,this.isaac_body)
                                            this.game.addEntity(this.gurgling2);
                                            console.log(this.gurgling.locX)
                                            console.log(this.isaac_body.xPosition)
                                            this.devil = true;
                                            this.trapDoorE = true;
                                            this.bx = -this.floor1.rooms[index][index2].locX
                                            this.by = this.floor1.rooms[index][index2].locY
                                        }
                                        if(this.floor1.rooms[index][index2].skin == "t"&&this.itemP == null){
                                            this.itemP = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.game.addEntity(this.itemP);
                                            console.log(this.itemP.locX)
                                            console.log(this.isaac_body.xPosition)
                                        }else if(this.floor1.rooms[index][index2].skin == "d"&& this.trophy == null){
                                            this.trophy = new ItemP(-this.floor1.rooms[index][index2].locX+700,this.floor1.rooms[index][index2].locY+448.5,this.game)
                                            this.trophy.bossItem = true;
                                            this.game.addEntity(this.trophy);
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
                        if(this.floor1.rooms[index][index2] != null){
                            if(this.floor1.rooms[index][index2].door != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].door.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].door.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].door.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOp != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorR != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorR.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorR.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorR.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpR != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorD != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorD.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorD.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorD.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpD != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorU != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorU.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorU.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorU.skin = "b"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpU != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "n"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "t"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "b"
                                }
                            }
                        } 
                        if(this.premade[this.iY][this.iX] == null && (this.iX != 10 || this.iY != 10)){
                            if(this.floor1.rooms[this.iY][this.iX] != null){
                                if(this.floor1.rooms[this.iY][this.iX].skin == 'n'){
                                    this.premade[this.iY][this.iX] = new Premade_Rooms(160,160,this.game, this.floor1, this.isaac_body)
                                    this.premade[this.iY][this.iX].addObstacles(-(this.floor1.farthestLeft-(1472*(this.iX-1))),-(this.floor1.farthestUp-(992*(this.iY-1))));
                                    this.game.orderCorrecter();
                                    console.log(this.premade[this.iY][this.iX].roomN)
                                }
                            }
                            
                            
                        }
                    }else{
                        if(this.floor1.rooms[index][index2] != null){
                            if(this.floor1.rooms[index][index2].door != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].door.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].door.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].door.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOp != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOp.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorR != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorR.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorR.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorR.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpR != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpR.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorD != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorD.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorD.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorD.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpD != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpD.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorU != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorU.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorU.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorU.skin = "b_closed"
                                }
                            }
                            if(this.floor1.rooms[index][index2].doorOpU != 0){
                                if(this.floor1.rooms[index][index2].skin == "n"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "n_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "t"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "t_closed"
                                }else if(this.floor1.rooms[index][index2].skin == "b"){
                                    this.floor1.rooms[index][index2].doorOpU.skin = "b_closed"
                                }
                            }
                        } 
                        
                    }
                    
                }
                
            }
        }
        if(this.EIR == true && this.floor1.camera.slideU == 0 && this.floor1.camera.slideD == 992 && this.floor1.camera.slide == 0 && this.floor1.camera.slideR == 1472){
            this.slideF = true;
        }
        
        
        //doors
        if(this.premade != null){
            for (let r = 0; r < this.premade.length; r++) {
                for (let c = 0; c < this.premade[0].length; c++) {
                    if(this.premade[r][c] != null){
                        for (let index = 0; index < this.premade[r][c].enemies.length; index++) {
                            for (let index2 = 0; index2 < this.premade[r][c].enemies[0].length; index2++) {
                                if(this.premade[r][c].enemies[index][index2] != null){
                                    if(this.premade[r][c].enemies[index][index2].health <= 0){
                                        this.EIR = false;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(this.premade != null){
            for (let r = 0; r < this.premade.length; r++) {
                for (let c = 0; c < this.premade[0].length; c++) {
                    if(this.premade[r][c] != null){
                        for (let index = 0; index < this.premade[r][c].enemies.length; index++) {
                            for (let index2 = 0; index2 < this.premade[r][c].enemies[0].length; index2++) {
                                if(this.premade[r][c].enemies[index][index2] != null){
                                    if(this.premade[r][c].enemies[index][index2].health > 0){
                                        this.EIR = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        this.tempClock += 1*this.game.clockTick;

        //obstacles
        if(this.premade != null){
            for (let r = 0; r < this.premade.length; r++) {
                for (let c = 0; c < this.premade[0].length; c++) {
                    if(this.premade[r][c] != null){
                        for (let index = 0; index < this.premade[r][c].obstacles.length; index++) {
                            for (let index2 = 0; index2 < this.premade[r][c].obstacles[0].length; index2++) {
                                if(this.premade[r][c].obstacles[index][index2] != null && this.isaac_body.boundingBox != null){
                                    if(this.premade[r][c].obstacles[index][index2].boundingBox != null){
                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].obstacles[index][index2].boundingBox) && this.premade[r][c].obstacles[index][index2] instanceof Rocks){
                                            if(this.isaac_body.boundingBox.right > this.premade[r][c].obstacles[index][index2].locX && this.isaac_body.boundingBox.right < this.premade[r][c].obstacles[index][index2].locX+40){
                                                this.isaac_body.xPosition -= this.isaac_body.movementSpeed*this.game.clockTick;
                                                this.isaac_body.slideTR = 0;
                                            }
                                            if(this.isaac_body.boundingBox.left < this.premade[r][c].obstacles[index][index2].locX+128 && this.isaac_body.boundingBox.left > this.premade[r][c].obstacles[index][index2].locX+128-40){
                                                this.isaac_body.xPosition += this.isaac_body.movementSpeed*this.game.clockTick;
                                                this.isaac_body.slideTL = 0;
                                            }
                                            if(this.isaac_body.boundingBox.bottom > this.premade[r][c].obstacles[index][index2].locY && this.isaac_body.boundingBox.bottom < this.premade[r][c].obstacles[index][index2].locY+40){
                                                this.isaac_body.yPosition -= this.isaac_body.movementSpeed*this.game.clockTick;
                                                this.isaac_body.slideTD = 0;
                                            }
                                            if(this.isaac_body.boundingBox.top < this.premade[r][c].obstacles[index][index2].locY+128 && this.isaac_body.boundingBox.top > this.premade[r][c].obstacles[index][index2].locY+128-40){
                                                this.isaac_body.yPosition += this.isaac_body.movementSpeed*this.game.clockTick;
                                                this.isaac_body.slideTU = 0;
                                            }
                                        }
                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].obstacles[index][index2].boundingBox) && this.premade[r][c].obstacles[index][index2] instanceof Spikes){
                                            if(this.premade[r][c].obstacles[index][index2].stab == true && this.tempClock > 1){
                                                this.isaac_body.takeDamage(2);
                                                this.tempClock = 0;
                                            }
                                        
                                        }
                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].obstacles[index][index2].boundingBox) && this.premade[r][c].obstacles[index][index2] instanceof Chest){
                                            if (this.isaac_body.boundingBox.collide(this.premade[r][c].obstacles[index][index2].boundingBox)) {
                                                if (this.premade[r][c].obstacles[index][index2].open == false) {
                                                    ASSET_MANAGER.playAsset("./sounds/chest_open_1.wav")
                                                }
                                                this.premade[r][c].obstacles[index][index2].open = true;
                                                if(this.driftCounter < 0.1 && this.key == undefined){
                                                    this.key = new Key(this.premade[r][c].obstacles[index][index2].locX,this.premade[r][c].obstacles[index][index2].locY,this.game);
                                                    this.game.addEntity(this.key);
                                                }
                                                if(this.isaac_body.boundingBox.right-80 > this.premade[r][c].obstacles[index][index2].boundingBox.left){
                                                    this.premade[r][c].obstacles[index][index2].locX -= 500*this.game.clockTick;
                                                }
                                                if(this.isaac_body.boundingBox.left+80 < this.premade[r][c].obstacles[index][index2].boundingBox.right){
                                                    this.premade[r][c].obstacles[index][index2].locX += 500*this.game.clockTick;
                                                }
                                                if(this.isaac_body.boundingBox.bottom-60 > this.premade[r][c].obstacles[index][index2].boundingBox.top){
                                                    this.premade[r][c].obstacles[index][index2].locY -= 500*this.game.clockTick;
                                                }
                                                if(this.isaac_body.boundingBox.top+60 < this.premade[r][c].obstacles[index][index2].boundingBox.bottom){
                                                    this.premade[r][c].obstacles[index][index2].locY += 500*this.game.clockTick;
                                                }
                                                
                                            }
                                        
                                        }
                                        if(this.isaac_head.tear != null){
                                            if(this.isaac_head.tear.boundingBox != null && this.premade[r][c].obstacles[index][index2].boundingBox != null){
                                                if(this.isaac_head.tear.boundingBox.collide(this.premade[r][c].obstacles[index][index2].boundingBox)){
                                                    this.premade[r][c].obstacles[index][index2].health -= this.isaac_head.tear.damage
                                                    if (!this.isaac_head.piercing) {
                                                        this.isaac_head.tear.range = 0;
                                                    }
                                                    this.isaac_head.tear.boundingBox = undefined;
                                                }
                                            }
                                        }
                                        
                                        for (let inde = 0; inde < this.premade[r][c].enemies.length; inde++) {
                                            for (let inde2 = 0; inde2 < this.premade[r][c].enemies[0].length; inde2++) {
                                                if(this.premade[r][c].enemies[inde][inde2] != null && this.isaac_body.boundingBox != null){
                                                    if(this.premade[r][c].enemies[inde][inde2].boundingBox != null){
                                                        for (let ind = 0; ind < this.premade[r][c].enemies.length; ind++) {
                                                            for (let ind2 = 0; ind2 < this.premade[r][c].enemies[0].length; ind2++) {
                                                                if(this.premade[r][c].enemies[ind][ind2] != null && this.isaac_body.boundingBox != null){
                                                                    if(this.premade[r][c].enemies[ind][ind2].boundingBox != null){
                                                                        if(this.premade[r][c].enemies[inde][inde2].boundingBox.collide(this.premade[r][c].enemies[ind][ind2].boundingBox) && (inde != ind||inde2 != ind2)){
                                                                            if(this.premade[r][c].enemies[inde][inde2] instanceof Spider){
                                                                                console.log(this.premade[r][c].enemies[inde][inde2].xPosition)
                                                                                console.log(this.premade[r][c].enemies[inde][inde2].yPosition)
                                                                            }
                                                                            if(this.premade[r][c].enemies[ind][ind2].boundingBox.right > this.premade[r][c].enemies[inde][inde2].xPosition && this.premade[r][c].enemies[ind][ind2].boundingBox.right < this.premade[r][c].enemies[inde][inde2].xPosition+40){
                                                                                this.premade[r][c].enemies[ind][ind2].xPosition -= this.game.clockTick*this.premade[r][c].enemies[ind][ind2].movementSpeed;
                                                                            }
                                                                            if(this.premade[r][c].enemies[ind][ind2].boundingBox.left < this.premade[r][c].enemies[inde][inde2].xPosition+128 && this.premade[r][c].enemies[ind][ind2].boundingBox.left > this.premade[r][c].enemies[inde][inde2].xPosition+128-40){
                                                                                this.premade[r][c].enemies[ind][ind2].xPosition += this.game.clockTick*this.premade[r][c].enemies[ind][ind2].movementSpeed;
                                                                            }
                                                                            if(this.premade[r][c].enemies[ind][ind2].boundingBox.bottom > this.premade[r][c].enemies[inde][inde2].yPosition && this.premade[r][c].enemies[ind][ind2].boundingBox.bottom < this.premade[r][c].enemies[inde][inde2].yPosition+40){
                                                                                this.premade[r][c].enemies[ind][ind2].yPosition -= this.game.clockTick*this.premade[r][c].enemies[ind][ind2].movementSpeed;
                                                                            }
                                                                            if(this.premade[r][c].enemies[ind][ind2].boundingBox.top < this.premade[r][c].enemies[inde][inde2].yPosition+128 && this.premade[r][c].enemies[ind][ind2].boundingBox.top > this.premade[r][c].enemies[inde][inde2].yPosition+128-40){
                                                                                this.premade[r][c].enemies[ind][ind2].yPosition += this.game.clockTick*this.premade[r][c].enemies[ind][ind2].movementSpeed;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox) && this.premade[r][c].enemies[inde][inde2] instanceof Fly){
                                                            if(this.tempClock > 1){
                                                                this.isaac_body.takeDamage(1);
                                                                this.tempClock = 0;
                                                            }
                                                        
                                                        }
                                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox) && this.premade[r][c].enemies[inde][inde2] instanceof Pooter){
                                                            if(this.tempClock > 1){
                                                                this.isaac_body.takeDamage(1);
                                                                this.tempClock = 0;
                                                            }
                                                        
                                                        }
                                                        if(this.premade[r][c].enemies[inde][inde2] instanceof Pooter){
                                                            if(this.premade[r][c].enemies[inde][inde2].tear != null){
                                                                if(this.premade[r][c].enemies[inde][inde2].tear.boundingBox != null){
                                                                    if(this.premade[r][c].enemies[inde][inde2].tear.boundingBox.collide(this.isaac_body.boundingBox)){
                                                                        if(this.tempClock > 1){
                                                                            this.isaac_body.takeDamage(1);
                                                                            this.tempClock = 0;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            
                                                        
                                                        }
                                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox) && this.premade[r][c].enemies[inde][inde2] instanceof Spider){
                                                            if(this.tempClock > 1){
                                                                this.isaac_body.takeDamage(1);
                                                                this.tempClock = 0;
                                                            }
                                                        
                                                        }
                                                        if(this.premade[r][c].obstacles[index][index2] instanceof Rocks && this.premade[r][c].enemies[inde][inde2] instanceof Spider){
                                                            if(this.premade[r][c].obstacles[index][index2].boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox)){
                                                                if(this.premade[r][c].enemies[inde][inde2].boundingBox.right > this.premade[r][c].obstacles[index][index2].locX && this.premade[r][c].enemies[inde][inde2].boundingBox.right < this.premade[r][c].obstacles[index][index2].locX+40){
                                                                    this.premade[r][c].enemies[inde][inde2].xPosition -= this.game.clockTick*this.premade[r][c].enemies[inde][inde2].movementSpeed;
                                                                }
                                                                if(this.premade[r][c].enemies[inde][inde2].boundingBox.left < this.premade[r][c].obstacles[index][index2].locX+128 && this.premade[r][c].enemies[inde][inde2].boundingBox.left > this.premade[r][c].obstacles[index][index2].locX+128-40){
                                                                    this.premade[r][c].enemies[inde][inde2].xPosition += this.game.clockTick*this.premade[r][c].enemies[inde][inde2].movementSpeed;
                                                                }
                                                                if(this.premade[r][c].enemies[inde][inde2].boundingBox.bottom > this.premade[r][c].obstacles[index][index2].locY && this.premade[r][c].enemies[inde][inde2].boundingBox.bottom < this.premade[r][c].obstacles[index][index2].locY+40){
                                                                    this.premade[r][c].enemies[inde][inde2].yPosition -= this.game.clockTick*this.premade[r][c].enemies[inde][inde2].movementSpeed;
                                                                }
                                                                if(this.premade[r][c].enemies[inde][inde2].boundingBox.top < this.premade[r][c].obstacles[index][index2].locY+128 && this.premade[r][c].enemies[inde][inde2].boundingBox.top > this.premade[r][c].obstacles[index][index2].locY+128-40){
                                                                    this.premade[r][c].enemies[inde][inde2].yPosition += this.game.clockTick*this.premade[r][c].enemies[inde][inde2].movementSpeed;
                                                                }
                                                            }
                                                        }
                                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox) && this.premade[r][c].enemies[inde][inde2] instanceof Sucker){
                                                            if(this.tempClock > 1){
                                                                this.isaac_body.takeDamage(1);
                                                                this.tempClock = 0;
                                                            }
                                                        
                                                        }
                                                        if(this.isaac_body.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox) && this.premade[r][c].enemies[inde][inde2] instanceof JumpingSpider){
                                                            if(this.tempClock > 1){
                                                                this.isaac_body.takeDamage(1);
                                                                this.tempClock = 0;
                                                            }
                                                        
                                                        }
                                                        if(this.isaac_head.tear != null){
                                                            if(this.isaac_head.tear.boundingBox != null && this.premade[r][c].enemies[inde][inde2].boundingBox != null){
                                                                if(this.isaac_head.tear.boundingBox.collide(this.premade[r][c].enemies[inde][inde2].boundingBox)){
                                                                    this.premade[r][c].enemies[inde][inde2].health -= this.isaac_head.tear.damage
                                                                    if (!this.isaac_head.piercing) {
                                                                        this.isaac_head.tear.range = 0;
                                                                    }
                                                                    this.isaac_head.tear.boundingBox = undefined;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }


                                        
                                        

                                    }
                                }
                            }
                        }
                    }
                }
            }           
        }
        if(this.key != undefined){
            if (this.isaac_body != null) {
                if(this.key.boundingBox != null){
                    if (this.isaac_body.boundingBox.collide(this.key.boundingBox)) {
                       this.key.boundingBox = undefined;
                       this.key.removeFromWorld = true;
                       this.isaac_body.keyPickup += 1
                        
                    }
                }
            }
            this.driftCounter += this.game.clockTick;
            if(this.driftCounter < 1){
                this.key.locX += 200*this.game.clockTick;
                this.key.locY += 200*this.game.clockTick;
            }
        }

        if(this.isaac_head.tear != null){
            if(this.isaac_head.tear.boundingBox != null && this.fire.boundingBox != null){
                if(this.isaac_head.tear.boundingBox.collide(this.fire.boundingBox)){
                    this.fire.fireHealth -= this.isaac_head.tear.damage
                    console.log(this.fire.fireHealth)
                    if (!this.isaac_head.piercing && !this.isaac_head.tear.pierced) {
                        this.isaac_head.tear.range = 0;
                    }
                    this.isaac_head.tear.boundingBox = undefined;
                }
            }
            
            if (this.gurgling != null) {

                if (this.isaac_head.tear.boundingBox != null && this.gurgling.boundingBox != null) {
                    if (this.isaac_head.tear.boundingBox.collide(this.gurgling.boundingBox)) {
                        this.gurgling.health -= this.isaac_head.tear.damage
                        if (!this.isaac_head.piercing) {
                            this.isaac_head.tear.range = 0;
                        }
                        this.isaac_head.tear.boundingBox = undefined;
                    }
                }
                if (this.isaac_head.tear.boundingBox != null && this.gurgling2.boundingBox != null) {
                    if (this.isaac_head.tear.boundingBox.collide(this.gurgling2.boundingBox)) {
                        this.gurgling2.health -= this.isaac_head.tear.damage
                        if (!this.isaac_head.piercing) {
                            this.isaac_head.tear.range = 0;
                        }
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
            if(this.fire.boundingBox != null){
                if (this.isaac_head.boundingBox.collide(this.fire.boundingBox)
                    || this.isaac_body.boundingBox.collide(this.fire.boundingBox)) {
                    this.isaac_body.takeDamage(1);
                    console.log("took 1 damage");
                    this.tempClock = 0;
                }
            }
            
        }
        if (this.isaac_body != null) {
            
            
            if (this.isaac_body != null && this.trophy != null) {
                if (this.trophy.boundingBox != null) {
                    if (this.isaac_body.boundingBox.collide(this.trophy.boundingBox)) {
                        if (this.trophy) {
                            this.isaac_body.isaacWin = true;
                            this.win = true;
                            this.gameOver = true;
                            this.title = false;
                            this.credits = false;
                            this.isaac_body.dead = true;

                        }
                    }
                }
            }
            //TODO: give isaac_head a reference to tears.js object
            //TODO: add jesusjuice costume
            if (this.isaac_body != null && this.itemP != null) {
                if(this.itemP.boundingBox != null){
                    if (this.isaac_body.boundingBox.collide(this.itemP.boundingBox)) {
                        if(this.itemP.stigmata && !this.itemP.itemGet){
                            this.isaac_head.damage += 0.3; this.hud.updateStats(ctx, "damage", 0.3);
                            this.isaac_body.maxRedHearts += 2;
                            this.isaac_body.redHearts += 2;
                            this.isaac_head.costumes.push("./res/costume_stigmata.png");
                        }
                        if(this.itemP.synthoil && !this.itemP.itemGet){
                            this.isaac_head.damage += 1; this.hud.updateStats(ctx, "damage", 1);
                            this.isaac_head.range += 1.5; this.hud.updateStats(ctx, "range", 1.5);
                            this.isaac_head.costumes.push("./res/costume_synthoil.png");
                        }
                        if(this.itemP.cupidsarrow && !this.itemP.itemGet){
                            this.isaac_head.piercing = true;
                            this.isaac_head.tearSkin = "./res/cupids_arrow_tear_right.png"
                            this.isaac_head.costumes.push("./res/costume_cupidsarrow.png");
                        }
                        if(this.itemP.jesusjuice && !this.itemP.itemGet){
                            this.isaac_head.damage += 0.5; this.hud.updateStats(ctx, "damage", 0.5);
                            this.isaac_head.range += 0.38; this.hud.updateStats(ctx, "range", 0.38);
                            this.isaac_head.costumes.push("./res/costume_jesusjuice.png");
                        }
                        if(this.itemP.thehalo && !this.itemP.itemGet){
                            this.isaac_body.maxRedHearts += 2;
                            this.isaac_body.redHearts += 2;
                            this.isaac_head.damage += 0.3; this.hud.updateStats(ctx, "damage", 0.3);
                            this.isaac_head.tears += 0.2; this.hud.updateStats(ctx, "tears", 0.2);
                            this.isaac_head.range += 0.38; this.hud.updateStats(ctx, "range", 0.38);
                            this.isaac_body.movementSpeed += 0.3; this.hud.updateStats(ctx, "movementSpeed", 0.3);
                            this.isaac_head.costumes.push("./res/costume_halo.png");
                        }
                        if(this.itemP.squeezy && !this.itemP.itemGet){
                            this.isaac_body.blueHearts += 4;
                            this.isaac_head.tears += 0.4;
                            this.isaac_head.costumes.push("./res/costume_squeezy.png");
                        }
                        if(this.itemP.toothpicks && !this.itemP.itemGet){
                            this.isaac_head.shotSpeed += 0.16;
                            this.isaac_head.tears += 0.70;
                            this.isaac_head.tears = (Math.ceil(this.isaac_head.tears*100))/100
                        }
                        this.itemP.itemGet = true;
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

        this.hud.x = this.floor1.camera.ogX
        this.hud.y = this.floor1.camera.ogY
        if(this.devil == true && this.gurgling.deadS == true && this.gurgling2.deadS == true){
            while(this.floor1.DRoomMax > 0){
                this.floor1.addDevilRoom("D");
            }
            this.devil = false;
        }

        if(this.trapDoorE == true && this.gurgling.deadS == true && this.gurgling2.deadS == true && this.TExist == false){
            this.trapDoor = new Trap_Door(this.bx,this.by,this.game,this.floor1)
            this.game.addEntity(this.trapDoor)
            this.TExist = true;
            this.game.orderCorrecter()
        }
        if(this.trapDoor != null){
            if(this.trapDoor.boundingBox != null){
                if(this.trapDoor.boundingBox.collide(this.isaac_body.boundingBox)){
                    this.trapDoor = null
                    console.log("colliding")
                    this.game.clearS();
                    this.loadNextFloor(this.level+1)
                    console.log(this.game.entities)
                }
            }
        }
    };

    loadNextFloor(level){
        this.level = level;
        this.game.ctx.translate(this.floor1.camera.ogX,this.floor1.camera.ogY)
        this.floor1 = new Floor(this.game,this.level, this.isaac_body)
        this.premade = Array.from({length: 20}, () => new Array(20));
        console.log(this.premade)
        this.floor1.addBaseRoom();
        this.game.addEntity(this.hud);
        this.game.addEntity(this.isaac_body);
        this.game.addEntity(this.isaac_head);
        this.iX = 10;
        this.iY = 10;
        this.isaac_body.xPosition = 735.5
		this.isaac_body.yPosition = 498.5
        this.isaac_body.moveBoundsLeft = 138;
		this.isaac_body.moveBoundsRight = 1214;
		this.isaac_body.moveBoundsUp = 123;
		this.isaac_body.moveBoundsDown = 719;
        this.hud.hudHealthX = 200;
        this.hud.hudHealthY = 30;
        this.hud.hudStatsX = 0
        this.hud.hudStatsY = 330
        this.hud.hudPickupsX = 30;
        this.hud.hudPickupsY = 170;
        console.log(this.floor1.roomMax)
        console.log(this.floor1.level)
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
    }

    draw(ctx) {
        this.count += (1*this.game.clockTick);
        if (this.title && !this.credits) {

            ctx.drawImage(ASSET_MANAGER.getAsset("./res/title_menu_sprites.png"), 0, 0, 480, 272, 0, 0, this.titleWidth, this.titleHeight);

            this.animations[0].drawFrame(this.game.clockTick, ctx, this.titleWidth * .3, this.titleHeight * 0.35);
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.titleWidth * .73, this.titleHeight * 0.4);
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.titleWidth * .235, this.titleHeight * 0.09);


        }


    };
}