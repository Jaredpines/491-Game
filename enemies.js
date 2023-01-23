class Fly {
    constructor(game) {
        this.game = game;
        this.dead = false;

        this.xPosition = 690;
        this.yPosition = 400;
        this.movementSpeed = 500;
        this.moveBoundsLeft = 140;
        this.moveBoundsRight = 1210;
        this.moveBoundsUp = 140;
        this.moveBoundsDown = 740;

        this.flySpritesheet = ASSET_MANAGER.getAsset("./res/monster_fly.png");
        this.animator = new Animator(ASSET_MANAGER.getAsset("./res/monster_fly.png"), 0, 0, 32, 24, 2, 0.1, 2);

        this.animations = [];
        this.loadAnimations();
        this.updateBB();
    };

    loadAnimations() {
        for (var i = 0; i < 1; i++) { // Two States
            this.animations.push([]);
        }

        //Alive = 0
        this.animations[0] = new Animator(this.flySpritesheet, 0, 0, 32, 24, 2, 0.1, 2.5);
        //Dead = 1
        this.animations[1] = new Animator(this.flySpritesheet, 0, 75, 64, 64, 12, 0.1, 2.5);

    };

    updateBB() {
        this.BB = new BoundingBox(this.xPosition, this.yPosition, 32, 24);

    };

    update() {

    };

    draw(ctx) {
        if (this.dead) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, 600, 600);
        } else {
            this.animations[0].drawFrame(this.game.clockTick, ctx, 600, 600);
        }
    }
}