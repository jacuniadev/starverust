import Player from "../../entities/Player";

class HandshakePacket {
    constructor(net, data) {
        this.net = net;
        this._data = data;

        this.game = this.net.game;
        this.socket = this.net.socket;

        this.PCK_HEADER_START = 1;
    }
}

// Calling packet to send (w/ arguments)
HandshakePacket.prototype.CallSend = function(nickname = "") {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering game instance
    const game = _this.game;

    // Gathering socket
    const socket = _this.socket;

    // If socket is connected
    if (socket.readyState === socket.OPEN) {
        // Preparing packet
        const packet = JSON.stringify([nickname, game.game_version]);

        // Send packet
        socket.send(packet);
    }
};

// Calling received packet
HandshakePacket.prototype.CallReceived = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Counters
    let DATA_VERIFY_COUNT = 0, DATA_GATHER_COUNT = 0;

    // Gathering game instance
    const game = _this.game;

    // Gathering socket
    const socket = _this.socket;

    // If socket is connected
    if (socket.readyState === socket.OPEN) {
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
                const id = d[DATA_VERIFY_COUNT++], // Player ID
                    position_data = d[DATA_VERIFY_COUNT++], // Player position & angle
                    current_players = d[DATA_VERIFY_COUNT++]; // Current players list

                // Setting local user id
                if (game.user.uId !== id) game.user.uId = id;

                // Parse received player list
                if (current_players) {
                    // Getting players list length
                    const current_players_length = current_players.length;

                    // Parse players from player list
                    for (let pindex = 0; pindex < current_players_length; pindex++) {
                        // Data per player
                        const data = current_players[pindex];

                        if (data) {
                            // Gathering player data
                            const pid = data[0], // Player ID
                                nickname = decodeURIComponent(atob(data[1])), // Player nickname
                                score = data[2];

                            // Make player entity
                            const entity = new Player(game, pid, nickname);

                            if (entity) {
                                // If we found out our player entity, set it
                                if (game.user.uId === pid) {
                                    // Gathering our entity position & angle
                                    const posX = position_data[0],
                                        posY = position_data[1],
                                        angle = position_data[2];

                                    game.user.uEntity = entity; // Setting user entity
                                    game.user.uScore = score; // Setting user score
                                    game.user.uAlive = true; // Setting user alive
                                    
                                    game.user.uEntity.updatePosition([posX, posY, angle]); // Setting user entity position
                                }

                                // Set entity data
                                if (!entity.eAlive) entity.eAlive = true; // Set entity alive
                                if (entity.pScore !== score) entity.pScore = score; // Set entity proper score
        
                                // Push player as entity
                                game.user.sEntities.push(entity);
                            }
                        }
                    }
                }
            }
        }
    }
};

export default HandshakePacket;