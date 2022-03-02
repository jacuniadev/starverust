/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Polyfills
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

const modules = require.context("./modules", true, /[A-Za-z0-9-_,\s]+\.js$/i);

const ACTIVE_POLYFILLS = {},
    UNINITIALIZED_POLYFILLS = {};

class Polyfills {
    constructor(canvasContext) {
        return modules.keys().forEach(function(key) {
            const module = (modules(key)).default;

            if (module) {
                const moduleName = key.match(/([A-Za-z0-9-_]+)\./i)[1] || null;

                if (!(moduleName in ACTIVE_POLYFILLS)) {
                    if (module.INITIALIZE_POLYFILL !== false) {
                        try {
                            ACTIVE_POLYFILLS[moduleName] = new module(globalThis, ((module.REQUIRED_CANVAS_CONTEXT) ? canvasContext : undefined));
                            
                            console.log(`Polyfill '${moduleName}' loaded`);
                        } catch (e) {
                            console.error(`Loading polyfill '${moduleName}' failed:\n`, e);

                            throw Error(`Error while loading polyfill '${moduleName}', see last console message`);
                        }
                    } else
                        UNINITIALIZED_POLYFILLS[moduleName] = module;
                }
            }
        });
    }
}

Polyfills.prototype.getPolyfill = function(polyfillName, type = "active") {
    const module = Object.entries(type === "active" ? ACTIVE_POLYFILLS : UNINITIALIZED_POLYFILLS).find(m => m[0] === polyfillName);

    if (module)
        return module[1];
    else
        return false;
};

export default Polyfills;