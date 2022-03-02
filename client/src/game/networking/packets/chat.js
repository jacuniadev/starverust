import Entities from "../../../../../shared/entities";
import Packets from "../../../../../shared/networking/packets";

class ChatPacket {
    constructor(net, data) {
        this.net = net;
        this._data = data;

        this.game = this.net.game;
        this.socket = this.net.socket;

        this.PCK_HEADER_START = 1;
    }
}

// Calling packet to send (w/ arguments)
ChatPacket.prototype.CallSend = function(message) {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering game instance
    const game = _this.game;

    // Gathering socket
    const socket = _this.socket;

    // If socket is connected
    if (socket.readyState === socket.OPEN) {
        // Find local player and push him a message
        const player = game.user.sEntities.find(p => p.eType === Entities.PLAYER && p.eId === game.user.uId);

        if (player) {
            // Push a local player message to draw
            player.pMessages._messages.push(message);

            // Preparing packet
            const packet = JSON.stringify([Packets.CHAT, message]);

            // Send packet
            socket.send(packet);
        }
    }
};

// Calling received packet
ChatPacket.prototype.CallReceived = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Counters
    let DATA_VERIFY_COUNT = 0;

    // Gathering game instance
    const game = _this.game;

    // Gathering packet data
    const data = _this._data,
        data_length = _this._data.length,
        packet_header = _this.PCK_HEADER_START;

    // We don't need packet ID, we're about to ignoring "index = 0"
    for (let index = packet_header; index < data_length; index++) {
        const d = data[index];

        // Verifying packet data (it must be array)
        if (d) {
            // Receiving data
            const PID_INDEX = DATA_VERIFY_COUNT++;

            const pid = typeof d[PID_INDEX] === "string" ? parseInt(d[PID_INDEX]) : d[PID_INDEX], // Player ID
                message = decodeURIComponent(atob(d[DATA_VERIFY_COUNT++])); // Player message

            // Finding out player and pushing them a message
            const player = game.user.sEntities.find(p => p.eType === Entities.PLAYER && p.eId === pid);

            if (player) player.pMessages._messages.push(message);
        }
    }
};

export default ChatPacket;