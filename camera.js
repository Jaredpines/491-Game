class Camera {
    constructor(game){
        this.game = game;
        this.slide = 0;
    };
    cameraUp(){
        this.game.ctx.translate(0,997)
    }
    cameraDown(){
        this.game.ctx.translate(0,-997)
    }
    cameraLeft(){
        if(this.slide < 1471){
            this.slide += 2000*this.game.clockTick;
            this.game.ctx.translate(2000*this.game.clockTick,0)
        }else{
            let diff = this.slide - 1471
            this.game.ctx.translate(-diff,0)
            this.slide = 0;
        }
        console.log(this.slide)
    }
    cameraRight(){
        this.game.ctx.translate(-1471,0)
    }
    

}
