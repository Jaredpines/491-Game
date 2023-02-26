class Animator {
	constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, scale){
		Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, scale});

		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
	};

	drawFrame(tick, ctx, x, y){

		this.elapsedTime += tick
		if(this.elapsedTime > this.totalTime){
			this.elapsedTime -= this.totalTime;
		}
		const frame = this.currentFrame();

		ctx.drawImage(this.spriteSheet,
			this.xStart + this.width*frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width * this.scale, this.height * this.scale);
	};
	drawFrameD(tick, ctx, x, y){

		this.elapsedTime += tick
		if(this.elapsedTime > this.totalTime){
			this.elapsedTime -= this.totalTime;
		}
		const frame = this.currentFrame();

		ctx.drawImage(this.spriteSheet,
			this.xStart, this.yStart+ this.height*frame,
			this.width, this.height,
			x, y,
			this.width * this.scale, this.height * this.scale);
	};
	drawFrameReverse(tick, ctx, x, y){

		this.elapsedTime += tick
		if(this.elapsedTime > this.totalTime){
			this.elapsedTime -= this.totalTime;
		}
		const frame = this.currentFrame();

		ctx.drawImage(this.spriteSheet,
			288 - this.width*frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width * this.scale, this.height * this.scale);
	};
	

	currentFrame(){
		return Math.floor(this.elapsedTime / this.frameDuration)
	};

	isDone(){
		return (this.elapsedTime >= this.totalTime-0.02)
	};
};
