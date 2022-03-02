const Entities = require("../../shared/entities");

class Entity {
    constructor(game, type = Entities.NONE, position = { x: 0, y: 0 }, angle = 0) {
        this.id = -1;
        this.game = game;
        this.type = type;
        this.angle = angle;
        this.position = position;

        this.destroy = false;
        this.direction_state = 0;
    }

    inGame() {
        return this.id !== -1;
    }

    setDestroyState(state) {
        if (typeof state !== "boolean") {
            switch (typeof state) {
                case "string":
                case "number":
                    state = Boolean(state);
                    break;
                default:
                    if (typeof state !== "boolean") throw Error("Can't parse state");
            }
        }

        this.destroy = state;
    }

    setDirectionState(state) {
        if (this.type === Entities.PLAYER) this.direction_state = state;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    setId(id) {
        switch (typeof id) {
            case "string":
                id = parseInt(id);
                break;
            default:
                if (typeof id !== "number") throw Error("Can't parse id");
        }

        this.id = id;
    }

    update(delta, timestamp) {
        switch (this.type) {
            // Player
            case Entities.PLAYER:
            {
                const vector = [0, 0],
                    direction_state = this.direction_state;

                if (direction_state & 1) vector[1]--;
                if (direction_state & 8) vector[0]--;

                if (direction_state & 4) vector[1]++;
                if (direction_state & 2) vector[0]++;

                this.position.x += vector[0] * delta / 4;
                this.position.y += vector[1] * delta / 4;
                break;
            }

        }
    }
}

module.exports = Entity;