class Minimap {
    constructor(game, isaac) {
        this.game = game;
        this.game.camera = this;
        this.character = isaac;

        this.mmFrameX = 1000;
        this.mmFrameY = 150;
        this.mmFrameSX = 55;
        this.mmFrameSY = 49;

        this.allRoomSX = 27;
        this.visitedSY = 160;
        this.currentSY = 192;
        this.unvisitedSY = 224;
        this.allRoomWidth = 9;
        this.allRoomHeight = 8;

    }

    update(ctx) {

    };

    draw(ctx) {
        ctx.drawImage("./res/minimap1",
            this.visitedSY, this.allRoomSX, this.allRoomWidth, this.allRoomWidth, this.mmFrameX, this.mmFrameY, 50, 50);
    }
}