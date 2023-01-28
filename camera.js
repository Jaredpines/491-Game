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
            this.slide += 2000*this.game.clockTick;
            this.game.ctx.translate(2000*this.game.clockTick,0)
        }else{
            let diff = this.slide - 1471
            this.game.ctx.translate(-diff,0)
            this.slide = 0;
        }
        //console.log(this.slide)
    }
    cameraRight(){
        if(this.slideR > 0){
            this.slideR -= 2000*this.game.clockTick;
            this.game.ctx.translate(-2000*this.game.clockTick,0)
        }else{
            let diff = this.slideR
            console.log(diff);
            this.game.ctx.translate(-diff,0)
            this.slideR = 1471;
        }
    }
    

}
