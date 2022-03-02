/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game controller: Mouse
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import AnglePacket from "../networking/packets/angle";

class MouseController {
    constructor(gameInstance) {
        // Game data
        this.game = gameInstance; // Game instance
        this.socket_packet = new AnglePacket(this.game); // Packet to manage local player angle

        // Current mouse position
        this.mPosition = {
            cmX: 0,
            cmY: 0
        };
    }
}

MouseController.prototype.getMousePosition = function(event) {
    const _this = this; // that seem work for use this object in a event listener

    // getting bound rect in canvas
    const rect = _this.game.can.getBoundingClientRect();

    // returning mouse position
    return {
        cmX: event.clientX - rect.left || 0,
        cmY: event.clientY - rect.top || 0
    };
};

MouseController.prototype._mousemove = function(event) {
    const _this = this; // that seem work for use this object in a event listener

    // setting user mouse position
    _this.mPosition = _this.getMousePosition(event);
    
    // setting user angle
    const angle = Math.atan2(
        _this.game.user.uCamera.cameraY + _this.game.user.uEntity.ePosition.y - _this.mPosition.cmY,
        _this.game.user.uCamera.cameraX + _this.game.user.uEntity.ePosition.x - _this.mPosition.cmX,
    );

    _this.game.user.uAngle = angle.map(-Math.PI, Math.PI, 0, 360) * Math.PI / 180;

    // updating that angle to socket
    if (_this.socket_packet) _this.socket_packet.CallSend();
};

export default MouseController;