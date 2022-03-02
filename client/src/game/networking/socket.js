/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Networking (socket "private" subclass)
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import msgpack from "msgpack-lite";

// All packets identifiers
import Packets from "../../../../shared/networking/packets";

// Game packets
import ChatPacket from "./packets/chat";
import HandshakePacket from "./packets/handshake";
import UpdateEntitiesPacket from "./packets/entities/update";
import DeleteEntityPacket from "./packets/entities/delete";
import AddEntityPacket from "./packets/entities/add";

// Detect is client on unsecured or secured web protocol
// HTTP don't support WSS protocol sadly (https://stackoverflow.com/questions/26777177/qml-websocket-error-unsupported-websocket-scheme-http)
const protocol = location.protocol === "https:" ? "wss://" : "ws://";

class Socket extends WebSocket {
    constructor(networking, serverUrl) {
        super(protocol + serverUrl);

        // Networking instance is required to somehow communicate with game instance
        this.networking = networking;

        // Set type of binary data being received over the WebSocket connection
        this.binaryType = "arraybuffer";

        // Binding event listeners
        this.addEventListener("open", this._open.bind(this));
        this.addEventListener("close", this._close.bind(this));
        this.addEventListener("message", this._message.bind(this));
    }
}

// On socket connection open, send handshake info
Socket.prototype._open = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering networking instance
    const networking = _this.networking;

    // Checking if we have networking instance, because i need to communicate with game
    if (!networking || typeof networking === "undefined") return;

    // Checking if they surely 100% state is OPEN
    if (_this.readyState === _this.OPEN) {
        // Clearing reconnection handler
        if (networking.reconnect_handler && typeof networking.reconnect_handler !== "undefined") {
            networking.reconnect_number = 0;

            clearTimeout(networking.reconnect_handler);
        }

        // Setting in user data that we're not longer connecting
        if (networking.game.user.uConnecting) networking.game.user.uConnecting = false;

        // Sending handshake packet
        const handshake = new HandshakePacket(networking, undefined);

        if (handshake) handshake.CallSend("test");
    }
};

// On socket connection close
Socket.prototype._close = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering networking instance
    const networking = _this.networking;

    // Checking if we have networking instance, because i need to communicate with game
    if (!networking || typeof networking === "undefined") return;

    _this.removeEventListener("open", _this._open.bind(this));
    _this.removeEventListener("close", _this._close.bind(this));
    _this.removeEventListener("message", _this._message.bind(this));
};

// Receiving socket messages
Socket.prototype._message = function(message) {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering networking instance
    const networking = _this.networking;

    // Checking if we have networking instance, because i need to communicate with game
    if (!networking || typeof networking === "undefined") return;

    // Checking is user connected to server
    if (_this.readyState === _this.OPEN) {
        // Parsing messages received from server
        message = message.data;

        // STRING = JSON, OBJECT = BINARY/UINT AND MORE
        if (typeof message === "object") {
            let bin, packet;

            // Parsing packet
            try {
                bin = msgpack.decode(new Uint8Array(message));
            } catch (e) {
                throw e;
            }
            
            // Recognizing packet
            switch (bin[0]) {
                case Packets.CHAT: {
                    packet = new ChatPacket(networking, bin);
                    break;
                }
                case Packets.ADD_ENTITY: {
                    packet = new AddEntityPacket(networking, bin);
                    break;
                }
                case Packets.REMOVE_ENTITY: {
                    packet = new DeleteEntityPacket(networking, bin);
                    break;
                }
                case Packets.UPDATE_ENTITIES: {
                    packet = new UpdateEntitiesPacket(networking, bin);
                    break;
                }
                case Packets.HANDSHAKED_INFO: {
                    packet = new HandshakePacket(networking, bin);
                    break;
                }
                default: {
                    console.log(`undefined packet: ${JSON.stringify(bin)}`);
                    break;
                }
            }

            // Calling recognized packet
            if (packet && typeof packet !== "undefined") packet.CallReceived();
        } else {
            console.log(message);
        }
    }
};

export default Socket;