class Isaac {
	constructor(game){
		this.game = game;
		this.count = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./samus_run_animation.png"), -6, 0, 42.6, 49, 10, 0.1);
		this.x = 690;
		this.y = 400;
		this.speed = 250;
	};


	update(){
		//this.x += this.speed*this.game.clockTick;
		if(this.x > 1024){
			this.x = -100;
			this.count = 0
		}
	};


	draw(ctx){
		this.count += (1*this.game.clockTick);
		//console.log(this.count)
		if(this.count < 2){
			ctx.drawImage(ASSET_MANAGER.getAsset("./crying_isaac.png"),this.x,this.y,130,85);
			if(this.count < 0.25){
				this.x = this.x-50*this.game.clockTick
			}else if(this.count < 0.5){
				this.x = this.x+50*this.game.clockTick
			}else if(this.count < 0.75){
				this.x = this.x-50*this.game.clockTick
			}else if(this.count < 1){
				this.x = this.x+50*this.game.clockTick
			}else if(this.count < 1.25){
				this.x = this.x-50*this.game.clockTick
			}else if(this.count < 1.5){
				this.x = this.x+50*this.game.clockTick
			}else if(this.count < 1.75){
				this.x = this.x-50*this.game.clockTick
			}else if(this.count < 2){
				this.x = this.x+50*this.game.clockTick
			}
			
			
		}
		else{
			ctx.drawImage(ASSET_MANAGER.getAsset("./isaac_idle.png"),this.x+10,this.y-50,95,120);
		}
		
	};
}