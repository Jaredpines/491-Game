class Isaac_Head {
	constructor(game, body){
		this.game = game;
		this.count = 0;
		this.tearcount = 0;
		this.tearspawned = 0;
		this.body = body;
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./down_shot.png"), -6, 0, 42.6, 49, 10, 0.1);

		this.xPosition = 735.5;
		this.yPosition = 454.5;
        this.boundingBox = null;
		this.damage = 3.50;
		this.range = 6.5;
		this.shotSpeed = 1;
		this.tear;
		this.tearSkin = "./res/normal_tears.png";
		this.piercing = false;

		//costumes
		this.costumes = []
		this.costumeSpriteModifier = 0;
		this.stigmataCostume = ASSET_MANAGER.getAsset("./res/costume_stigmata.png");
		this.synthoilCostume = ASSET_MANAGER.getAsset("./res/costume_synthoil.png");

	};




	update(){
		this.state = 0;
		this.xPosition = this.body.xPosition;
		if(this.body.state == 1 && this.body.facing == 0){
			this.yPosition = this.body.yPosition-42;
		}else{
			this.yPosition = this.body.yPosition-42;
		}


	};

	//TODO: fix overload resolution error
	drawCostumes(ctx, position) {
		switch (position) {
			case "DSC":
				this.costumeSpriteModifier = 0
				break;
			case "DSO":
				this.costumeSpriteModifier = 1
				break;
			case "RSC":
				this.costumeSpriteModifier = 2
				break;
			case "RSO":
				this.costumeSpriteModifier = 3
				break;
			case "LSC":
				this.costumeSpriteModifier = 4
				break;
			case "LSO":
				this.costumeSpriteModifier = 5
				break;
			case "USC":
				this.costumeSpriteModifier = 6
				break;
			case "USO":
				this.costumeSpriteModifier = 7
				break;
		}
		for (let i = 0; i < this.costumes.length; i++) {
			ctx.drawImage(ASSET_MANAGER.getAsset(this.costumes[i]),32 * this.costumeSpriteModifier, 0, this.xPosition,this.yPosition,128,128);
		}
	}


	draw(ctx){
		this.boundingBox = new BoundingBox(this.xPosition+10,this.yPosition+10,110,96);
		//ctx.strokeRect(this.xPosition+10,this.yPosition+10,110,96);
		this.count += (1*this.game.clockTick);

		if(this.count < 2 && !this.game.camera.gameOver){

		}else if(this.game.keys.ArrowDown){

			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_close.png"),this.xPosition,this.yPosition,128,128);
				// this.drawCostumes(ctx, 0);
				if(this.tearspawned == 0){
				this.tear = new Tears(this.xPosition,this.yPosition,"down",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
				this.game.addEntity(this.tear);
				}
				this.tearspawned = 1;
			}else if(this.tearcount < 0.5){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition,this.yPosition,128,128);
				// this.drawCostumes(ctx, 1);
			}else{
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/down_shot_open.png"),this.xPosition,this.yPosition,128,128);
				// this.drawCostumes(ctx, 1);
				this.tearspawned = 0;
				this.tearcount = 0;
			}

		}else if(this.game.keys.ArrowRight){
			this.tearcount += (1*this.game.clockTick);
			if(this.tearcount < 0.1 ){
				ctx.drawImage(ASSET_MANAGER.getAsset("./res/right_shot_close.png"),this.xPosition,this.yPosition,128,128);
				if(this.tearspawned == 0){
					this.tear = new Tears(this.xPosition,this.yPosition,"right",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
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
					this.tear = new Tears(this.xPosition,this.yPosition,"left",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
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
					this.tear = new Tears(this.xPosition,this.yPosition,"up",this.game,this.damage,this.range,this.shotSpeed, this.tearSkin)
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
			//this.drawCostumes(ctx, 0);
		}

	};
}