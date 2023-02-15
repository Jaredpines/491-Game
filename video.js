class Video {
    constructor(game, isaac) {

        this.winVideo = document.getElementById('winVid');
        this.canvas = document.getElementById('gameWorld');
        this.ctx = this.canvas.getContext('2d');

        this.winVideo.addEventListener('loadedmetadata', function() {
            this.video.videoWidth = this.canvas.width;
            this.video.videoHeight = this.canvas.height;
        });

        this.winVideo.addEventListener('play', function () {
            var $this = this;
            (function loop() {
                if (!$this.paused && !$this.ended) {
                    this.ctx.drawImage($this, 0, 0);
                    setTimeout(loop, 1000/30)
                }
            })();
        });

    }

}