class Isaac {
	constructor(game){
		this.game = game;
		this.count = 0;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./down_shot.png"), -6, 0, 42.6, 49, 10, 0.1);
		this.xPosition = 690;
		this.yPosition = 400;
		this.movementSpeed = 5;
		this.moveBoundsLeft = 140;
		this.moveBoundsRight = 1210;
		this.moveBoundsUp = 140;
		this.moveBoundsDown = 740;

		this.isaacSpritesheet = ASSET_MANAGER.getAsset("./res/isaac.png");
		this.animator = new Animator(ASSET_MANAGER.getAsset("./res/isaac.png"), 2, 80, 40, 20, 1, 0.1, 2);

		this.facing = 2; // 0 = up, 1 = right, 2 = down, 3 = left
		this.state = 0; // 0 = idle, 1 = walking

		this.animations = [];
		this.loadAnimations();
	};

	loadAnimations() {
		for (var i = 0; i < 4; i++) { // Four Directions
			this.animations.push([]);
			for (var j = 0; j < 2; j++) { // Two States of Movement
				this.animations[i].push([]);
			}
		}

		//Idle Animation state = 0
		//Facing Up = 0
		this.animations[0][0] = new Animator(this.isaacSpritesheet, 0, 79, 32, 20, 1, 0.1, 3.5);
		//Facing Right = 1
		this.animations[1][0] = new Animator(this.isaacSpritesheet, 0, 122, 32, 20, 1, 0.1, 3.5);
		//Facing Down = 2
		this.animations[2][0] = new Animator(this.isaacSpritesheet, 0, 188, 32, 20, 1, 0.1, 3.5);
		//Facing Left = 3
		this.animations[3][0] = new Animator(this.isaacSpritesheet, 0, 144, 32, 20, 1, 0.1, 3.5);

		//Walking Animation state = 1
		//Facing Up = 0
		this.animations[0][1] = new Animator(this.isaacSpritesheet, 0, 79, 32, 20, 10, 0.1, 3.5);
		//Facing Right = 1
		this.animations[1][1] = new Animator(this.isaacSpritesheet, 0, 122, 32, 20, 10, 0.1, 3.5);
		//Facing Down = 2
		this.animations[2][1] = new Animator(this.isaacSpritesheet, 0, 188, 32, 20, 10, 0.1, 3.5);
		//Facing Left = 3
		this.animations[3][1] = new Animator(this.isaacSpritesheet, 0, 144, 32, 20, 10, 0.1, 3.5);



	}


	update(){
		this.state = 0;
		if(this.count > 2){
			if (this.game.keys.a && !this.game.keys.d) {
				if (this.xPosition >= this.moveBoundsLeft) {
					this.xPosition -= this.movementSpeed;
				}
			} else if (this.game.keys.d && !this.game.keys.a) {
				if (this.xPosition <= this.moveBoundsRight) {
					this.xPosition += this.movementSpeed;
				}
			} 
			if (this.game.keys.w && !this.game.keys.s) {
				if (this.yPosition >= this.moveBoundsUp) {
					this.yPosition -= this.movementSpeed;
				}
			} else if (this.game.keys.s && !this.game.keys.w) {
				if (this.yPosition <= this.moveBoundsDown) {
					this.yPosition += this.movementSpeed;
				}
			}
		}
		if(this.count > 2){
			if (this.game.keys.a && !this.game.keys.d) {
				this.facing = 3;
				this.state = 1;
			} else if (this.game.keys.d && !this.game.keys.a) {
				this.facing = 1;
				this.state = 1;
			} else if (this.game.keys.w && !this.game.keys.s) {
				
				this.facing = 0;
				this.state = 1;
			} else if (this.game.keys.s && !this.game.keys.w) {
				this.facing = 2;
				this.state = 1;
			} else {
				this.facing = 2;
				this.state = 0;
			}
		}

	};


	draw(ctx){
		
		this.count += (1*this.game.clockTick);
		//console.log(this.count)
		if(this.count < 2){
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/crying_isaac.png"),this.xPosition,this.yPosition,130,85);
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


			
			
		}else if(this.game.keys.ArrowDown){
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition+2, this.yPosition+24);
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_close.png"),this.xPosition+10,this.yPosition-45,95,91);
			
			//ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition+10,this.yPosition-50,95,91);
		}else{
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition+2, this.yPosition+24);
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition+10,this.yPosition-45,95,91);
			//ctx.drawImage(ASSET_MANAGER.getAsset("./res/isaac_idle.png"),this.xPosition+10,this.yPosition-50,95,120);
		}
		
	};
}