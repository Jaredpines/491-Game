class Hud {
    constructor(game, isaac, x, y) {
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

        this.x = x;
        this.y = y;

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
        ctx.font = '16px "Press Start 2P"';
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
        ctx.fillText(this.character.tears, statX, statY + statYGap);
        ctx.fillText(this.character.damage, statX, statY + (statYGap * 2));
        ctx.fillText(this.character.range, statX, statY + (statYGap * 3));
        ctx.fillText(this.character.shotSpeed, statX, statY + (statYGap * 4));
        ctx.fillText(this.character.luck, statX, statY + (statYGap * 5));
        ctx.fillText(this.character.devilChance + "%", statX, statY + (statYGap * 6));
        ctx.fillText(this.character.angelChance + "%", statX, statY + (statYGap * 7));
        ctx.fillText(this.character.planetariumChance + "%", statX, statY + (statYGap * 8));
    }

    //TODO: fix context!!
    updateStats(ctx, statName, value) {
        console.log('drawing stat inc');
        const statX = this.hudStatsX + 75;
        const statY = this.hudStatsY + 40;
        const statYGap = 48;
        let gapModifier = 0;
        let textColor = "";
        let valueSign = "";
        const ctxs = document.getElementById('gameWorld').getContext('2d');

        switch (statName) {
            case 'movementSpeed':
                gapModifier = 0;
                break;
            case 'fireRate':
                gapModifier = 1;
                break;
            case 'damage':
                gapModifier = 2;
                break;
            case 'range':
                gapModifier = 3;
                break;
            case 'shotSpeed':
                gapModifier = 4;
                break;
            case 'luck':
                gapModifier = 5;
                break;
            case 'devilChance':
                gapModifier = 6;
                break;
            case 'angelChance':
                gapModifier = 7;
                break;
            case 'planetariumChance':
                gapModifier = 8;
                break;

        }

        if (value >= 0) {
            textColor = "Green";
            valueSign = "+";
        } else {
            textColor = "Red";
            valueSign = "-";
        }

        ctxs.fillStyle = textColor;
        ctxs.fillText((valueSign + value), statX + 30, statY + (statYGap * gapModifier));
    }

    drawDeathScreen(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/death_portraits.png"), 200, 7, 217, 252, this.x + 350, this.y + 100, 800, 800);
    }

    drawMinimap(ctx) {

    }

    drawItemPickupBanner(ctx, itemName, itemDesc) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/effect_streak.png"), this.x + 400, this.y + 200, 650, 250)
        ctx.fontSize = "200pt";
        ctx.fillText(itemName, this.x + 675, this.y + 300);
        ctx.fontSize = "100pt";
        ctx.fillText(itemDesc, this.x + 575, this.y + 330)
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

        // this.drawItemPickupBanner(ctx, "Synthoil", "Damage and Health up")

        if (!this.game.camera.title && !this.game.camera.credits && this.game.camera.gameOver && !this.game.camera.win) {
            this.tempCount += 1*this.game.clockTick;

            if (this.tempCount < 2) {

            } else {
                this.drawDeathScreen(ctx);
            }
        }
        if (!this.game.camera.title && !this.game.camera.credits && this.game.camera.gameOver && this.game.camera.win) {

            ctx.font = '50px Calibri';
            ctx.fillText("YOU WON! Press Shift to Restart", this.x + 400, this.y + 500);

        }


    };

}