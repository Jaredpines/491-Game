class Camera {
    constructor(game){
        this.game = game;
        this.slide = 0;
        this.slideR = 1471;
        this.slideU = 0;
        this.slideD = 997;
    };
    cameraUp(){
        if(this.slideU < 997){
            this.slideU += (2*997)*this.game.clockTick;
            this.game.ctx.translate(0, (2*997)*this.game.clockTick)
        }else{
            let diff = this.slideU - 997
            this.game.ctx.translate(0,-diff)
            this.slideU = 0;
        }
        
    }
    cameraDown(){
        if(this.slideD > 0){
            this.slideD -= (2*997)*this.game.clockTick;
            this.game.ctx.translate(0,(2*-997)*this.game.clockTick)
        }else{
            let diff = this.slideD
            this.game.ctx.translate(0,-diff)
            this.slideD = 997;
        }
    }
    cameraLeft(){
        if(this.slide < 1471){
            this.slide += (2*1471)*this.game.clockTick;
            this.game.ctx.translate((2*1471)*this.game.clockTick,0)
        }else{
            let diff = this.slide - 1471
            this.game.ctx.translate(-diff,0)
            this.slide = 0;
        }
    }
    cameraRight(){
        if(this.slideR > 0){
            this.slideR -= (2*1471)*this.game.clockTick;
            this.game.ctx.translate((2*-1471)*this.game.clockTick,0)
        }else{
            let diff = this.slideR
            this.game.ctx.translate(-diff,0)
            this.slideR = 1471;
        }
    }
    

}
