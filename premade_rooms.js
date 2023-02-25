class Premade_Rooms {
    constructor(locX, locY, game, floor){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.obstacles = Array.from({length: 11}, () => new Array(6));
        this.floor = floor;
        this.r = Math.floor(Math.random() * 5)+1;
    };


    addObstacles(x,y){
        this.locX = x;
        this.locY = y;
        if(this.r == 1){
            this.room1(x+160,y+160);
            this.r = Math.floor(Math.random() * 5)+1;
        }else if(this.r == 2){
            this.room2(x+160,y+160);
            this.r = Math.floor(Math.random() * 5)+1;
        }
        else if(this.r == 3){
            this.room3(x+160,y+160);
            this.r = Math.floor(Math.random() * 5)+1;
        }else if(this.r == 4){
            this.room4(x+160,y+160);
            this.r = Math.floor(Math.random() * 5)+1;
        }else{
            this.r = Math.floor(Math.random() * 5)+1;
        }
    };
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
        
    }
    
}