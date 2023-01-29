class Camera {
    constructor(game){
        this.game = game;
        this.slide = 0;
        this.slideR = 1471
    };
    cameraUp(){
        this.game.ctx.translate(0,997)
    }
    cameraDown(){
        this.game.ctx.translate(0,-997)
    }
    cameraLeft(){
        if(this.slide < 1471){
            this.slide += 1500*this.game.clockTick;
            this.game.ctx.translate(1500*this.game.clockTick,0)
        }else{
            let diff = this.slide - 1471
            this.game.ctx.translate(-diff,0)
            this.slide = 0;
        }
    }
    cameraRight(){
        if(this.slideR > 0){
            this.slideR -= 1500*this.game.clockTick;
            this.game.ctx.translate(-1500*this.game.clockTick,0)
        }else{
            let diff = this.slideR
            this.game.ctx.translate(-diff,0)
            this.slideR = 1471;
        }
    }
    

}
