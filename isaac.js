class Isaac {
	constructor(game){
		this.game = game;
		this.count = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./samus_run_animation.png"), -6, 0, 42.6, 49, 10, 0.1);
		this.xPosition = 690;
		this.yPosition = 400;
		this.movementSpeed = 5;
		this.moveBoundsLeft = 140;
		this.moveBoundsRight = 1210;
		this.moveBoundsUp = 140;
		this.moveBoundsDown = 740;
	};


	update(){
		//let isaac = this.entities[0];
        if (this.game.keys.w) {
            if (this.yPosition >= this.moveBoundsUp) {
                this.yPosition -= this.movementSpeed;
            }
        } else if (this.game.keys.s) {
            if (this.yPosition <= this.moveBoundsDown) {
                this.yPosition += this.movementSpeed;
            }
        }
        if (this.game.keys.a) {
            if (this.xPosition >= this.moveBoundsLeft) {
                this.xPosition -= this.movementSpeed;
            }
        } else if (this.game.keys.d) {
            if (this.xPosition <= this.moveBoundsRight) {
                this.xPosition += this.movementSpeed;
            }
        }
	};


	draw(ctx){
		this.count += (1*this.game.clockTick);
		//console.log(this.count)
		if(this.count < 2){
			ctx.drawImage(ASSET_MANAGER.getAsset("./crying_isaac.png"),this.xPosition,this.yPosition,130,85);
			if(this.count < 0.25){
				this.xPosition = this.xPosition-50*this.game.clockTick
			}else if(this.count < 0.5){
				this.xPosition = this.xPosition+50*this.game.clockTick
			}else if(this.count < 0.75){
				this.xPosition = this.xPosition-50*this.game.clockTick
			}else if(this.count < 1){
				this.xPosition = this.xPosition+50*this.game.clockTick
			}else if(this.count < 1.25){
				this.xPosition = this.xPosition-50*this.game.clockTick
			}else if(this.count < 1.5){
				this.xPosition = this.xPosition+50*this.game.clockTick
			}else if(this.count < 1.75){
				this.xPosition = this.xPosition-50*this.game.clockTick
			}else if(this.count < 2){
				this.xPosition = this.xPosition+50*this.game.clockTick
			}
			
			
		}
		else{
			ctx.drawImage(ASSET_MANAGER.getAsset("./isaac_idle.png"),this.xPosition+10,this.yPosition-50,95,120);
		}
		
	};
}