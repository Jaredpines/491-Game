class Premade_Rooms {
    constructor(locX, locY, game, floor, isaac){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.obstacles = Array.from({length: 11}, () => new Array(6));
        this.enemies = Array.from({length: 11}, () => new Array(6));
        this.floor = floor;
        this.r = Math.floor(Math.random() * 41)+1;
        this.isaac = isaac;
        this.roomN = 0;
    };


    addObstacles(x,y,type){
        this.locX = x;
        this.locY = y;
        if(type == 'r'){
            if(this.r == 1){
                this.room1(x+160,y+160);
            }else if(this.r == 2){
                this.room2(x+160,y+160);
            }
            else if(this.r == 3){
                this.room3(x+160,y+160);
            }else if(this.r == 4){
                this.room4(x+160,y+160);
            }else if(this.r == 5){
                this.room5(x+160,y+160);
            }else if(this.r == 6){
                this.room6(x+160,y+160);
            }else if(this.r == 7){
                this.room7(x+160,y+160);
            }else if(this.r == 21){
                this.room21(x+160,y+160);
            }else if(this.r == 22){
                this.room22(x+160,y+160);
            }else if(this.r == 23){
                this.room23(x+160,y+160);
            }else if(this.r == 24){
                this.room24(x+160,y+160);
            }else if(this.r == 25){
                this.room25(x+160,y+160);
            }else if(this.r == 26){
                this.room26(x+160,y+160);
            }else if(this.r == 27){
                this.room27(x+160,y+160);
            }else if(this.r == 28){
                this.room28(x+160,y+160);
            }else if(this.r == 29){
                this.room29(x+160,y+160);
            }else if(this.r == 30){
                this.room30(x+160,y+160);
            }else if(this.r == 31){
                this.room31(x+160,y+160);
            }else if(this.r == 32){
                this.room32(x+160,y+160);
            }else if(this.r == 33){
                this.room33(x+160,y+160);
            }else if(this.r == 34){
                this.room34(x+160,y+160);
            }else if(this.r == 35){
                this.room35(x+160,y+160);
            }else if(this.r == 36){
                this.room36(x+160,y+160);
            }else if(this.r == 37){
                this.room37(x+160,y+160);
            }else if(this.r == 38){
                this.room38(x+160,y+160);
            }else if(this.r == 39){
                this.room39(x+160,y+160);
            }else if(this.r == 40){
                this.room40(x+160,y+160);
            }else{
                this.room0(x,y)
            }
            this.r = Math.floor(Math.random() * 41)+1;
        }else if(type == 'b'){
            this.r = Math.floor(Math.random() * 2)+1;
            if(this.r == 1){
                this.Broom1(x+160,y+160);
            }else if(this.r == 2){
                this.Broom2(x+160,y+160);
            }
            
        }else if(type == 's'){
            this.Sroom1(x+160,y+160);
        }else if(type == 't'){
            this.Troom1(x+160,y+160);
        }else if(type == 'd'){
            this.Droom1(x+160,y+160);
        }
        
    };
    room0(x,y){

    }
    room1(x,y){
        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[9][0] = new Rocks(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[5][2] = new Rocks(x + 103*5,y + 104*2)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][4] = new Rocks(x + 103*5,y + 104*4)
        this.game.addEntity(this.obstacles[5][4])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][4] = new Rocks(x + 103*10,y + 104*4)
        this.game.addEntity(this.obstacles[10][4])
        this.roomN = 1
    };
    room2(x,y){
        this.obstacles[1][0] = new Rocks(x + 103*1,y + 104*0)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[3][0] = new Rocks(x + 103*3,y + 104*0)
        this.game.addEntity(this.obstacles[3][0])
        this.obstacles[4][0] = new Rocks(x + 103*4,y + 104*0)
        this.game.addEntity(this.obstacles[4][0])
        this.obstacles[4][1] = new Rocks(x + 103*4,y + 104*1)
        this.game.addEntity(this.obstacles[4][1])
        //this.obstacles[5][0] = new Rocks(x + 103*5,y + 104*0)
        //this.game.addEntity(this.obstacles[5][0])
        this.obstacles[6][0] = new Rocks(x + 103*6,y + 104*0)
        this.game.addEntity(this.obstacles[6][0])
        this.obstacles[6][1] = new Rocks(x + 103*6,y + 104*1)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[7][0] = new Rocks(x + 103*7,y + 104*0)
        this.game.addEntity(this.obstacles[7][0])
        this.obstacles[9][0] = new Rocks(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.roomN = 2
    };
    room3(x,y){
        this.obstacles[9][1] = new Rocks(x + 103*9,y + 104*1)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[2][1] = new Rocks(x + 103*2,y + 104*1)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Rocks(x + 103*3,y + 104*1)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[2][4] = new Rocks(x + 103*2,y + 104*4)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Rocks(x + 103*3,y + 104*4)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[1][5] = new Rocks(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Rocks(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])
        this.obstacles[1][0] = new Rocks(x + 103*1,y + 104*0)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Rocks(x + 103*2,y + 104*0)
        this.game.addEntity(this.obstacles[2][0])
        this.roomN = 3
    };
    room4(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[4][1] = new Spikes(x + 103*4,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[5][2] = new Rocks(x + 103*5,y + 104*2)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[6][1] = new Spikes(x + 103*6,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])


        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[4][4] = new Spikes(x + 103*4,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[5][3] = new Rocks(x + 103*5,y + 104*3)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][4] = new Spikes(x + 103*6,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.roomN = 4
    };
    room5(x,y){
        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1)
        this.game.addEntity(this.obstacles[0][1])
        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[0][5] = new Sucker(x + 103*0,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][5])
        this.enemies[10][0] = new Fly(x + 103*10,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][0])
        this.enemies[10][1] = new Pooter(x + 103*10,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][1])
        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[9][0] = new Rocks(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[5][2] = new Rocks(x + 103*5,y + 104*2)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][4] = new Rocks(x + 103*5,y + 104*4)
        this.game.addEntity(this.obstacles[5][4])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][4] = new Rocks(x + 103*10,y + 104*4)
        this.game.addEntity(this.obstacles[10][4])
        this.roomN = 5
    };
    room6(x,y){
        this.obstacles[4][2] = new Rocks(x + 103*4,y + 104*2)
        this.game.addEntity(this.obstacles[4][2])
        //this.obstacles[5][1] = new Rocks(x + 103*5,y + 104*1)
        //this.game.addEntity(this.obstacles[5][1])
        this.obstacles[5][3] = new Rocks(x + 103*5,y + 104*3)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][2] = new Rocks(x + 103*6,y + 104*2)
        this.game.addEntity(this.obstacles[6][2])
        this.obstacles[5][2] = new Chest(x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.roomN = 6
    };
    room7(x,y){
        this.obstacles[0][0] = new Pickup_key(x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_coin(x + 103*1,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_bomb(x + 103*2,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[2][0])
        this.obstacles[3][0] = new Pickup_hearts("fullBlue",x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])
        this.obstacles[4][0] = new Pickup_hearts("fullRed",x + 103*4,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[4][0])
        this.obstacles[5][0] = new Pickup_hearts("fullBlack",x + 103*5,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[5][0])
        this.obstacles[6][0] = new Pickup_hearts("halfBlue",x + 103*6,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[6][0])
        this.obstacles[7][0] = new Pickup_hearts("halfBlack",x + 103*7,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[7][0])
        this.obstacles[8][0] = new Pickup_hearts("halfRed",x + 103*8,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[8][0])
        this.roomN = 7
    };

    room8(x, y) {
        this.obstacles[0][0] = new Spider(x, y, this.game);
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[0][5] = new Spider(x, y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[3][3] = new Spikes(x + 103*3,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[5][3] = new Spider(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[7][2] = new Spikes(x + 103*7,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[7][2])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][0] = new Spider(x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
        this.obstacles[10][5] = new Spider(x + 103*10,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[10][5])
        this.roomN = 8
    }

    room9(x, y) {
        this.obstacles[4][2] = new Fly(x + 103*4,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[4][2])
        this.obstacles[4][3] = new Fly(x + 103*4,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[5][2] = new Fly(x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][3] = new Fly(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][2] = new Fly(x + 103*6,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[6][2])
        this.obstacles[6][3] = new Fly(x + 103*6,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[6][3])
        this.roomN = 9
    }

    room10(x, y) {
        this.obstacles[0][0] = new Fly(x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[0][6] = new Fly(x + 103*0,y + 104*6,this.game)
        this.game.addEntity(this.obstacles[0][6])
        this.obstacles[5][3] = new Spider(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[10][0] = new Fly(x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
        this.obstacles[10][5] = new Fly(x + 103*10,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[10][5])
        this.roomN = 10
    }

    room11(x, y) {
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[4][0] = new Spikes(x + 103*4,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[4][0])
        this.obstacles[4][1] = new Spikes(x + 103*4,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[4][4] = new Spikes(x + 103*4,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[4][5] = new Spikes(x + 103*4,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[4][5])
        this.obstacles[6][0] = new Spikes(x + 103*6,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[6][0])
        this.obstacles[6][1] = new Spikes(x + 103*6,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[6][4] = new Spikes(x + 103*6,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[6][5] = new Spikes(x + 103*6,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[6][5])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.roomN = 11
    }

    room12(x, y) {
        this.obstacles[2][3] = new Spikes(x + 103*2,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[2][3])
        this.obstacles[4][3] = new Spikes(x + 103*4,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[5][2] = new Spikes(x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][3] = new Spikes(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][2] = new Spikes(x + 103*6,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[6][2])
        this.obstacles[8][3] = new Spikes(x + 103*8,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[8][3])
        this.roomN = 12
    }

    room13(x, y) {
        this.obstacles[3][3] = new Rocks(x + 103*3,y + 104*3)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[4][1] = new Rocks(x + 103*4,y + 104*1)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[4][4] = new Rocks(x + 103*4,y + 104*4)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[5][4] = new Rocks(x + 103*5,y + 104*4)
        this.game.addEntity(this.obstacles[5][4])
        this.obstacles[6][1] = new Rocks(x + 103*6,y + 104*1)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[6][4] = new Rocks(x + 103*6,y + 104*4)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[7][3] = new Rocks(x + 103*7,y + 104*3)
        this.game.addEntity(this.obstacles[7][3])
        this.obstacles[4][3] = new Pickup_coin(x + 103*4,y + 104*3)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[5][3] = new Pickup_coin(x + 103*5,y + 104*3)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][3] = new Pickup_coin(x + 103*6,y + 104*3)
        this.game.addEntity(this.obstacles[6][3])
        this.roomN = 13
    }

    room14(x, y) {
        this.obstacles[0][0] = new Spider(x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[0][5] = new Spider(x + 103*0,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[5][3] = new Spider(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[10][0] = new Spider(x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
        this.obstacles[10][5] = new Spider(x + 103*10,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[10][5])
        this.roomN = 14
    }

    room15(x, y) {
        this.obstacles[4][3] = new Fires("normal",x + 103*4,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[5][2] = new Fires("normal",x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][4] = new Fires("normal",x + 103*5,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[5][4])
        this.obstacles[6][3] = new Fires("normal",x + 103*6,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[6][3])
        this.obstacles[5][3] = new Chest(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.roomN = 15
    }

    room16(x, y) {
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[1][2] = new Rocks(x + 103*1,y + 104*2)
        this.game.addEntity(this.obstacles[1][2])
        this.obstacles[1][3] = new Rocks(x + 103*1,y + 104*3)
        this.game.addEntity(this.obstacles[1][3])
        this.obstacles[1][4] = new Rocks(x + 103*1,y + 104*4)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][1] = new Rocks(x + 103*2,y + 104*1)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[2][4] = new Rocks(x + 103*2,y + 104*4)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][1] = new Rocks(x + 103*3,y + 104*1)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][4] = new Rocks(x + 103*3,y + 104*4)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[4][1] = new Rocks(x + 103*4,y + 104*1)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[4][4] = new Rocks(x + 103*4,y + 104*4)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[6][1] = new Rocks(x + 103*6,y + 104*1)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[6][4] = new Rocks(x + 103*6,y + 104*4)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[7][1] = new Rocks(x + 103*7,y + 104*1)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][4] = new Rocks(x + 103*7,y + 104*4)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[8][1] = new Rocks(x + 103*8,y + 104*1)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[8][4] = new Rocks(x + 103*8,y + 104*4)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[9][1] = new Rocks(x + 103*10,y + 104*1)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][2] = new Rocks(x + 103*10,y + 104*2)
        this.game.addEntity(this.obstacles[10][2])
        this.obstacles[9][3] = new Rocks(x + 103*10,y + 104*3)
        this.game.addEntity(this.obstacles[10][3])
        this.obstacles[9][4] = new Rocks(x + 103*10,y + 104*4)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[2][3] = new Spider(x + 103*2,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[2][3])
        this.obstacles[3][3] = new Spider(x + 103*3,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[4][3] = new Spider(x + 103*4,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[6][3] = new Spider(x + 103*6,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[6][3])
        this.obstacles[7][3] = new Spider(x + 103*7,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[7][3])
        this.obstacles[8][3] = new Spider(x + 103*8,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[8][3])
        this.roomN = 16
    }

    room17(x, y) {
        this.obstacles[4][2] = new Fires("normal",x + 103*4,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[4][2])
        this.obstacles[4][3] = new Fires("normal",x + 103*4,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[4][3])
        this.obstacles[4][4] = new Fires("normal",x + 103*4,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[6][2] = new Fires("normal",x + 103*6,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[6][2])
        this.obstacles[6][3] = new Fires("normal",x + 103*6,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[6][3])
        this.obstacles[6][4] = new Fires("normal",x + 103*6,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[5][2] = new Pickup_hearts("fullRed",x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][3] = new Pickup_hearts("fullBlue",x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[5][4] = new Pickup_hearts("fullBlack",x + 103*5,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[5][4])
        this.roomN = 17
    }

    room18(x, y) {
        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[1][4] = new Rocks(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[3][1] = new Rocks(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][4] = new Rocks(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[4][0] = new Rocks(x + 103*4,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[4][0])
        this.obstacles[4][1] = new Rocks(x + 103*4,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[4][4] = new Rocks(x + 103*4,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[4][4])
        this.obstacles[4][5] = new Rocks(x + 103*4,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[4][5])
        this.obstacles[6][0] = new Rocks(x + 103*6,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[6][0])
        this.obstacles[6][1] = new Rocks(x + 103*6,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[6][4] = new Rocks(x + 103*6,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[6][4])
        this.obstacles[6][5] = new Rocks(x + 103*6,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[6][5])
        this.obstacles[7][1] = new Rocks(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][4] = new Rocks(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[9][1] = new Rocks(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][1] = new Rocks(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[10][4] = new Rocks(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[0][5] = new Spider(x + 103*0,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][5])
        this.enemies[10][0] = new Spider(x + 103*10,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][0])
        this.enemies[10][5] = new Spider(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
        this.roomN = 18
    }

    room19(x, y) {
        this.enemies[4][2] = new Sucker(x + 103*4,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][2])
        this.enemies[4][3] = new Sucker(x + 103*4,y + 104*3,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][3])
        this.enemies[5][2] = new Sucker(x + 103*5,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[5][2])
        this.enemies[5][3] = new Sucker(x + 103*5,y + 104*3,this.game, this.isaac)
        this.game.addEntity(this.enemies[5][3])
        this.enemies[6][2] = new Sucker(x + 103*6,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][2])
        this.enemies[6][3] = new Sucker(x + 103*6,y + 104*3,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][3])
        this.roomN = 19
    }

    room20(x, y) {
        this.enemies[3][2] = new Pooter(x + 103*3,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[3][2])
        this.obstacles[4][2] = new Spikes(x + 103*4,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[4][2])
        this.obstacles[5][1] = new Spikes(x + 103*5,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[5][1])
        this.obstacles[5][2] = new Chest(x + 103*5,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][3] = new Spikes(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[6][2] = new Spikes(x + 103*6,y + 104*2,this.game)
        this.game.addEntity(this.obstacles[6][2])
        this.enemies[7][2] = new Pooter(x + 103*7,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[7][2])
        this.roomN = 20
    }

    //room 21-40
    room21(x,y){
        this.enemies[0][0] = new Fly(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[0][5] = new Fly(x + 103*0,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][5])
        this.obstacles[5][2] = new Rocks(x + 103*5,y + 104*2)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][1] = new Pickup_coin(x + 103*5,y + 104*1)
        this.game.addEntity(this.obstacles[5][1])
        this.obstacles[5][3] = new Pickup_coin(x + 103*5,y + 104*3)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[4][2] = new Pickup_coin(x + 103*4,y + 104*2)
        this.game.addEntity(this.obstacles[4][2])
        this.obstacles[6][2] = new Pickup_coin(x + 103*6,y + 104*2)
        this.game.addEntity(this.obstacles[6][2])
        this.enemies[10][0] = new Fly(x + 103*10,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][0])
        this.enemies[10][5] = new Fly(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
    }
    room22(x,y){
        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[1][0] = new Spider(x + 103*1,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][0])
        this.enemies[2][0] = new Spider(x + 103*2,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][0])
        this.enemies[8][0] = new Spider(x + 103*8,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][0])
        this.enemies[9][0] = new Spider(x + 103*9,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][0])
        this.enemies[10][0] = new Spider(x + 103*10,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][0])

        this.enemies[0][5] = new Spider(x + 103*0,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][5])
        this.enemies[1][5] = new Spider(x + 103*1,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][5])
        this.enemies[2][5] = new Spider(x + 103*2,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][5])
        this.enemies[8][5] = new Spider(x + 103*8,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][5])
        this.enemies[9][5] = new Spider(x + 103*9,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][5])
        this.enemies[10][5] = new Spider(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])

        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Rocks(x + 103*2,y + 104*1)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[8][1] = new Rocks(x + 103*8,y + 104*1)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[9][1] = new Rocks(x + 103*9,y + 104*1)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[10][1] = new Rocks(x + 103*10,y + 104*1)
        this.game.addEntity(this.obstacles[10][1])

        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Rocks(x + 103*1,y + 104*4)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Rocks(x + 103*2,y + 104*4)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[8][4] = new Rocks(x + 103*8,y + 104*4)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][4] = new Rocks(x + 103*10,y + 104*4)
        this.game.addEntity(this.obstacles[10][4])

        this.obstacles[3][0] = new Pickup_coin(x + 103*3,y + 104*0)
        this.game.addEntity(this.obstacles[3][0])
        this.obstacles[3][1] = new Pickup_coin(x + 103*3,y + 104*1)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][2] = new Pickup_coin(x + 103*3,y + 104*2)
        this.game.addEntity(this.obstacles[3][2])
        this.obstacles[3][3] = new Pickup_coin(x + 103*3,y + 104*3)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[3][4] = new Pickup_coin(x + 103*3,y + 104*4)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Pickup_coin(x + 103*3,y + 104*5)
        this.game.addEntity(this.obstacles[3][5])

        this.obstacles[7][0] = new Pickup_coin(x + 103*7,y + 104*0)
        this.game.addEntity(this.obstacles[7][0])
        this.obstacles[7][1] = new Pickup_coin(x + 103*7,y + 104*1)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][2] = new Pickup_coin(x + 103*7,y + 104*2)
        this.game.addEntity(this.obstacles[7][2])
        this.obstacles[7][3] = new Pickup_coin(x + 103*7,y + 104*3)
        this.game.addEntity(this.obstacles[7][3])
        this.obstacles[7][4] = new Pickup_coin(x + 103*7,y + 104*4)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Pickup_coin(x + 103*7,y + 104*5)
        this.game.addEntity(this.obstacles[7][5])
        
    }room23(x,y){
        this.obstacles[5][2] = new Rocks(x + 103*5,y + 104*2)
        this.game.addEntity(this.obstacles[5][2])
        this.obstacles[5][1] = new Pickup_coin(x + 103*5,y + 104*1)
        this.game.addEntity(this.obstacles[5][1])
        this.obstacles[5][3] = new Pickup_coin(x + 103*5,y + 104*3)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[4][2] = new Pickup_coin(x + 103*4,y + 104*2)
        this.game.addEntity(this.obstacles[4][2])
        this.obstacles[6][2] = new Pickup_coin(x + 103*6,y + 104*2)
        this.game.addEntity(this.obstacles[6][2])
    }
    room24(x,y){


        this.obstacles[0][1] = new Rocks(x + 103*0,y + 104*1)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Rocks(x + 103*1,y + 104*1)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Rocks(x + 103*2,y + 104*1)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[8][1] = new Rocks(x + 103*8,y + 104*1)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[9][1] = new Rocks(x + 103*9,y + 104*1)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[10][1] = new Rocks(x + 103*10,y + 104*1)
        this.game.addEntity(this.obstacles[10][1])

        this.obstacles[0][4] = new Rocks(x + 103*0,y + 104*4)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Rocks(x + 103*1,y + 104*4)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Rocks(x + 103*2,y + 104*4)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[8][4] = new Rocks(x + 103*8,y + 104*4)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[9][4] = new Rocks(x + 103*9,y + 104*4)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[10][4] = new Rocks(x + 103*10,y + 104*4)
        this.game.addEntity(this.obstacles[10][4])

        this.obstacles[3][0] = new Pickup_coin(x + 103*3,y + 104*0)
        this.game.addEntity(this.obstacles[3][0])
        this.obstacles[3][1] = new Pickup_coin(x + 103*3,y + 104*1)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][2] = new Pickup_coin(x + 103*3,y + 104*2)
        this.game.addEntity(this.obstacles[3][2])
        this.obstacles[3][3] = new Pickup_coin(x + 103*3,y + 104*3)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[3][4] = new Pickup_coin(x + 103*3,y + 104*4)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Pickup_coin(x + 103*3,y + 104*5)
        this.game.addEntity(this.obstacles[3][5])

        this.obstacles[7][0] = new Pickup_coin(x + 103*7,y + 104*0)
        this.game.addEntity(this.obstacles[7][0])
        this.obstacles[7][1] = new Pickup_coin(x + 103*7,y + 104*1)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][2] = new Pickup_coin(x + 103*7,y + 104*2)
        this.game.addEntity(this.obstacles[7][2])
        this.obstacles[7][3] = new Pickup_coin(x + 103*7,y + 104*3)
        this.game.addEntity(this.obstacles[7][3])
        this.obstacles[7][4] = new Pickup_coin(x + 103*7,y + 104*4)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Pickup_coin(x + 103*7,y + 104*5)
        this.game.addEntity(this.obstacles[7][5])
        
    }
    room25(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.obstacles[0][1].static = true;
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.obstacles[1][1].static = true;
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.obstacles[2][1].static = true;
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.obstacles[3][1].static = true;
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.obstacles[3][0].static = true;
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.obstacles[0][4].static = true;
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.obstacles[1][4].static = true;
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.obstacles[2][4].static = true;
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.obstacles[3][4].static = true;
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Spikes(x + 103*3,y + 104*5,this.game)
        this.obstacles[3][5].static = true;
        this.game.addEntity(this.obstacles[3][5])
        
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.obstacles[10][1].static = true;
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.obstacles[9][1].static = true;
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.obstacles[8][1].static = true;
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.obstacles[7][1].static = true;
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][0] = new Spikes(x + 103*7,y + 104*0,this.game)
        this.obstacles[7][0].static = true;
        this.game.addEntity(this.obstacles[7][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.obstacles[10][4].static = true;
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.obstacles[9][4].static = true;
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.obstacles[8][4].static = true;
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.obstacles[7][4].static = true;
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.obstacles[7][5].static = true;
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_coin(x + 103*0,y + 104*0)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_coin(x + 103*1,y + 104*0)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_coin(x + 103*2,y + 104*0)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][0] = new Pickup_coin(x + 103*8,y + 104*0)
        this.game.addEntity(this.obstacles[8][0])
        this.obstacles[9][0] = new Pickup_coin(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[10][0] = new Pickup_coin(x + 103*10,y + 104*0)
        this.game.addEntity(this.obstacles[10][0])

        this.obstacles[0][5] = new Pickup_coin(x + 103*0,y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][5] = new Pickup_coin(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Pickup_coin(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])
    }
    room26(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.obstacles[0][1].static = true;
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.obstacles[1][1].static = true;
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.obstacles[2][1].static = true;
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.obstacles[3][1].static = true;
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.obstacles[3][0].static = true;
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.obstacles[0][4].static = true;
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.obstacles[1][4].static = true;
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.obstacles[2][4].static = true;
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.obstacles[3][4].static = true;
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Spikes(x + 103*3,y + 104*5,this.game)
        this.obstacles[3][5].static = true;
        this.game.addEntity(this.obstacles[3][5])
        
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.obstacles[10][1].static = true;
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.obstacles[9][1].static = true;
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.obstacles[8][1].static = true;
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.obstacles[7][1].static = true;
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][0] = new Spikes(x + 103*7,y + 104*0,this.game)
        this.obstacles[7][0].static = true;
        this.game.addEntity(this.obstacles[7][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.obstacles[10][4].static = true;
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.obstacles[9][4].static = true;
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.obstacles[8][4].static = true;
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.obstacles[7][4].static = true;
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.obstacles[7][5].static = true;
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_coin(x + 103*0,y + 104*0)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_coin(x + 103*1,y + 104*0)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_coin(x + 103*2,y + 104*0)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][0] = new Pickup_coin(x + 103*8,y + 104*0)
        this.game.addEntity(this.obstacles[8][0])
        this.obstacles[9][0] = new Pickup_coin(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[10][0] = new Pickup_coin(x + 103*10,y + 104*0)
        this.game.addEntity(this.obstacles[10][0])

        this.obstacles[0][5] = new Pickup_coin(x + 103*0,y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][5] = new Pickup_coin(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Pickup_coin(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])
    }
    room27(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Spikes(x + 103*3,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[3][5])
        
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][0] = new Spikes(x + 103*7,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[7][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_coin(x + 103*0,y + 104*0)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_coin(x + 103*1,y + 104*0)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_coin(x + 103*2,y + 104*0)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][0] = new Pickup_coin(x + 103*8,y + 104*0)
        this.game.addEntity(this.obstacles[8][0])
        this.obstacles[9][0] = new Pickup_coin(x + 103*9,y + 104*0)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[10][0] = new Pickup_coin(x + 103*10,y + 104*0)
        this.game.addEntity(this.obstacles[10][0])

        this.obstacles[0][5] = new Pickup_coin(x + 103*0,y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][5] = new Pickup_coin(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Pickup_coin(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])
    }
    room28(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Spikes(x + 103*3,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[3][5])
        
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][0] = new Spikes(x + 103*7,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[7][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_hearts("halfRed",x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_hearts("halfRed",x + 103*1,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_hearts("halfRed",x + 103*2,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][0] = new Pickup_hearts("halfRed",x + 103*8,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[8][0])
        this.obstacles[9][0] = new Pickup_hearts("halfRed",x + 103*9,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[10][0] = new Pickup_hearts("halfRed",x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])

        this.obstacles[0][5] = new Pickup_hearts(x + 103*0,y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][5] = new Pickup_hearts(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Pickup_coin(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])

        this.enemies[4][1] = new Pooter(x + 103*4,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][1])
        this.enemies[4][4] = new Pooter(x + 103*4,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][4])

        this.enemies[6][1] = new Pooter(x + 103*6,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][1])
        this.enemies[6][4] = new Pooter(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
    }
    room29(x,y){
        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[1][0] = new Spider(x + 103*1,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][0])
        this.enemies[2][0] = new Spider(x + 103*2,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][0])
        this.enemies[3][0] = new Spider(x + 103*3,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[3][0])
        this.enemies[4][0] = new Spider(x + 103*4,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][0])

        this.enemies[6][0] = new Spider(x + 103*6,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][0])
        this.enemies[7][0] = new Spider(x + 103*7,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[7][0])
        this.enemies[8][0] = new Spider(x + 103*8,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][0])
        this.enemies[9][0] = new Spider(x + 103*9,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][0])
        this.enemies[10][0] = new Spider(x + 103*10,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][0])

        this.enemies[0][1] = new Spider(x + 103*0,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][1])
        this.enemies[1][1] = new Spider(x + 103*1,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][1])
        this.enemies[2][1] = new Spider(x + 103*2,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][1])
        this.enemies[3][1] = new Spider(x + 103*3,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[3][1])
        this.enemies[4][1] = new Spider(x + 103*4,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][1])

        this.enemies[6][1] = new Spider(x + 103*6,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][1])
        this.enemies[7][1] = new Spider(x + 103*7,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[7][1])
        this.enemies[8][1] = new Spider(x + 103*8,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][1])
        this.enemies[9][1] = new Spider(x + 103*9,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][1])
        this.enemies[10][1] = new Spider(x + 103*10,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][1])

        this.enemies[0][4] = new Spider(x + 103*0,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][4])
        this.enemies[1][4] = new Spider(x + 103*1,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][4])
        this.enemies[2][4] = new Spider(x + 103*2,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][4])
        this.enemies[3][4] = new Spider(x + 103*3,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[3][4])
        this.enemies[4][4] = new Spider(x + 103*4,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][4])

        this.enemies[6][4] = new Spider(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
        this.enemies[7][4] = new Spider(x + 103*7,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[7][4])
        this.enemies[8][4] = new Spider(x + 103*8,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][4])
        this.enemies[9][4] = new Spider(x + 103*9,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][4])
        this.enemies[10][4] = new Spider(x + 103*10,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][4])

        this.enemies[0][5] = new Spider(x + 103*0,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][5])
        this.enemies[1][5] = new Spider(x + 103*1,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][5])
        this.enemies[2][5] = new Spider(x + 103*2,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][5])
        this.enemies[3][5] = new Spider(x + 103*3,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[3][5])
        this.enemies[4][5] = new Spider(x + 103*4,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][5])

        this.enemies[6][5] = new Spider(x + 103*6,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][5])
        this.enemies[7][5] = new Spider(x + 103*7,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[7][5])
        this.enemies[8][5] = new Spider(x + 103*8,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][5])
        this.enemies[9][5] = new Spider(x + 103*9,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][5])
        this.enemies[10][5] = new Spider(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
    }
    room30(x,y){
        this.enemies[5][2] = new Fly(x + 103*5,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[5][2])
        this.enemies[5][3] = new Fly(x + 103*5,y + 104*3,this.game, this.isaac)
        this.game.addEntity(this.enemies[5][3])
    }
    room31(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])
    }
    room32(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_hearts("halfRed",x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_hearts("halfRed",x + 103*1,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_hearts("halfRed",x + 103*2,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])
    }
    room33(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])
        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[1][0] = new Spider(x + 103*1,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][0])
        this.enemies[2][0] = new Spider(x + 103*2,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][0])

        this.enemies[8][5] = new Spider(x + 103*8,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][5])
        this.enemies[9][5] = new Spider(x + 103*9,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][5])
        this.enemies[10][5] = new Spider(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
    }
    room34(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.obstacles[0][1].static = true;
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.obstacles[1][1].static = true;
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.obstacles[2][1].static = true;
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.obstacles[3][1].static = true;
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.obstacles[3][0].static = true;
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.obstacles[10][4].static = true;
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.obstacles[9][4].static = true;
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.obstacles[8][4].static = true;
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.obstacles[7][4].static = true;
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.obstacles[7][5].static = true;
        this.game.addEntity(this.obstacles[7][5])

        this.enemies[0][0] = new Spider(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[1][0] = new Spider(x + 103*1,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[1][0])
        this.enemies[2][0] = new Spider(x + 103*2,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[2][0])

        this.enemies[8][5] = new Spider(x + 103*8,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[8][5])
        this.enemies[9][5] = new Spider(x + 103*9,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[9][5])
        this.enemies[10][5] = new Spider(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
    }
    room35(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.obstacles[0][1].static = true;
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.obstacles[1][1].static = true;
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.obstacles[2][1].static = true;
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.obstacles[3][1].static = true;
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.obstacles[3][0].static = true;
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.obstacles[10][4].static = true;
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.obstacles[9][4].static = true;
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.obstacles[8][4].static = true;
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.obstacles[7][4].static = true;
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.obstacles[7][5].static = true;
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_hearts("halfRed",x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_hearts("halfRed",x + 103*1,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_hearts("halfRed",x + 103*2,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][5] = new Pickup_key(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_key(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_key(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])
    }
    room36(x,y){
        this.obstacles[0][1] = new Spikes(x + 103*0,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[0][1])
        this.obstacles[1][1] = new Spikes(x + 103*1,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[1][1])
        this.obstacles[2][1] = new Spikes(x + 103*2,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[2][1])
        this.obstacles[3][1] = new Spikes(x + 103*3,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[3][1])
        this.obstacles[3][0] = new Spikes(x + 103*3,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[3][0])

        this.obstacles[0][4] = new Spikes(x + 103*0,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[0][4])
        this.obstacles[1][4] = new Spikes(x + 103*1,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[1][4])
        this.obstacles[2][4] = new Spikes(x + 103*2,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[2][4])
        this.obstacles[3][4] = new Spikes(x + 103*3,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[3][4])
        this.obstacles[3][5] = new Spikes(x + 103*3,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[3][5])
        
        this.obstacles[10][1] = new Spikes(x + 103*10,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[10][1])
        this.obstacles[9][1] = new Spikes(x + 103*9,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[9][1])
        this.obstacles[8][1] = new Spikes(x + 103*8,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[8][1])
        this.obstacles[7][1] = new Spikes(x + 103*7,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[7][1])
        this.obstacles[7][0] = new Spikes(x + 103*7,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[7][0])

        this.obstacles[10][4] = new Spikes(x + 103*10,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[10][4])
        this.obstacles[9][4] = new Spikes(x + 103*9,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[9][4])
        this.obstacles[8][4] = new Spikes(x + 103*8,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[8][4])
        this.obstacles[7][4] = new Spikes(x + 103*7,y + 104*4,this.game)
        this.game.addEntity(this.obstacles[7][4])
        this.obstacles[7][5] = new Spikes(x + 103*7,y + 104*5,this.game)
        this.game.addEntity(this.obstacles[7][5])

        this.obstacles[0][0] = new Pickup_hearts("halfRed",x + 103*0,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[0][0])
        this.obstacles[1][0] = new Pickup_hearts("halfRed",x + 103*1,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[1][0])
        this.obstacles[2][0] = new Pickup_hearts("halfRed",x + 103*2,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[2][0])

        this.obstacles[8][0] = new Pickup_hearts("halfRed",x + 103*8,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[8][0])
        this.obstacles[9][0] = new Pickup_hearts("halfRed",x + 103*9,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[9][0])
        this.obstacles[10][0] = new Pickup_hearts("halfRed",x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])

        this.obstacles[0][5] = new Pickup_hearts(x + 103*0,y + 104*5)
        this.game.addEntity(this.obstacles[0][5])
        this.obstacles[1][5] = new Pickup_hearts(x + 103*1,y + 104*5)
        this.game.addEntity(this.obstacles[1][5])
        this.obstacles[2][5] = new Pickup_coin(x + 103*2,y + 104*5)
        this.game.addEntity(this.obstacles[2][5])

        this.obstacles[8][5] = new Pickup_coin(x + 103*8,y + 104*5)
        this.game.addEntity(this.obstacles[8][5])
        this.obstacles[9][5] = new Pickup_coin(x + 103*9,y + 104*5)
        this.game.addEntity(this.obstacles[9][5])
        this.obstacles[10][5] = new Pickup_coin(x + 103*10,y + 104*5)
        this.game.addEntity(this.obstacles[10][5])

        this.enemies[4][1] = new Sucker(x + 103*4,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][1])
        this.enemies[4][4] = new Sucker(x + 103*4,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][4])

        this.enemies[6][1] = new Sucker(x + 103*6,y + 104*1,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][1])
        this.enemies[6][4] = new Sucker(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
    }
    room37(x,y){
        this.enemies[6][4] = new JumpingSpider(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
    }
    room38(x,y){
        this.enemies[6][4] = new Spider(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
        this.obstacles[10][0] = new Pickup_hearts("halfBlue",x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
    }
    room39(x,y){
        this.enemies[0][4] = new Sucker(x + 103*0,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][4])
        this.obstacles[10][0] = new Pickup_hearts("fullBlue",x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
    }
    room40(x,y){
        this.enemies[6][4] = new Pooter(x + 103*6,y + 104*4,this.game, this.isaac)
        this.game.addEntity(this.enemies[6][4])
        this.obstacles[10][0] = new Pickup_hearts("fullBlack",x + 103*10,y + 104*0,this.game)
        this.game.addEntity(this.obstacles[10][0])
    }







    //Boss rooms
    Broom1(x,y){
        this.enemies[0][0] = new Gurgling(x + 103*0,y + 104*0,this.game, this.isaac)
        this.game.addEntity(this.enemies[0][0])
        this.enemies[10][5] = new Gurgling(x + 103*10,y + 104*5,this.game, this.isaac)
        this.game.addEntity(this.enemies[10][5])
        this.roomN = 100
    };
    Broom2(x,y){
        this.enemies[4][2] = new Gurdy_jr(x + 103*4,y + 104*2,this.game, this.isaac)
        this.game.addEntity(this.enemies[4][2])
        this.roomN = 101
    }

    //Shop rooms
    Sroom1(x,y){
        this.obstacles[4][1] = new Fires("normal",x + 103*4,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[4][1])
        this.obstacles[3][3] = new ItemP(x + 103*3,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[3][3])
        this.obstacles[3][3].payFor = true;
        this.obstacles[6][1] = new Fires("normal",x + 103*6,y + 104*1,this.game)
        this.game.addEntity(this.obstacles[6][1])
        this.obstacles[7][3] = new ItemP(x + 103*7,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[7][3])
        this.obstacles[7][3].payFor = true;
        console.log(this.obstacles)
        this.roomN = 200
    };

    //Treasure rooms
    Troom1(x,y){
        this.obstacles[5][3] = new ItemP(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.roomN = 300
    };

    //Devil rooms
    Droom1(x,y){
        this.obstacles[5][3] = new ItemP(x + 103*5,y + 104*3,this.game)
        this.game.addEntity(this.obstacles[5][3])
        this.obstacles[5][3].bossItem = true;
        this.roomN = 300
    };
}