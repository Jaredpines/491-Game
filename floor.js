class Floor {
    constructor(game){
        this.game = game;
        this.camera = new Camera(this.game);
        this.farthestLeft = 0;
        this.farthestRight = 0;
        this.farthestUp = 0;
        this.farthestDown = 0;
        this.door = new Door(0,0,this.game);
    };
    addBaseRoom(){
        this.game.addEntity(new Normal_Room(0,0,this.game));
    }
    addRoom(direction){
        if(direction === "left"){
            this.farthestLeft += 1471;
            this.game.addEntity(new Normal_Room(this.farthestLeft,0,this.game));
            this.door = new Door(this.farthestLeft-1471,0,this.game)
            this.game.addEntity(this.door);
        }else if(direction === "right"){
            this.farthestRight -= 1471;
            this.game.addEntity(new Normal_Room(this.farthestRight,0,this.game));
            this.door = new Door(this.farthestRight,0,this.game)
            this.game.addEntity(this.door);
        }else if(direction === "up"){
            this.farthestUp -= 997;
            this.game.addEntity(new Normal_Room(0,this.farthestUp,this.game));
            this.door = new Door(0,this.farthestUp+997,this.game)
            this.game.addEntity(this.door);
        }else if(direction === "down"){
            this.farthestDown += 997;
            this.game.addEntity(new Normal_Room(0,this.farthestDown,this.game));
            this.door = new Door(0,this.farthestDown-997,this.game)
            this.game.addEntity(this.door);
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