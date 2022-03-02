/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game controller: Keyboard
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import MovePacket from "../networking/packets/move";

const KEY_DIRECTION_CODES = JSON.parse('{"key_w":[87,"up"],"key_s":[65,"down"],"key_a":[83,"left"],"key_d":[68,"right"]}');
const ARROW_DIRECTION_CODES = JSON.parse('{"arrow_up":[38,"up"],"arrow_down":[40,"down"],"arrow_left":[37,"left"],"arrow_right":[39,"right"]}')

class KeyboardController {
    constructor (gameInstance) {
        // Game instance
        this.game = gameInstance;

        // Move packet
        this.packet = new MovePacket(this.game.networking, undefined);
    }
}

KeyboardController.prototype._process = function(event) {
    const _this = this; // That seem work for use this object in a event listener

    /// If user are not alive or they waiting for connection
    /// we didn't see sense to allow them use control from keyboard
    if (!_this.game.user.uAlive || _this.game.user.uConnecting) return;

    /// Keyboard key names
    let key     = event.code.toLowerCase().split("key")[1]   || null,
        arrow   = event.code.toLowerCase().split("arrow")[1] || null;
    
    /// Get key/arrow string for direction codes
    key     = typeof key   === "string" ? ("key_" + key)     : null;
    arrow   = typeof arrow === "string" ? ("arrow_" + arrow) : null;

    /// Is any keyboard key up?
    const state = event.type === "keyup" ? false : true;

    /// Detect control from normal keyboard key
    if (key in KEY_DIRECTION_CODES) {
        const [keycode, direction] = KEY_DIRECTION_CODES[key];

        // Set user control with direction
        if (direction in _this.game.user.uControls) _this.game.user.uControls[direction] = state;
    }

    /// Detect control from arrow keyboard key
    if (arrow in ARROW_DIRECTION_CODES) {
        const [keycode, direction] = ARROW_DIRECTION_CODES[arrow];

        // Set user control with direction
        if (direction in _this.game.user.uControls) _this.game.user.uControls[direction] = state;
    }

    /// Packet processing to socket
    if (_this.packet) _this.packet.CallSend(_this.game);
};

export default KeyboardController;