const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./res/hud_stats.png");
ASSET_MANAGER.queueDownload("./res/hud_pickups.png");
ASSET_MANAGER.queueDownload("./res/title_menu_sprites.png")
ASSET_MANAGER.queueDownload("./res/01_basement_basic.png")
ASSET_MANAGER.queueDownload("./res/controls.png")
ASSET_MANAGER.queueDownload("./res/crying_isaac.png")
ASSET_MANAGER.queueDownload("./res/isaac_idle.png")
ASSET_MANAGER.queueDownload("./res/w.png")
ASSET_MANAGER.queueDownload("./res/a.png")
ASSET_MANAGER.queueDownload("./res/s.png")
ASSET_MANAGER.queueDownload("./res/d.png")
ASSET_MANAGER.queueDownload("./res/up.png")
ASSET_MANAGER.queueDownload("./res/down.png")
ASSET_MANAGER.queueDownload("./res/left.png")
ASSET_MANAGER.queueDownload("./res/right.png")
ASSET_MANAGER.queueDownload("./res/e.png")
ASSET_MANAGER.queueDownload("./res/space.png")
ASSET_MANAGER.queueDownload("./res/door_frame.png")
ASSET_MANAGER.queueDownload("./res/door_frame_left.png")
ASSET_MANAGER.queueDownload("./res/door_way.png")
ASSET_MANAGER.queueDownload("./res/door_way_left.png")
ASSET_MANAGER.queueDownload("./res/up_shot_open.png")
ASSET_MANAGER.queueDownload("./res/up_shot_close.png")
ASSET_MANAGER.queueDownload("./res/left_shot_open.png")
ASSET_MANAGER.queueDownload("./res/left_shot_close.png")
ASSET_MANAGER.queueDownload("./res/right_shot_open.png")
ASSET_MANAGER.queueDownload("./res/right_shot_close.png")
ASSET_MANAGER.queueDownload("./res/down_shot_open.png")
ASSET_MANAGER.queueDownload("./res/down_shot_close.png")
ASSET_MANAGER.queueDownload("./res/normal_tears.png")
ASSET_MANAGER.queueDownload("./res/tear_animation_three.png")
ASSET_MANAGER.queueDownload("./res/tear_animation_two.png")
ASSET_MANAGER.queueDownload("./res/tear_animation_one.png")
ASSET_MANAGER.queueDownload("./res/isaac.png")
ASSET_MANAGER.queueDownload("./res/monster_fly.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");


	const gameEngine = new GameEngine();


	gameEngine.addEntity(new SceneManager(gameEngine));


	gameEngine.init(ctx);

	gameEngine.start();

});
