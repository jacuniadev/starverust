/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game maintain code
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

// Game data
import GameVersion from "../../../shared/Version";
import User from "./data/User";

// Game controllers
import KeyboardController from "./controllers/keyboard";
import MouseController from "./controllers/mouse";

// Game rendering
import Renderer from "./canvas";

// Game event listeners
import Events from "./events";
import Networking from "./networking";

// Embedded modules
import Polyfills from "../polyfills";

class Game {
    constructor(canvasElement) {
        // Checking if providen element is "<canvas>"
        if (!canvasElement || canvasElement.constructor !== HTMLCanvasElement)
            return;

        // Game data
        this.game_version   = GameVersion; // Game version

        // Canvas element
        this.can        = canvasElement;
        this.can_mid    = { middleX: 0, middleY: 0 }; // Canvas middle point
        this.con        = this.can.getContext("2d"); // Canvas rendering context
        
        // Initializing game controllers
        this.controllers = {
            mouse: new MouseController(this), // Mouse controller
            kb: new KeyboardController(this) // Keyboard controller
        };

        // Initializing user modules
        this.user           = new User(this); // User data
        
        // Initializing networking module
        this.networking     = new Networking(this); // Networking
        
        // Initializing embedded modules
        this.polyfills  = new Polyfills(this.con);

        // Initializing game modules
        this.renderer   = new Renderer(this);

        // Event listeners 
        this.events = new Events(this); 

        // Drawing on game initialize
        this.renderer.render(0);

        // Resizing canvas on game initialize by renderer module
        this.renderer._resize();
    }
}

// Drawing whole game stage
Game.prototype.render = function(delta, timestamp) {
    const _this = this; // That seem work for use this object in a event listener

    // Drawing & updating entities
    const entities = _this.user.sEntities,
        entities_length = entities.length;

    for (let index = 0; index < entities_length; index++) {
        const entity = entities[index];

        if (entity) {
            // Update
            if (entity.update) entity.update(delta, timestamp);

            // Render
            if (entity.render) entity.render(delta, timestamp);
        }
    }
};

export default Game;