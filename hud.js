class Hud {
    constructor(game, isaac) {
        this.game = game;
        this.character = isaac;

        this.hudStatsX = 0
        this.hudStatsY = 330
        this.hudPickupsX = 20;
        this.hudPickupsY = 170;
    }

    update(ctx) {

    };



    draw(ctx) {
        ctx.font = '25px Calibri';
        ctx.fontSize = "100pt";
        ctx.fillStyle = "White";

        //hud pickups
        const pickupX = this.hudPickupsX + 50;
        const pickupY = this.hudPickupsY + 30;
        const pickupYGap = 48;
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 4, 4, 9, 11, this.hudPickupsX, this.hudPickupsY, 40, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 20, 2, 9, 12, this.hudPickupsX, this.hudPickupsY + 45, 40, 50);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/hud_pickups.png"), 1, 16, 13, 13, this.hudPickupsX-10, this.hudPickupsY + 90, 50, 50);
        ctx.fillText(this.character.coinPickup, pickupX, pickupY);
        ctx.fillText(this.character.keyPickup, pickupX, pickupY + pickupYGap);
        ctx.fillText(this.character.bombPickup, pickupX, pickupY + (pickupYGap * 2));

        //hud stats
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


    };

}