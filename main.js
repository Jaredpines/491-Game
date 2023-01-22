const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./res/hud_stats.png");
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
ASSET_MANAGER.queueDownload("./res/down_shot_open.png")
ASSET_MANAGER.queueDownload("./res/down_shot_close.png")
ASSET_MANAGER.queueDownload("./res/isaac.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");


	const gameEngine = new GameEngine();


	//gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.addEntity(new Isaac(gameEngine));
	gameEngine.addEntity(new Controls(0,0,gameEngine));
	gameEngine.addEntity(new Room(0,0,gameEngine));
	gameEngine.addEntity(new Room(1471,0,gameEngine));


	gameEngine.init(ctx);

	gameEngine.start();

});
