import { lerp } from "../animations/LinearInterpolation";

class Camera {
    constructor(gameInstance) {
        this.game   = gameInstance;
        this.mouse  = this.game.controllers.mouse;

        this.cameraX = 0;
        this.cameraY = 0;
    }
}

Camera.prototype.update = function(x, y) {
    const _this = this;

    _this.cameraX = _this.game.can_mid.middleX - x + ((-_this.mouse.mPosition.cmX / 15));
    _this.cameraY = _this.game.can_mid.middleY - y + ((-_this.mouse.mPosition.cmY / 15));
};

export default Camera;