class Isaac {
	constructor(game){
		this.game = game;
		this.count = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./samus_run_animation.png"), -6, 0, 42.6, 49, 10, 0.1);
		this.xPosition = 690;
		this.yPosition = 400;
		this.movementSpeed = 5;
		this.moveBoundsLeft = 140;
		this.moveBoundsRight = 1350;
		this.moveBoundsUp = 140;
		this.moveBoundsDown = 740;
	};


	update(){
		//this.x += this.speed*this.game.clockTick;
		if(this.xPosition > 1024){
			this.xPosition = -100;
			this.count = 0
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