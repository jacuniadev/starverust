/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Networking (communication between server)
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import Socket from "./socket";

class Networking {
    constructor(gameInstance) {
        // Game data
        this.game = gameInstance; // Game instance

        // Reconnect handler data
        this.reconnect_number = 0;
        this.reconnect_handler = undefined;

        // Socket data
        this.socket = undefined; // Socket instance

        this.connect();
    }
}

Networking.prototype.connect = function(data) {
    const _this = this; // That seem work for use this object in a event listener
  
    const SOCKET_CLOSED = _this.socket ? _this.socket.readyState === _this.socket.CLOSING || _this.socket.readyState === _this.socket.CLOSED : false;

    console.log("socket closed", SOCKET_CLOSED);
    
    if (!_this.socket || SOCKET_CLOSED) {
        if(!_this.game.user.uConnecting) _this.game.user.uConnecting = true;

        _this.socket = new Socket(_this, "localhost:9000");
    }
};

export default Networking;