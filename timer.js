// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Timer {
    constructor() {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimestamp = 0;
        this.timer = 0
        this.started = false;
    };

    tick() {
        const current = Date.now();
        const delta = (current - this.lastTimestamp) / 1000;
        this.lastTimestamp = current;

        const gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;
        return gameDelta;
    };

    timerTick() {
        if (this.started) {
            const current = Date.now();
            const delta = (current - this.lastTimestamp) / 1000;
            this.lastTimestamp = current;

            const gameDelta = Math.min(delta, this.maxStep);
            this.timer -= gameDelta;
        }
    };

    set(frames) {
        this.timer = frames
    }

    cancel() {
        this.timer = 0
        this.started = false
    }


};
