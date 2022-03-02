class UpdateEntitiesPacket {
    constructor(net, data) {
        this.net = net;
        this._data = data;

        this.game = this.net.game;
        this.socket = this.net.socket;

        this.PCK_HEADER_START = 1;
    }
}

// Calling received packet
UpdateEntitiesPacket.prototype.CallReceived = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Counters
    let DATA_VERIFY_COUNT = 0;

    // Gathering game instance
    const game = _this.game;

    // Gathering socket
    const socket = _this.socket;

    // Gathering packet data
    const data = _this._data,
        data_length = _this._data.length,
        packet_header = _this.PCK_HEADER_START;

    // Checking is socket really open
    if (socket.readyState === socket.OPEN) {
        // We don't need packet ID, we're about to ignoring "index = 0"
        for (let index = packet_header; index < data_length; index++) {
            const d = data[index];

            // Verifying packet data we receive
            if (d) {
                const entities = d[DATA_VERIFY_COUNT++];

                // Gathering entities
                if (entities) {
                    const len = entities.length;

                    // Receiving all entities and entities data
                    for (let i = 0; i < len; i++) {
                        const e = entities[i];

                        if (e) {
                            const id = e[0], // Entity ID
                                type = e[1], // Entity type
                                posX = e[2][0], // Entity position X
                                posY = e[2][1], // Entity position Y
                                angle = e[3]; // Entity angle

                            // Finding a entity made by handshake or by joining game by his ID
                            const entity = game.user.sEntities.find(e => e.eId === id);
                            
                            if (entity) {
                                // If entity & id depends on our data, focus n stuff
                                if (game.user.uId === id && game.user.uEntity === entity) {
                                    
                                }

                                // Update the whole entity position and angle
                                entity.updatePosition([posX, posY, angle]);
                            }
                        }
                    }
                }
            }
        }
    }
};

export default UpdateEntitiesPacket;