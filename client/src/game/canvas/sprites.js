/**
 * survivfy.io
 * 
 * @author kaodev
 * @description Game sprites
 * 
 * All rights reversed to Famishs.io and developers
 * who participated in development of game
 */

const images = require.context("../../assets/images/", true, /[A-Za-z0-9-_,\s]+\.png$/i) || [],
    sprites = {};

class Sprites {
    constructor() {
        images.keys().forEach(function(key) {
            const IMAGE = images(key);

            if (IMAGE) {
                // Image name
                const IMAGE_NAME = key.match(/([A-Za-z0-9-_]+)\./i)[1] || null;

                // Make sprite
                if (!(IMAGE_NAME in sprites)) {
                    sprites[IMAGE_NAME] = new Image();

                    const sprite = sprites[IMAGE_NAME];

                    if (sprite) {
                        // Set sprite datas
                        sprite.src = IMAGE || null;
                        sprite.sLoaded = false;

                        sprite.onload = function() {
                            if (!this.sLoaded) {
                                this.sLoaded = true;

                                console.log("loaded", this);
                            }
                        }

                        sprite.onerror = function() {
                            console.log("error loading");
                        }
                    }
                }
            }
        });
    }
}

Sprites.prototype.getSprite = function(spriteName) {
    if (!(spriteName in sprites)) return false;

    return sprites[spriteName];
};

export default Sprites;