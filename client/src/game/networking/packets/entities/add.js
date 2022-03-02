import Entities from "../../../../../../shared/entities";
import Player from "../../../entities/Player";

class AddEntityPacket {
    constructor(net, data) {
        this.net = net;
        this._data = data;

        this.game = this.net.game;
        this.socket = this.net.socket;

        this.PCK_HEADER_START = 1;
    }
}

// Calling received packet
AddEntityPacket.prototype.CallReceived = function() {
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
                // Entity instance
                let entity;

                // Gathering entity id and type
                const pid = d[DATA_VERIFY_COUNT++],
                    type = d[DATA_VERIFY_COUNT++];

                // Checking entity type
                switch (type) {
                    case Entities.PLAYER: {
                        entity = new Player(game, pid, null);

                        console.log("Player joined");
                        break;
                    }
                    default: {
                        console.log("Unknown entity type", type);
                        break;
                    }
                }

                // Position index offset 
                const POS_OFFSET_ID = DATA_VERIFY_COUNT++;

                // Gathering entity position
                const posX = d[POS_OFFSET_ID][0],
                    posY = d[POS_OFFSET_ID][1];

                // Gathering entity angle
                const angle = d[DATA_VERIFY_COUNT++];

                if (entity) {
                    // Set entity position & angle
                    entity.updatePosition([posX, posY, angle]);
                    
                    // Set entity alive
                    if (!entity.eAlive) entity.eAlive = true;

                    // Push entity to game
                    game.user.sEntities.push(entity);
                }
            }
        }
    }
};

export default AddEntityPacket;