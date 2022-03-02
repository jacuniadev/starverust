/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game controller: Keyboard
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import { lerp, lerpTheta } from "../animations/LinearInterpolation";

import TICKS from "../../../../shared/gameserver/ticks";
import Entities from "../../../../shared/entities";

class Entity {
    constructor
    (
        entityType      = Entities.NONE,
        entityId        = -1,
        entityPosition  = {x: 0, y: 0}, // {x: 0, y: 0} or other xD
        entityAngle     = 0,
        entityAction    = 0
    ) {
        // Private entity data
        this._entityInterpolation = {
            previousX: 0,
            currentX: 0,
            previousY: 0,
            currentX: 0,
            previousAngle: 0,
            currentAngle: 0,
            previousPacket: Date.now(),
            currentPacket: Date.now()
        };

        // Entity data
        this.eId        = entityId;
        this.eType      = entityType;
        this.ePosition  = entityPosition || {x: 0, y: 0};
        this.eAngle     = entityAngle;

        // Entity details
        this.eAlive     = false;
        this.eAction    = entityAction;
    }
}

// Interpolation update
Entity.prototype.update = function(_, timestamp) {
    const _this = this;

    const updateTime = timestamp - TICKS;

    const previousPacket = _this._entityInterpolation.previousPacket,
        currentPacket = _this._entityInterpolation.currentPacket;

    const ratio = (updateTime - previousPacket) / (currentPacket - previousPacket);

    _this.eAngle = lerpTheta(_this._entityInterpolation.previousAngle, _this._entityInterpolation.currentAngle, ratio);
    _this.ePosition.x = lerp(_this._entityInterpolation.previousX, _this._entityInterpolation.currentX, ratio);
    _this.ePosition.y = lerp(_this._entityInterpolation.previousY, _this._entityInterpolation.currentY, ratio);
};

// Updating position
Entity.prototype.updatePosition = function(pos) {
    const _this = this;

    // If previous packet timestamp seems to be equaling with current then we "teleport" it i think
    if (_this._entityInterpolation.previousPacket === _this._entityInterpolation.currentPacket) {
        // Update entity position & angle
        _this.ePosition.x = typeof pos[0]   === "string" ? parseInt(pos[0]) : pos[0];
        _this.ePosition.y = typeof pos[1]   === "string" ? parseInt(pos[1]) : pos[1];
        _this.eAngle = typeof pos[2]        === "string" ? parseFloat(pos[2]) : pos[2];
    }

    // Set current interpolation data to previous
    _this._entityInterpolation.previousX        = _this._entityInterpolation.currentX;
    _this._entityInterpolation.previousY        = _this._entityInterpolation.currentY;
    _this._entityInterpolation.previousAngle    = _this._entityInterpolation.currentAngle;
    _this._entityInterpolation.previousPacket   = _this._entityInterpolation.currentPacket;

    // Set new interpolation data
    _this._entityInterpolation.currentX         = typeof pos[0] === "string" ? parseInt(pos[0]) : pos[0];
    _this._entityInterpolation.currentY         = typeof pos[1] === "string" ? parseInt(pos[1]) : pos[1];
    _this._entityInterpolation.currentAngle     = typeof pos[2] === "string" ? parseFloat(pos[2]) : pos[2];
    _this._entityInterpolation.currentPacket    = Date.now();
};

export default Entity;