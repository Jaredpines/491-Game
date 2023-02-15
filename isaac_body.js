class Isaac_Body {
	constructor(game){
		this.game = game;
		this.count = 0;
		this.dead = false;
		this.isaacWin = false;
		this.crying = true;
		this.xPosition = 735.5;
		this.yPosition = 498.5;
		this.moveBoundsLeft = 138;
		this.moveBoundsRight = 1214;
		this.moveBoundsUp = 128;
		this.moveBoundsDown = 724;
		this.isaacSpritesheet = ASSET_MANAGER.getAsset("./res/isaac_walk.png");
		this.isaacDeadSprite = ASSET_MANAGER.getAsset("./res/crying_isaac.png");
		this.boundingBox = null;
		this.facing = 2; // 0 = up, 1 = right, 2 = down, 3 = left
		this.state = 0; // 0 = idle, 1 = walking
		this.tempCount = 0;
		this.deadTime = 0;

		//stats
		this.redHearts = 5;
		this.maxRedHearts = 8;
		this.blueHearts = 4;
		this.blackHearts = 2;
		this.maxHearts = 24;
		this.movementSpeed = 500;
		this.fireRate = 0;
		this.damage = 3.5;
		this.range = 6.5;
		this.shotSpeed = 0;
		this.luck = 0;
		this.devilChance = 100;
		this.angelChance = 0;
		this.planetariumChance = 0;

		//pickups
		this.coinPickup = 5;
		this.keyPickup = 1;
		this.bombPickup = 1;

		this.animations = [];
		this.loadAnimations();

	};

	takeDamage(damage) {
		if (this.blackHearts > 0) {
			if (this.blackHearts - damage < 0) {
				damage = damage - this.blackHearts;
				this.blackHearts = 0;
			} else {
				this.blackHearts -= damage;
				damage = 0;
			}
		}
		if (this.blueHearts > 0) {
			if (this.blueHearts - damage < 0) {
				damage = damage - this.blueHearts;
				this.blueHearts = 0;
			} else {
				this.blueHearts -= damage;
				damage = 0;
			}
		}
		if (this.redHearts > 0) {
			if (this.redHearts - damage < 0) {
				damage = damage - this.redHearts;
				this.redHearts = 0;
			} else {
				this.redHearts -= damage;
				damage = 0;
			}
		}

		if (this.redHearts <= 0) {
			this.dead = true;
			this.game.camera.gameOver = true;
		}
		//this.devilChance -= 25*this.game.clockTick;
		if (!this.dead) {
			let c = Math.floor(Math.random() * (4 - 1) + 1);
			if(c===1){
				ASSET_MANAGER.playAsset("./sounds/hurt_grunt.wav");
			}else if(c===2){
				ASSET_MANAGER.playAsset("./sounds/hurt_grunt_1.wav");
			}else if(c===3) {
				ASSET_MANAGER.playAsset("./sounds/hurt_grunt_2.wav");
			}
		}

	}

	loadAnimations() {
		for (var i = 0; i < 4; i++) { // Four Directions
			this.animations.push([]);
			for (var j = 0; j < 2; j++) { // Two States of Movement
				this.animations[i].push([]);
			}
		}

		//Idle Animation state = 0
		//Facing Up = 0
		this.animations[0][0] = new Animator(this.isaacSpritesheet, 0, 96, 32, 32, 1, 0.1, 4);
		//Facing Right = 1
		this.animations[1][0] = new Animator(this.isaacSpritesheet, 0, 32, 32, 32, 1, 0.1, 4);
		//Facing Down = 2
		this.animations[2][0] = new Animator(this.isaacSpritesheet, 0, 0, 32, 32, 1, 0.1, 4);
		//Facing Left = 3
		this.animations[3][0] = new Animator(this.isaacSpritesheet, 0, 64, 32, 32, 1, 0.1, 4);

		//Walking Animation state = 1
		//Facing Up = 0
		this.animations[0][1] = new Animator(this.isaacSpritesheet, 0, 96, 32, 32, 10, 0.1, 4);
		//Facing Right = 1
		this.animations[1][1] = new Animator(this.isaacSpritesheet, 0, 32, 32, 32, 10, 0.1, 4);
		//Facing Down = 2
		this.animations[2][1] = new Animator(this.isaacSpritesheet, 0, 0, 32, 32, 10, 0.1, 4);
		//Facing Left = 3
		this.animations[3][1] = new Animator(this.isaacSpritesheet, 0, 64, 32, 32, 10, 0.1, 4);



	};

	update(){
		this.state = 0;
		var that = this;
		if(this.count > 2 && !this.dead){
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
		if(this.count > 2 && !this.dead){
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

		if (this.dead) {
			this.game.camera.gameOver = true;

			if (this.deadTime === 0) {
				this.deadTime += this.game.clockTick;
				ASSET_MANAGER.playAsset("./sounds/isaac_dies_new.wav")
			}
			if (this.deadTime > 2) {
				console.log("runs")
				this.boundingBox = undefined;
				this.removeFromWorld = true;

			}
		}

		if (this.isaacWin) {
			this.game.camera.gameOver = true;
			this.game.camera.win = true;

			if (this.deadTime === 0) {
				this.deadTime += this.game.clockTick;
			}
			if (this.deadTime > 2) {
				console.log("you win!")
				this.boundingBox = undefined;
				this.removeFromWorld = true;
			}
		}


	};


	draw(ctx){
		this.boundingBox = new BoundingBox(this.xPosition+32,this.yPosition+44,64,64);
		//ctx.strokeRect(this.xPosition+32,this.yPosition+44,64,64);
		this.count += (1*this.game.clockTick);
		if(this.count < 2) {
			ctx.drawImage(ASSET_MANAGER.getAsset("./res/crying_isaac.png"),this.xPosition,this.yPosition,128,96);
			if(this.count < 0.25) {
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
			}else if(this.count < 1.9){
				this.xPosition = this.xPosition+50*this.game.clockTick

			}else if(this.count < 2){
				this.xPosition = 735.5;
			}

			this.crying = false

			
			
		}else if(this.game.keys.s && !this.dead){
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
			
		}else if(this.game.keys.d && !this.dead){
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
			
		}else if(this.game.keys.a && !this.dead){
			this.animations[this.facing][this.state].drawFrameReverse(this.game.clockTick, ctx, this.xPosition, this.yPosition);
			
		}else if(this.game.keys.w && !this.dead){
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);
			
			
		}else if (this.dead) {
			this.tempCount += (1*this.game.clockTick);

			if(this.tempCount < 2) {
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/crying_isaac.png"),this.xPosition,this.yPosition,130,85);
				if(this.tempCount < 0.25) {
					this.xPosition = this.xPosition-50*this.game.clockTick
				}else if(this.tempCount < 0.5){
					this.xPosition = this.xPosition+50*this.game.clockTick
				}else if(this.tempCount < 0.75){
					this.xPosition = this.xPosition-50*this.game.clockTick
				}else if(this.tempCount < 1){
					this.xPosition = this.xPosition+50*this.game.clockTick
				}else if(this.tempCount < 1.25){
					this.xPosition = this.xPosition-50*this.game.clockTick
				}else if(this.tempCount < 1.5){
					this.xPosition = this.xPosition+50*this.game.clockTick
				}else if(this.tempCount < 1.75){
					this.xPosition = this.xPosition-50*this.game.clockTick
				}else if(this.tempCount < 2){
					this.xPosition = this.xPosition+50*this.game.clockTick
				}
			}

		} else {
			this.animations[this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.xPosition, this.yPosition);

		}

	};
}