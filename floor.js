class Floor {
    constructor(game, level){
        this.game = game;
        this.camera = new Camera(this.game);
        this.farthestLeft = 13248;
        this.farthestRight = -13248;
        this.farthestUp = 8928;
        this.farthestDown = -8928;
        let height = 20;
        let width = 20;
        this.rooms = Array.from({length: height}, () => new Array(width));
        this.row = 0;
        this.col = 0;
        this.level = level;
        this.roomMax = (5*this.level);
        this.entityCount = 0;
        this.TRoomMax = 1;
        this.DRoomMax = 1;
        this.BRoomMax = 1;

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
                                this.rooms[index][index2-1] = new Normal_Room(this.farthestLeft-(1472*(index2-2)),-(this.farthestUp-(992*(index-1))),"left",this.game)
                                if(this.rooms[index+1][index2-1] != null){
                                    this.rooms[index][index2-1].down = true;
                                }
                                if(this.rooms[index-1][index2-1] != null){
                                    this.rooms[index][index2-1].up = true;
                                }                              
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
                                
                                this.rooms[index][index2+1] = new Normal_Room(-(this.farthestRight+(1472*(index2))),-(this.farthestUp-(992*(index-1))),"right",this.game);
                                if(this.rooms[index+1][index2+1] != null){
                                    this.rooms[index][index2+1].down = true;
                                }
                                if(this.rooms[index-1][index2+1] != null){
                                    this.rooms[index][index2+1].up = true;
                                }  
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
                        if(this.rooms[index+1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 4 && roomAdded == false){
                                this.rooms[index][index2] = new Normal_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"up",this.game)
                                if(this.rooms[index][index2-1] != null){
                                    this.rooms[index][index2].left = true;
                                }
                                if(this.rooms[index][index2+1] != null){
                                    this.rooms[index][index2].right = true;
                                }     
                                this.row = index;
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
                        if(this.rooms[index-1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 4 && roomAdded == false){
                                
                                this.rooms[index][index2] = new Normal_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"down",this.game)
                                if(this.rooms[index][index2-1] != null){
                                    this.rooms[index][index2].left = true;
                                }
                                if(this.rooms[index][index2+1] != null){
                                    this.rooms[index][index2].right = true;
                                }
                                this.row = index;
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



    addTreasureRoom(direction){
        if(direction === "T"){
            let r = Math.floor(Math.random() * 100);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2-1 > 0){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2-1] == null){
                            if(r == 4 && roomAdded == false&&this.rooms[index+1][index2-1] == null&&this.rooms[index-1][index2-1] == null){
                                this.rooms[index][index2-1] = new Treasure_Room(this.farthestLeft-(1472*(index2-2)),-(this.farthestUp-(992*(index-1))),"TL",this.game)
                                  
                                this.row = index;
                                this.col = index2-1;
                                this.TRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2+1 < this.rooms[index].length){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2+1] == null){
                            if(r == 5 && roomAdded == false&&this.rooms[index+1][index2+1] == null&&this.rooms[index-1][index2+1] == null){
                                
                                this.rooms[index][index2+1] = new Treasure_Room(-(this.farthestRight+(1472*(index2))),-(this.farthestUp-(992*(index-1))),"TR",this.game);
                                this.row = index;
                                this.col = index2+1;
                                this.TRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    
                    if(index-1 > 0 && index+1 < this.rooms.length){
                        if(this.rooms[index+1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 6 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                this.rooms[index][index2] = new Treasure_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"TU",this.game)
                                this.row = index;
                                this.col = index2;
                                this.TRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index+1 < this.rooms.length && index-1 > 0){
                        if(this.rooms[index-1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 7 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                
                                this.rooms[index][index2] = new Treasure_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"TD",this.game)
                                this.row = index;
                                this.col = index2;
                                this.TRoomMax--;
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

    addDevilRoom(direction){
        if(direction === "D"){
            let r = Math.floor(Math.random() * 100);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2-1 > 0){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2].skin == "b" &&this.rooms[index][index2] != null && this.rooms[index][index2-1] == null){
                            if(r == 4 && roomAdded == false&&this.rooms[index+1][index2-1] == null&&this.rooms[index-1][index2-1] == null){
                                this.rooms[index][index2-1] = new Devil_Room(this.farthestLeft-(1472*(index2-2)),-(this.farthestUp-(992*(index-1))),"DL",this.game)
                                  
                                this.row = index;
                                this.col = index2-1;
                                this.DRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2+1 < this.rooms[index].length){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2].skin == "b" &&this.rooms[index][index2] != null && this.rooms[index][index2+1] == null){
                            if(r == 5 && roomAdded == false&&this.rooms[index+1][index2+1] == null&&this.rooms[index-1][index2+1] == null){
                                
                                this.rooms[index][index2+1] = new Devil_Room(-(this.farthestRight+(1472*(index2))),-(this.farthestUp-(992*(index-1))),"DR",this.game);
                                this.row = index;
                                this.col = index2+1;
                                this.DRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    
                    if(index-1 > 0 && index+1 < this.rooms.length){
                        if(this.rooms[index+1][index2] != null && this.rooms[index+1][index2].skin == "b" &&this.rooms[index+1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 6 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                this.rooms[index][index2] = new Devil_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"DU",this.game)
                                this.row = index;
                                this.col = index2;
                                this.DRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index+1 < this.rooms.length && index-1 > 0){
                        if(this.rooms[index-1][index2] != null && this.rooms[index-1][index2].skin == "b" &&this.rooms[index-1][index2] != null && this.rooms[index][index2] == null){
                            if(r == 7 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                
                                this.rooms[index][index2] = new Devil_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"DD",this.game)
                                this.row = index;
                                this.col = index2;
                                this.DRoomMax--;
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

    addBossRoom(direction){
        if(direction === "B"){
            let r = Math.floor(Math.random() * 100);
            let roomAdded = false;
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2-1 > 0){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2].skin != "t" && this.rooms[index][index2-1] == null){
                            if(r == 4 && roomAdded == false&&this.rooms[index+1][index2-1] == null&&this.rooms[index-1][index2-1] == null){
                                console.log(index)
                                console.log(index2)
                                console.log(this.farthestLeft-(1472*(index2-2)))
                                console.log(this.farthestUp-(992*(index-1)))
                                this.rooms[index][index2-1] = new Boss_Room(this.farthestLeft-(1472*(index2-2)),-(this.farthestUp-(992*(index-1))),"BL",this.game)
                                
                                this.row = index;
                                this.col = index2-1;
                                this.BRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index2+1 < this.rooms[index].length){
                        if(this.rooms[index][index2] != null && this.rooms[index][index2].skin != "t" && this.rooms[index][index2+1] == null){
                            if(r == 5 && roomAdded == false&&this.rooms[index+1][index2+1] == null&&this.rooms[index-1][index2+1] == null){
                                this.rooms[index][index2+1] = new Boss_Room(-(this.farthestRight+(1472*(index2))),-(this.farthestUp-(992*(index-1))),"BR",this.game);
                                this.row = index;
                                this.col = index2+1;
                                this.BRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    
                    if(index-1 > 0 && index+1 < this.rooms.length){
                        if(this.rooms[index+1][index2] != null && this.rooms[index+1][index2].skin != "t" && this.rooms[index][index2] == null){
                            if(r == 6 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                this.rooms[index][index2] = new Boss_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"BU",this.game)
                                this.row = index;
                                this.col = index2;
                                this.BRoomMax--;
                                roomAdded = true;
                            }
                        }
                    } 
                
                }
            }
            for (let index = 0; index < this.rooms.length; index++) {
                for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                    if(index+1 < this.rooms.length && index-1 > 0){
                        if(this.rooms[index-1][index2] != null && this.rooms[index-1][index2].skin != "t" && this.rooms[index][index2] == null){
                            if(r == 7 && roomAdded == false&&this.rooms[index][index2-1] == null&&this.rooms[index][index2+1] == null){
                                this.rooms[index][index2] = new Boss_Room(this.farthestLeft-(1472*(index2-1)),this.farthestDown+(992*(index-1)),"BD",this.game)
                                this.row = index;
                                this.col = index2;
                                this.BRoomMax--;
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
    toString(){
        let s = ""
        for (let index = 0; index < this.rooms.length; index++) {
            for (let index2 = 0; index2 < this.rooms[0].length; index2++) {
                if(this.rooms[index][index2]!=null){
                    s += this.rooms[index][index2].skin;
                }else{
                    s+=" "
                }
                
                s += "|"
            }
            s+="\n";
        }
        console.log(s)
    }

}