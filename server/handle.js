// Node modules
const msgpack = require("msgpack-lite");

// Our modules
const Packets = require("../shared/networking/packets");
const Entities = require("../shared/entities");

// Entities
const PlayerEntity = require("./entities/Player");
const ticks = require("../shared/gameserver/ticks");

class Client {
    constructor(id = -1, game, socket) {
        // Game server instance
        this.game = game;
        
        // Client init data & socket
        this.id = id;
        this.socket = socket;

        // Client data
        this.score = 0;
        this.nickname = null;
        this.handshaked = false;
        this.connected = Date.now();

        // Creating player entity
        this.entity = new PlayerEntity(this.game, this.socket, this);
        
        // Setting entity data
        this.entity.angle = Math.floor(Math.random() * 360);
        this.entity.position.x = Math.floor(Math.random() * 1000);
        this.entity.position.y = Math.floor(Math.random() * 1000);
        
        // Adding player to game
        this.game.add(this.entity);

        // Client socket events
        this.socket.addListener("close", this._close.bind(this));
        this.socket.addListener("message", this.message.bind(this));
    }

    _close() {
        this.game.disconnect(this);
    }
};

// Sending message through message pack that encodes to binary
Client.prototype.send = function(message) {
    const encoded = msgpack.encode(message);

    if (this.socket) this.socket.send(encoded);
};

// Gathering client ID
Client.prototype.getId = function() {
    return this.id !== -1 ? this.id : -1;
};

// Gathering client entity
Client.prototype.getPlayerEntity = function() {
    if (this.entity)
        return this.entity;

    return undefined;
};

// Client socket message gather
Client.prototype.message = function(message) {
    message = message.toString();

    // If message is a string
    if (typeof message === "string") {
        let json;

        // Parse message to JSON
        try {
            json = JSON.parse(message);
        } catch (e) {
            console.log("Client handler: Failed to parse JSON:", json);

            return;
        }

        // If header is string 
        if (typeof json[0] === "string") {
            // If client is not handshaked
            if (!this.handshaked) {
                const [nickname, version] = json;

                if (version !== this.game.required_ver) {
                    console.log("client has too", version >= this.game.required_ver ? "newest" : "oldest", "version");
                    this.socket.close();

                    return;
                }

                const temp_players = []; // Temporary player list

                this.nickname = new Buffer(encodeURIComponent((nickname === null || nickname === "") ? `Player #${this.getId()}` : nickname)).toString("base64"); // Setting nickname from header

                // Get all entities
                this.game.entities.forEach(entity => {
                    // Ignoring other entities than only player entity
                    if (entity.type === Entities.PLAYER) {
                        // If entity owning client data
                        if (entity.client) {
                            // Preparing player data
                            const player_data =
                            [
                                entity.client.id, // Player ID
                                entity.client.nickname, // Player nickname
                                entity.client.score
                            ];

                            // Pushing players datas
                            temp_players.push(player_data);
                        }
                    }
                });

                // Creating packet
                const packet = [
                    Packets.HANDSHAKED_INFO, // Packet header
                    [ // Packet info  
                        this.id, // Client ID
                        [ this.entity.position.x, this.entity.position.y, this.entity.angle ], // Entity position & angle
                        temp_players // Player list
                    ]
                ];

                // Sending packet
                this.send(packet);

                // Setting client as handshaked
                this.handshaked = true;
            }
        } else if (typeof json[0] === "number") {
            const player = this.getPlayerEntity();

            switch (json[0]) {
                case Packets.UPDATE_DIRECTION: {
                    player.setDirectionState(json[1]);
                    break;
                }
                case Packets.UPDATE_ANGLE: {
                    player.setAngle(json[1]);
                    break;
                }
            }
        }
    }
};

module.exports = Client;