class Hud {
    constructor(game, isaac) {
        this.game = game;
        this.game.camera = this;
        this.character = isaac;
        this.tempCount = 0;

        this.hudHealthX = 200;
        this.hudHealthY = 30;
        this.hudStatsX = 0
        this.hudStatsY = 330
        this.hudPickupsX = 30;
        this.hudPickupsY = 170;

        this.titleWidth = document.getElementById('gameWorld').width;
        this.titleHeight = document.getElementById('gameWorld').height;
    }

    update(ctx) {
        // this.draw(ctx);
    };

    drawHealth(ctx) {
        const allRedHeartSY = 1;
        const fullRedHeartSX = 1;
        const halfRedHeartSX = 17;
        const allBlueBlackSY = 17;
        const fullBlueHeartSX = 1;
        const halfBlueHeartSX = 17;
        const fullBlackHeartSX = 33;
        const halfBlackHeartSX = 49;
        const emptyHeartSX = 33;
        const allHeartSWidth = 15;
        const allHeartSHeight = 14;
        const heartXGap = 45;
        let currHeartY = this.hudHealthY;
        let currHeartX = this.hudHealthX;
        let drawnHearts = 0;

        while (drawnHearts < this.character.maxRedHearts) { //could potentially be < maxHearts
            if (drawnHearts < 12) {
                currHeartY = this.hudHealthY;
                currHeartX = this.hudHealthX + (heartXGap * drawnHearts / 2)
            } else {
                currHeartY = this.hudHealthY + 45;
                currHeartX = this.hudHealthX + (heartXGap * (drawnHearts - 12) / 2)
            }

            if (drawnHearts < this.character.redHearts) {
                if (this.character.redHearts - drawnHearts > 1) {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                        fullRedHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                    drawnHearts = drawnHearts + 2;
                } else {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                        halfRedHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                    drawnHearts = drawnHearts + 2;
                }
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                    emptyHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                drawnHearts = drawnHearts + 2;
            }
        }

        if (this.character.blueHearts > 0 || this.character.blackHearts > 0) {
            let drawnBlueHearts = 0
            let drawnBlackHearts = 0
            while (drawnHearts < this.character.maxHearts
               && (drawnBlueHearts < this.character.blueHearts || drawnBlackHearts < this.character.blackHearts)) {
                if (drawnHearts < 12) {
                    currHeartY = this.hudHealthY;
                    currHeartX = this.hudHealthX + (heartXGap * drawnHearts / 2)
                } else {
                    currHeartY = this.hudHealthY + 45;
                    currHeartX = this.hudHealthX + (heartXGap * (drawnHearts - 12) / 2)
                }
                if (this.character.blueHearts > 0 && drawnBlueHearts < this.character.blueHearts) {
                    if (this.character.blueHearts - drawnBlueHearts > 1) {
                        ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                            fullBlueHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                        drawnBlueHearts = drawnBlueHearts + 2;
                        drawnHearts = drawnHearts + 2;
                        //console.log("in blue")
                    } else {
                        ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                            halfBlueHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                        drawnBlueHearts = drawnBlueHearts + 2;
                        drawnHearts = drawnHearts + 2;
                        //console.log("in half blue")
                    }
                } else if (this.character.blackHearts > 0 && drawnBlackHearts < this.character.blackHearts) {
                    if (this.character.blackHearts - drawnBlackHearts > 1) {
                        ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                            fullBlackHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                        drawnBlackHearts = drawnBlackHearts + 2;
                        drawnHearts = drawnHearts + 2;
                        //console.log("in black")
                    } else {
                        ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                            halfBlackHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                        drawnBlackHearts = drawnBlackHearts + 2;
                        drawnHearts = drawnHearts + 2;
                        //console.log("in half black")
                    }
                }
            }

        }

    }

    drawPickups(ctx) {
        const pickupX = this.hudPickupsX + 50;
        const pickupY = this.hudPickupsY + 30;
        const pickupYGap = 50;
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"),
            4, 4, 9, 11, this.hudPickupsX, this.hudPickupsY, 40, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"),
            1, 16, 13, 13, this.hudPickupsX-10, this.hudPickupsY + 50, 50, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"),
            20, 2, 9, 12, this.hudPickupsX, this.hudPickupsY + 100, 40, 50);
        ctx.fillText(this.character.coinPickup, pickupX, pickupY);
        ctx.fillText(this.character.bombPickup, pickupX, pickupY + pickupYGap);
        ctx.fillText(this.character.keyPickup, pickupX, pickupY + (pickupYGap * 2));
    }

    drawStats(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_stats.png"),this.hudStatsX,this.hudStatsY);
        const statX = this.hudStatsX + 75;
        const statY = this.hudStatsY + 40;
        const statYGap = 48;

        ctx.fillText(this.character.movementSpeed, statX, statY);
        ctx.fillText(this.character.fireRate, statX, statY + statYGap);
        ctx.fillText(this.character.damage, statX, statY + (statYGap * 2));
        ctx.fillText(this.character.range, statX, statY + (statYGap * 3));
        ctx.fillText(this.character.shotSpeed, statX, statY + (statYGap * 4));
        ctx.fillText(this.character.luck, statX, statY + (statYGap * 5));
        ctx.fillText(this.character.devilChance + "%", statX, statY + (statYGap * 6));
        ctx.fillText(this.character.angelChance + "%", statX, statY + (statYGap * 7));
        ctx.fillText(this.character.planetariumChance + "%", statX, statY + (statYGap * 8));
    }

    drawDeathScreen(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/death_portraits.png"), 200, 7, 217, 252, 0, 0, this.titleWidth, this.titleHeight);
    }

    drawMinimap(ctx) {

    }

    draw(ctx) {
        ctx.font = '25px Calibri';
        ctx.fontSize = "100pt";
        ctx.fillStyle = "White";

        //hud health
        this.drawHealth(ctx);

        //hud pickups
        this.drawPickups(ctx);

        //hud stats
        this.drawStats(ctx);

        if (!this.game.camera.title && !this.game.camera.credits && this.game.camera.gameOver) {
            this.tempCount += 1*this.game.clockTick;

            if (this.tempCount < 2) {

            } else {
                this.drawDeathScreen(ctx);
            }
        }


    };

}