class DeleteEntityPacket {
    constructor(net, data) {
        this.net = net;
        this._data = data;

        this.game = this.net.game;
        this.socket = this.net.socket;
    }
}

// Calling received packet
DeleteEntityPacket.prototype.CallReceived = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering game instance
    const game = _this.game;

    // Gathering socket
    const socket = _this.socket;

    // Gathering packet data
    const data = _this._data;

    // Checking is socket really open
    if (socket.readyState === socket.OPEN) {
        // Getting entity ID
        const id = typeof data[1] === "string" ? parseInt(data[1]) : data[1];

        // Gathering entity
        const entity = game.user.sEntities.find(e => e.eId === id);

        if (entity) {
            if (entity.eAlive) entity.eAlive = false;

            entity.updatePosition([0, 0, 0]);

            console.log("Entity removed", entity);

            game.user.sEntities.remove(entity);
        }
    }
};

export default DeleteEntityPacket;