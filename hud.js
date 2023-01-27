class Hud {
    constructor(game, isaac) {
        this.game = game;
        this.game.camera = this;
        this.character = isaac;

        this.hudHealthX = 200;
        this.hudHealthY = 30;
        this.hudStatsX = 0
        this.hudStatsY = 330
        this.hudPickupsX = 30;
        this.hudPickupsY = 170;
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

        //draw red hearts and empty heart containers
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
            //TODO: add condition so this only runs after empty hearts are drawn
            if (drawnHearts >= this.character.maxRedHearts && (this.character.blueHearts > 0 || this.character.blackHearts > 0)) {
                //draw blue and black hearts here if while loop is changed to maxHearts instead of maxRedHearts
                if (drawnHearts === this.character.maxRedHearts) {
                    if (drawnHearts < 12) {
                        currHeartY = this.hudHealthY;
                        currHeartX = this.hudHealthX + (heartXGap * drawnHearts / 2)
                    } else {
                        currHeartY = this.hudHealthY + 45;
                        currHeartX = this.hudHealthX + (heartXGap * (drawnHearts - 12) / 2)
                    }
                }
                if (this.character.blackHearts > 0) {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                        fullBlackHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                    drawnHearts = drawnHearts + 2;
                } else if (drawnHearts < this.character.maxHearts && this.character.blueHearts > 0) {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
                        fullBlueHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
                    drawnHearts = drawnHearts + 2;
                }
            }

            // if (drawnHearts < this.character.redHearts) {
            //     console.log("in red hearts");
            //     if (this.character.redHearts - drawnHearts > 1) {
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
            //             fullRedHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
            //         drawnHearts = drawnHearts + 2;
            //     } else {
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
            //             halfRedHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
            //         drawnHearts = drawnHearts + 2;
            //     }
            // } else if (drawnHearts >= this.character.maxRedHearts && (this.character.blueHearts > 0 || this.character.blackHearts > 0)) {
            //     //draw blue and black hearts here if while loop is changed to maxHearts instead of maxRedHearts
            //     if (this.character.blueHearts > 0) {
            //         console.log("in blue hearts");
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
            //             fullBlueHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
            //         drawnHearts = drawnHearts + 2;
            //     } else if (drawnHearts < this.character.maxHearts && this.character.blackHearts > 0) {
            //         console.log("in black hearts");
            //         ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
            //             fullBlackHeartSX, allBlueBlackSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
            //         drawnHearts = drawnHearts + 2;
            //     }
            // } else {
            //     console.log("in empty hearts");
            //     ctx.drawImage(ASSET_MANAGER.getAsset("./res/ui_hearts.png"),
            //         emptyHeartSX, allRedHeartSY, allHeartSWidth, allHeartSHeight, currHeartX, currHeartY, 50, 50);
            //     drawnHearts = drawnHearts + 2;
            // }
            // // TODO: add condition so this only runs after empty hearts are drawn

        }

    }

    drawPickups(ctx) {
        const pickupX = this.hudPickupsX + 50;
        const pickupY = this.hudPickupsY + 30;
        const pickupYGap = 50;
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 4, 4, 9, 11, this.hudPickupsX, this.hudPickupsY, 40, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 1, 16, 13, 13, this.hudPickupsX-10, this.hudPickupsY + 50, 50, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 20, 2, 9, 12, this.hudPickupsX, this.hudPickupsY + 100, 40, 50);
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


    };

}