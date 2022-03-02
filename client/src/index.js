/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Initialize game code
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

// Stylesheet
import "./assets/stylesheet/normalize.css";
import "./assets/stylesheet/base.css";

// All-in-one game code
import Game from "./game";

// Game instance
let game;

// Find canvas with identity to initialize game drawing
const canvas = document.getElementById("game") || document.body.querySelector("#game");

// On game page load, initialize game with canvas instance
window.onload = function() {
    // If game instance isn't initialized and we've found canvas instance, load it
    if (!game && canvas) {
        game = new Game(canvas);
    }
};