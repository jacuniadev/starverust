const Entities = require("../../shared/entities");

const Entity = require("./");

class Player extends Entity {
    constructor(game, socket, client, id = -1) {
        super
        (
            game,
            Entities.PLAYER,
            {
                x: 0,
                y: 0
            },
            0
        );

        this.game = game;
        this.socket = socket;
        this.client = client;

        this.id = id;
    }
}

module.exports = Player;