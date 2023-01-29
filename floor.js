class Floor {
    constructor(game, level){
        this.game = game;
        this.camera = new Camera(this.game);
        this.farthestLeft = 0;
        this.farthestRight = 0;
        this.farthestUp = 0;
        this.farthestDown = 0;
        let height = 20;
        let width = 20;
        this.rooms = Array.from({length: height}, () => new Array(width));
        this.row = 0;
        this.col = 0;
        this.level = level;
        this.roomMax = 5*this.level;
        this.entityCount = 0;

    };
    addBaseRoom(){
        this.rooms[this.rooms.length/2][this.rooms[0].length/2] = new Normal_Room(0,0,"",this.game)
        this.game.addEntity(this.rooms[this.rooms.length/2][this.rooms[0].length/2]);
    }
    addRoom(direction){
        if(direction === "left"){
            let r = Math.floor(Math.random() * 10);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2-1 > 0){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2-1] == null){
                            if(r == 4 && roomAdded == false){
                                this.farthestLeft += 1471;
                                this.rooms[index][index2-1] = new Normal_Room(this.farthestLeft,0,"left",this.game)
                                this.row = index;
                                this.col = index2-1;
                                this.roomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            if(this.col != 21 &&this.rooms[this.row][this.col] != null){
                this.game.addEntity(this.rooms[this.row][this.col]);
                this.col = 21;
                this.entityCount++;
            }
            
            
            
            
        }else if(direction === "right"){
            let r = Math.floor(Math.random() * 10);
            
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2+1 < this.rooms[index].length){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2+1] == null){
                            if(r == 4 && roomAdded == false){
                                this.farthestRight -= 1471;
                                this.rooms[index][index2+1] = new Normal_Room(this.farthestRight,0,"right",this.game);
                                this.row = index;
                                this.col = index2+1;
                                this.roomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            if(this.col != 21 &&this.rooms[this.row][this.col] != null){
                this.game.addEntity(this.rooms[this.row][this.col]);
                this.col = 21;
                this.entityCount++;
            }
            
            
        }else if(direction === "up"){
            let r = Math.floor(Math.random() * 10);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index-1 > 0 && index+1 < this.rooms.length){
                        if(this.rooms[index+1][index2] != null && this.rooms[index-1][index2] == null){
                            if(r == 4 && roomAdded == false){
                                this.farthestUp -= 997;
                                this.rooms[index-1][index2] = new Normal_Room(0,this.farthestUp,"up",this.game)
                                this.row = index-1;
                                this.col = index2;
                                this.roomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            if(this.col != 21 &&this.rooms[this.row][this.col] != null){
                this.game.addEntity(this.rooms[this.row][this.col]);
                this.col = 21;
                this.entityCount++;
            }
        }else if(direction === "down"){
            let r = Math.floor(Math.random() * 10);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index+1 < this.rooms.length && index-1 > 0){
                        if(this.rooms[index-1][index2] != null && this.rooms[index+1][index2] == null){
                            if(r == 4 && roomAdded == false){
                                this.farthestDown += 997;
                                this.rooms[index+1][index2] = new Normal_Room(0,this.farthestDown,"down",this.game)
                                this.row = index+1;
                                this.col = index2;
                                this.roomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            if(this.col != 21 &&this.rooms[this.row][this.col] != null){
                this.game.addEntity(this.rooms[this.row][this.col]);
                this.col = 21;
                this.entityCount++;
            }

        }
    }
    moveRoom(direction){
        if(direction === "left"){
            this.camera.cameraLeft();
        }else if(direction === "right"){
            this.camera.cameraRight();
        }else if(direction === "up"){
            this.camera.cameraUp();
        }else if(direction === "down"){
            this.camera.cameraDown();
        }
    }
    

}