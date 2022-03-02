// Key words & numbers due to obfuscator we use
const K_ = {
    UPWORD: "u" + "p",
    UPKEY: 1,
    DOWNWORD: "d" + "o" + "w" + "n",
    DOWNKEY: 4,
    LEFTWORD: "l" + "e" + "f" + "t",
    LEFTKEY: 8,
    RIGHTWORD: "r" + "i" + "g" + "h" + "t",
    RIGHTKEY: 2
};

/////// to prevent obfuscating keys ///////
function fixKWordsNumbers(k) { return Object.keys(k).length ^ 16; }
const c = parseInt(fixKWordsNumbers(K_));
/////// to prevent obfuscating keys /////// 

import Packets from "../../../../../shared/networking/packets";

class MovePacket {
    constructor(game) {
        this._preven_key = c;
        this.game = game;

        this.currentKey = 0;
        this.previousKey = 0;
    }
}

// Calling packet to send (w/ arguments)
MovePacket.prototype.CallSend = function(game) {
    const _this = this; // That seem work for use this object in a event listener

    // Setting key states
    if (game.user.uControls[K_.UPWORD]) _this.currentKey |= K_.UPKEY; else _this.currentKey &= ~K_.UPKEY;
    if (game.user.uControls[K_.DOWNWORD]) _this.currentKey |= K_.DOWNKEY; else _this.currentKey &= ~K_.DOWNKEY;
    if (game.user.uControls[K_.LEFTWORD]) _this.currentKey |= K_.LEFTKEY; else _this.currentKey &= ~K_.LEFTKEY;
    if (game.user.uControls[K_.RIGHTWORD]) _this.currentKey |= K_.RIGHTKEY; else _this.currentKey &= ~K_.RIGHTKEY;

    // If socket is connected
    if (game.networking.socket.readyState === game.networking.socket.OPEN) {
        // Checking if currently clicked key is not the same
        if (_this.currentKey !== _this.previousKey) {
            _this.previousKey = _this.currentKey;

            // Preparing packet
            const packet = JSON.stringify([Packets.UPDATE_DIRECTION, _this.currentKey]);

            // Send packet
            game.networking.socket.send(packet);
        }
    }
};

export default MovePacket;