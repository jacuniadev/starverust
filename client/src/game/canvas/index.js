/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game maintain code
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import Sprites from "./sprites";

class CanvasRenderer {
    constructor(gameInstance) {
        // Game data
        this.game    = gameInstance; // Game instance
        this.sprites = new Sprites(); // Game sprites

        // CanvasRenderer data
        this.rScale   = 1; // Canvas scale (full HD (1920x1080))
        this.rOld     = 0; // Old delta timestamp
        this.rDel     = 0; // Delta
        this.rFont    = "Baloo Paaji"; // Default font

        // Canvas data
        this.cFont = `%size ${this.rFont}, Verdana, sans-serif`; // Font binding
    }
};

// Measuring text
CanvasRenderer.prototype.MeasureText = function(context, text, size = "20px") {
    const _this = this;

    context.font = _this.cFont.replace("%size", size);

    const measured = context.measureText(text);

    return measured;
};

// Drawing text
CanvasRenderer.prototype.DrawText = function(context, text, x, y, size = "20px", color = "white", centerBase = true, centerAlign = false) {
    const _this = this;

    if (!context || context.constructor !== CanvasRenderingContext2D) return;

    // Setting text to center if we want for it
    context.textAlign = centerAlign ? "center" : "start";
    context.textBaseline = centerBase ? "middle" : "alphabetic";


    // Drawing text
    context.fillStyle = color;
    
    // Setting font
    context.font = _this.cFont.replace("%size", size);

    context.fillText(text, x, y);
};

// Filling paths
CanvasRenderer.prototype.FillPath = function(context, fill, stroke, width) {
    if (!context || context.constructor !== CanvasRenderingContext2D) return;

    if (fill) {
    	context.fillStyle = fill;
		context.fill();
    }

    if (stroke) {
    	context.lineWidth = width;
		context.strokeStyle = stroke;
		context.stroke();
    }
};

// Drawing round rectangle
CanvasRenderer.prototype.DrawRoundRectanglePath = function(context, a, b, d, c, e) {
    if (!context || context.constructor !== CanvasRenderingContext2D) return;

    d < 2 * e && (e = d / 2);
	c < 2 * e && (e = c / 2);
	0 > e && (e = 0);

    // Drawing path
    context.beginPath();
    context.moveTo(a + e, b);
    context.arcTo(a + d, b, a + d, b + c, e);
    context.arcTo(a + d, b + c, a, b + c, e);
    context.arcTo(a, b + c, a, b, e);
    context.arcTo(a, b, a + d, b, e);
    context.closePath();
};

// Drawing image
CanvasRenderer.prototype.DrawImage = function(context, image, x, y, width, height, center = false) {
    if (!context || context.constructor !== CanvasRenderingContext2D) return;

    if (!image || typeof image === "string")
        return;

    const _x = center ? -image.width * .25 + x : x,
        _y = center ? -image.height * .25 + y : y;

    if (!width) width = image.width * .5;
    if (!height) height = image.height * .5;

    // Just draw them
    context.drawImage(image, _x, _y, width, height);
};

// Resize canvas renderer
CanvasRenderer.prototype._resize = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Setting canvas width
    if (_this.game.can.width !== window.innerWidth) {
        _this.game.can.width = window.innerWidth;
        _this.game.can.style.width = window.innerWidth + "px";

        _this.game.can_mid.middleX = _this.game.can.width / 2;
    }

    // Setting canvas height
    if (_this.game.can.height !== window.innerHeight) {
        _this.game.can.height = window.innerHeight;
        _this.game.can.style.height = window.innerHeight + "px";

        _this.game.can_mid.middleY = _this.game.can.height / 2;
    }

    // Setting scale (current height / max height)
    _this.rScale = _this.game.can.height / 1080;
};

// Rendering stuff by using game canvas context
CanvasRenderer.prototype.render = function(timestamp) {
    const _this = this; // That seem work for use this object in a event listener

    const now = Date.now(); // Responsible for lerp animations

    window.requestAnimationFrame(_this.render.bind(_this)); // Calling next frame

    // Delta updating
    _this.rDel   = (timestamp - _this.rOld) / 1000;
    _this.rOld   = timestamp;

    // Checking delta integrity
    _this.rDel   = (_this.rDel > 1) ? 1 : _this.rDel;

    // Cleaning canvas context renderer
    _this.game.con.clearRect(0, 0, _this.game.can.width, _this.game.can.height);

    // Drawing entities & updating it

    _this.game.render(_this.rDel, now);
};

export default CanvasRenderer;