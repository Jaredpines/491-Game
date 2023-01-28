class Floor {
    constructor(game){
        this.game = game;
        this.camera = new Camera(this.game);
        this.farthestLeft = 0;
        this.farthestRight = 0;
        this.farthestUp = 0;
        this.farthestDown = 0;
        this.rooms = [];
        this.i = 1;
    };
    addBaseRoom(){
        this.rooms[0] = new Normal_Room(0,0,"",this.game)
        this.game.addEntity(this.rooms[0]);
    }
    addRoom(direction){
        if(direction === "left"){
            this.farthestLeft += 1471;
            this.rooms.push(new Normal_Room(this.farthestLeft,0,"left",this.game))
            this.game.addEntity(this.rooms[this.i]);
            this.i++;
            
        }else if(direction === "right"){
            this.farthestRight -= 1471;
            this.rooms.push(new Normal_Room(this.farthestRight,0,"right",this.game));
            this.game.addEntity(this.rooms[this.i]);
            this.i++;
        }else if(direction === "up"){
            this.farthestUp -= 997;
            this.rooms.push(new Normal_Room(0,this.farthestUp,"up",this.game));
            this.game.addEntity(this.rooms[this.i]);
            this.i++;
        }else if(direction === "down"){
            this.farthestDown += 997;
            this.rooms.push(new Normal_Room(0,this.farthestDown,"down",this.game));
            this.game.addEntity(this.rooms[this.i]);
            this.i++;
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