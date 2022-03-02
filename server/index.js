// Node modules
const WebSocket = require("ws");

// Game data
const VERSION = require("../shared/Version");

// Networking packets
const packets = require("../shared/networking/packets");
const Handler = require("./handle");

const DATA = {
    VERSION,
    TICK_COUNT: 1000 / 10,
    MAX_PLAYERS: 200
};

let ENTITY_ID_COUNTER = 0;
let CLIENT_ID_COUNTER = 1;

class GameServer {
    constructor() {
        // Game data
        this.required_ver       = DATA.VERSION;

        this.clients            = new Map();
        this._client_id         = [];

        this.entities           = new Map();
        this._entity_id         = [];

        this.destroyed_entities = [];

        // Setting up "game loop"
        this.loop = setInterval(() => {
            this.update(DATA.TICK_COUNT, Date.now());
        }, DATA.TICK_COUNT);
    }

    add(entity) {
        if (entity.id !== -1) throw Error("Entity already in game");

        const id = this._entity_id.length > 0 ? this._entity_id.pop() : ENTITY_ID_COUNTER++;
    
        if (entity) {
            this.entities.set(id, entity);
            entity.setId(id);
    
            this.clients.forEach(client => {
                const packet = [
                    packets.ADD_ENTITY,
                    [
                        entity.client.id,
                        entity.type,
                        [ entity.position.x, entity.position.y ],
                        entity.angle,
                    ]
                ];

                if (client.handshaked) client.send(packet);
            });
        }
    }

    remove(entity) {
        if (entity.inGame() && !entity.destroy) {
            entity.setDestroyState(true);
    
            this.destroyed_entities.push(entity);
    
            this.clients.forEach(client => {
                const packet = [packets.REMOVE_ENTITY, entity.client.id];

                if (client.handshaked) client.send(packet);
            });
        }
    }

    pruneDestroyed() {
        this.destroyed_entities.forEach(entity => this._remove(entity));
        this.destroyed_entities.length = 0;
    }

    _remove(entity) {
        const id = entity.id;

        if (id === -1) throw Error("Entity not in-game");
    
        this.entities.delete(id);
        this._entity_id.push(id);
    
        entity.setId(-1);
        entity.setDestroyState(false);
    }

    join(socket) {
        console.log("Joined");

        const id = this._client_id.length > 0 ? this._client_id.pop() : CLIENT_ID_COUNTER++;
    
        const client = new Handler(id, this, socket);
        this.clients.set(id, client);
    
        // Add entities packet
        const packet = [packets.ADD_ENTITY];
    
        this.entities.forEach(entity => {
            if (!entity.destroy) {
                packet.push(
                    [
                        entity.client.id,
                        entity.type,
                        [ entity.position.x, entity.position.y ],
                        entity.angle,
                    ]
                );
            }
        });

        if (client.handshaked) client.send(packet);
    }

    disconnect(client) {
        const id = client.id;

        this.clients.delete(id);
        this._client_id.push(id);
    
        const player = client.getPlayerEntity();
    
        if (player && player.client.id !== -1) {
            this.remove(player);
        }
    }

    update(delta, timestamp) {
        // Update entities
        this.entities.forEach(entity => entity.update(delta, timestamp));

        // Synchronizing clients
        this.clients.forEach(client => {
            const packet = [packets.UPDATE_ENTITIES],
                entities = [];

            this.entities.forEach(entity => {
                // Anti-handshake AFK
                if (entity.client) {
                    if (!entity.client.handshaked) {
                        const limit = 30 * 1000;
                        const remained = timestamp - entity.client.connected >= limit;
                        
                        if (remained) {
                            entity.client.socket.close();

                            console.log("kicked client for afk");
                        }
                    }
                }

                // Updating
                if (!entity.destroy) {
                    // entity.position.x += 20.1;
                    // entity.position.y += 0.2;

                    entities.push(
                        [
                            entity.client.id,
                            entity.type,
                            [ entity.position.x, entity.position.y ],
                            entity.angle,
                        ]
                    );
                }
            });

            packet[1] = [entities];

            if (client.handshaked) client.send(packet);
        });

        // Prune destroyed entities
        this.pruneDestroyed();
    }
}

const wss = new WebSocket.Server({ port: 9000 });
wss.on("listening", () => {
    const game = new GameServer();

    console.log("Game server")
    wss.on("connection", socket => game.join(socket));
})