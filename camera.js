class Camera {
    constructor(game){
        this.game = game;
    };
    cameraUp(){
        this.game.ctx.translate(0,997)
    }
    cameraDown(){
        this.game.ctx.translate(0,-997)
    }
    cameraLeft(){
        this.game.ctx.translate(1471,0)
    }
    cameraRight(){
        this.game.ctx.translate(-1471,0)
    }
    

}
