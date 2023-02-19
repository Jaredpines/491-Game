class Premade_Rooms {
    constructor(locX, locY, game){
        this.game = game;
        this.locX = locX;
        this.locY = locY;
        this.obstacles = Array.from({length: 11}, () => new Array(6));

    };


    addObstacles(){
        if(this.obstacles[0][0] == null){
            for (let index = 0; index < this.obstacles.length; index++) {
                for (let index2 = 0; index2 < this.obstacles[0].length; index2++) {
                    this.obstacles[index][index2] = new Rocks(this.locX + 103*index,this.locY + 104*index2)
                    this.game.addEntity(this.obstacles[index][index2])
                }
            }
        }
    };
}