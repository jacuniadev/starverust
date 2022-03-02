/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game user data
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import Camera from "./Camera";

class User {
    constructor(gameInstance) {
        // Game data
        this.game          = gameInstance; // Game instance

        // Server data
        this.sMap        = [];    // Server map
        this.sEntities   = [];    // Server entities (mobs, players and more)

        // User data
        this.uId         = -1;       // Game user ID
        this.uAlive      = false;    // Is user alive in-game
        this.uAngle      = 0;        // Game user angle
        this.uScore      = 0;        // Game user score
        this.uEntity     = null;     // Game user entity
        this.uCamera     = new Camera(this.game); // Game user camera
        this.uControls   = JSON.parse('{"up":false,"down":false,"left":false,"right":false}'); // Game user controls
        this.uConnecting = false;    // Is user connecting to game server
    }
}

export default User;