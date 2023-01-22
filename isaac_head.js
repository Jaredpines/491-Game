class Isaac_Head {
	constructor(game){
		this.game = game;
		this.count = 0;
		this.tearcount = 0;
		this.tearspawned = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./down_shot.png"), -6, 0, 42.6, 49, 10, 0.1);
        
		this.xPosition = 690;
		this.yPosition = 400;
		this.movementSpeed = 500;
		this.moveBoundsLeft = 140;
		this.moveBoundsRight = 1210;
		this.moveBoundsUp = 140;
		this.moveBoundsDown = 740;
	};

	


	update(){
		this.state = 0;
		if(this.count > 2){
			if (this.game.keys.a && !this.game.keys.d) {
				if (this.xPosition >= this.moveBoundsLeft) {
					this.xPosition -= this.movementSpeed*this.game.clockTick;
				}
			} else if (this.game.keys.d && !this.game.keys.a) {
				if (this.xPosition <= this.moveBoundsRight) {
					this.xPosition += this.movementSpeed*this.game.clockTick;
				}
			} 
			if (this.game.keys.w && !this.game.keys.s) {
				if (this.yPosition >= this.moveBoundsUp) {
					this.yPosition -= this.movementSpeed*this.game.clockTick;
				}
			} else if (this.game.keys.s && !this.game.keys.w) {
				if (this.yPosition <= this.moveBoundsDown) {
					this.yPosition += this.movementSpeed*this.game.clockTick;
				}
			}
		}

	};


	draw(ctx){
		
		this.count += (1*this.game.clockTick);

		//console.log(this.count)
		if(this.count < 2){
			
		}else if(this.game.keys.ArrowDown){

			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_close.png"),this.xPosition+10,this.yPosition-45,95,91);
				if(this.tearspawned == 0){
				let e = new Tears(this.xPosition+10,this.yPosition-45,"down",this.game)
				this.game.swapTearEntity(e);
				}
				this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else if(this.game.keys.ArrowRight){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_close.png"),this.xPosition+10,this.yPosition-45,95,91);
				if(this.tearspawned == 0){
					let e = new Tears(this.xPosition+10,this.yPosition-45,"right",this.game)
					this.game.swapTearEntity(e);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
				this.tearspawned = 0;
				this.tearcount = 0;
				
			}
			
		}else if(this.game.keys.ArrowLeft){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_close.png"),this.xPosition+10,this.yPosition-45,95,91);
				if(this.tearspawned == 0){
					let e = new Tears(this.xPosition+10,this.yPosition-45,"left",this.game)
					this.game.swapTearEntity(e);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else if(this.game.keys.ArrowUp){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_close.png"),this.xPosition+10,this.yPosition-45,95,91);
				if(this.tearspawned == 0){
					let e = new Tears(this.xPosition+10,this.yPosition-45,"up",this.game)
					this.game.swapTearEntity(e);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else{
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			//ctx.drawImage(ASSET_MANAGER.getAsset("./res/isaac_idle.png"),this.xPosition+10,this.yPosition-50,95,120);
		}
		
	};
}