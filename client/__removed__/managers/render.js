/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Managers: Rendering
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

class RenderManager {
    constructor(gameInstance, renderer) {
        // Game data
        this.game     = gameInstance; // Game instance
        this.renderer = renderer; // Game renderer

        // Manager data
        this.mRenderers = new Map(); // Renderers
    }
}

RenderManager.prototype.rendererExists = rendererName => {
    const _this = this;

    if (!rendererName || typeof rendererName !== "string") return;

    const renderer = _this.mRenderers.get(rendererName);

    if (renderer)
        return true;

    return false;
};

RenderManager.prototype.pushRenderer = (rendererName, rendererFunc) => {
    const _this = this;

    if (!rendererName || typeof rendererName !== "string") return;
    if (!rendererFunc || rendererFunc.constructor !== Function) return;

    if (!_this.rendererExists(rendererName))
        return _this.mRenderers.set(rendererName, rendererFunc);

    return false;
};

RenderManager.prototype.deleteRenderer = rendererName => {
    const _this = this;

    if (!rendererName || typeof rendererName !== "string") return;

    if (_this.rendererExists(rendererName))
        return _this.mRenderers.delete(rendererName);

    return false;
};

export default RenderManager;