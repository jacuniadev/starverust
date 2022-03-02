/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game maintain code
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

class Events {
    constructor(gameInstance) {
        this.game = gameInstance;

        this.listeners = [
            ["keyup", this.game.controllers.kb._process.bind(this.game.controllers.kb)],
            ["resize", this.game.renderer._resize.bind(this.game.renderer)],
            ["keydown", this.game.controllers.kb._process.bind(this.game.controllers.kb)],
            ["mousemove", this.game.controllers.mouse._mousemove.bind(this.game.controllers.mouse)],
            ["contextmenu", function(event) {
                event.preventDefault();
    
                return false;
            }]
        ];

        this._prepare("add");
    }
}

Events.prototype._prepare = function(action) {
    const _this = this;

    if (!action) action = "add";

    const f = action === "add" ? "addEventListener" : action === "remove" ? "removeEventListener" : "addEventListener";

    for (let index = 0; index < _this.listeners.length; index++) {
        const e = _this.listeners[index];

        if (e) {
            const [en, ef] = e;

            window[f](en, ef);
        }
    }

    window[f]("beforeunload", function() {
        _this._prepare("remove");
    });
};

export default Events;