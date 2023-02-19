class Camera {
    constructor(game){
        this.game = game;
        this.slide = 0;
        this.slideR = 1472;
        this.slideU = 0;
        this.slideD = 992;
        this.ogX = 0;
        this.ogY = 0;
    };
    cameraUp(){
        if(this.slideU < 992){
            this.slideU += (2*992)*this.game.clockTick;
            this.game.ctx.translate(0, (2*992)*this.game.clockTick)
        }else{
            let diff = this.slideU - 992
            this.game.ctx.translate(0,-diff)
            this.slideU = 0;
            this.ogY -= 992
        }
        
    }
    cameraDown(){
        if(this.slideD > 0){
            this.slideD -= (2*992)*this.game.clockTick;
            this.game.ctx.translate(0,(2*-992)*this.game.clockTick)
        }else{
            let diff = this.slideD
            this.game.ctx.translate(0,-diff)
            this.slideD = 992;
            this.ogY += 992
        }
    }
    cameraLeft(){
        if(this.slide < 1472){
            this.slide += (2*1472)*this.game.clockTick;
            this.game.ctx.translate((2*1472)*this.game.clockTick,0)
        }else{
            let diff = this.slide - 1472
            this.game.ctx.translate(-diff,0)
            this.slide = 0;
            this.ogX -= 1472
        }
    }
    cameraRight(){
        if(this.slideR > 0){
            this.slideR -= (2*1472)*this.game.clockTick;
            this.game.ctx.translate((2*-1472)*this.game.clockTick,0)
        }else{
            let diff = this.slideR
            this.game.ctx.translate(-diff,0)
            this.slideR = 1472;
            this.ogX += 1472
        }
    }
    

}
