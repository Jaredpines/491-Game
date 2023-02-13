class Isaac_Head {
	constructor(game){
		this.game = game;
		this.count = 0;
		this.tearcount = 0;
		this.tearspawned = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./down_shot.png"), -6, 0, 42.6, 49, 10, 0.1);
        
		this.xPosition = 735.5;
		this.yPosition = 498.5-44;
		this.movementSpeed = 500;
		this.moveBoundsLeft = 138;
		this.moveBoundsRight = 1214;
		this.moveBoundsUp = 128-44;
		this.moveBoundsDown = 724-44;
        this.boundingBox = null;
		this.damage = 3.50;
		this.range = 6.5;
		this.shotSpeed = 1;
		this.tear;
	};

	


	update(){
		this.state = 0;
		if(this.count > 2 && !this.game.camera.gameOver){
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
		this.boundingBox = new BoundingBox(this.xPosition+10,this.yPosition+10,110,96);
		//ctx.strokeRect(this.xPosition+10,this.yPosition+10,110,96);
		this.count += (1*this.game.clockTick);

		if(this.count < 2 && !this.game.camera.gameOver){
			
		}else if(this.game.keys.ArrowDown){

			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_close.png"),this.xPosition,this.yPosition,128,128);
				if(this.tearspawned == 0){
				this.tear = new Tears(this.xPosition,this.yPosition,"down",this.game,this.damage,this.range,this.shotSpeed)
				this.game.addEntity(this.tear);
				}
				this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition,this.yPosition,128,128);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition,this.yPosition,128,128);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else if(this.game.keys.ArrowRight){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_close.png"),this.xPosition,this.yPosition,128,128);
				if(this.tearspawned == 0){
					this.tear = new Tears(this.xPosition,this.yPosition,"right",this.game,this.damage,this.range,this.shotSpeed)
					this.game.swapTearEntity(this.tear);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_open.png"),this.xPosition,this.yPosition,128,128);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_open.png"),this.xPosition,this.yPosition,128,128);
				this.tearspawned = 0;
				this.tearcount = 0;
				
			}
			
		}else if(this.game.keys.ArrowLeft){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_close.png"),this.xPosition,this.yPosition,128,128);
				if(this.tearspawned == 0){
					this.tear = new Tears(this.xPosition,this.yPosition,"left",this.game,this.damage,this.range,this.shotSpeed)
					this.game.swapTearEntity(this.tear);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_open.png"),this.xPosition,this.yPosition,128,128);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/left_shot_open.png"),this.xPosition,this.yPosition,128,128);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else if(this.game.keys.ArrowUp){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_close.png"),this.xPosition,this.yPosition,128,128);
				if(this.tearspawned == 0){
					this.tear = new Tears(this.xPosition,this.yPosition,"up",this.game,this.damage,this.range,this.shotSpeed)
					this.game.swapTearEntity(this.tear);
					}
					this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_open.png"),this.xPosition,this.yPosition,128,128);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/up_shot_open.png"),this.xPosition,this.yPosition,128,128);
				this.tearspawned = 0;
				this.tearcount = 0;
			}
			
		}else if (this.game.camera.gameOver) {
		} else {
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition,this.yPosition,128,128);

		}
		
	};
}