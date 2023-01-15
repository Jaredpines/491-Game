const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./01_basement_basic.png")
ASSET_MANAGER.queueDownload("./controls.png")
ASSET_MANAGER.queueDownload("./crying_isaac.png")
ASSET_MANAGER.queueDownload("./isaac_idle.png")
ASSET_MANAGER.queueDownload("./w.png")
ASSET_MANAGER.queueDownload("./a.png")
ASSET_MANAGER.queueDownload("./s.png")
ASSET_MANAGER.queueDownload("./d.png")
ASSET_MANAGER.queueDownload("./up.png")
ASSET_MANAGER.queueDownload("./down.png")
ASSET_MANAGER.queueDownload("./left.png")
ASSET_MANAGER.queueDownload("./right.png")
ASSET_MANAGER.queueDownload("./e.png")
ASSET_MANAGER.queueDownload("./space.png")
ASSET_MANAGER.queueDownload("./down_shot_open.png")
ASSET_MANAGER.queueDownload("./down_shot_close.png")
ASSET_MANAGER.queueDownload("./isaac.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Isaac(gameEngine));
	gameEngine.addEntity(new Room());
	

	gameEngine.init(ctx);

	gameEngine.start();
});
