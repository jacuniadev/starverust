/**
 * Survivfy.io
 * 
 * @author kaodev
 * @description Game controller: Keyboard
 * 
 * All rights reversed to Survivfy.io and developers
 * that contributed in development of game
 */

import { createRoundRectangleWithText } from "../canvas/functions";

import EaseInOutQuad from "../animations/EaseInOutQuad";
import LinearAnimation from "../animations/Linear";

import Entity from ".";
import Entities from "../../../../shared/entities";

class Player extends Entity {
    constructor
    (
        gameInstance,
        pId = -1, // Player id
        pNickname = "" // Player nickname
    ) {
        // Calling to "Entity" instance
        super(
            Entities.PLAYER,
            pId,
            null,
            0,
            null
        );

        // Game data
        this.game = gameInstance; // Game instance

        // Player data
        this.pScore = 0; // Player score
        this.pNickname = pNickname; // Player nickname
        this.pMessages = { // Player chat messages
            _ease: 0,
            _move: [],
            _effect: [],
            _messages: [],
            _messages_label: []
        };
        this.pAnimations = { // Player animations
            a_idle: new LinearAnimation(true, 0, -1.5, 2.25, 7.5, 3.75),
            a_walk: new LinearAnimation(true, 0, -3, 7.5, 33.75, 22.5),
            a_attack: new LinearAnimation(false, 0, -Math.PI / 3, 0, 9, 6)
        };
    }
}

Player.prototype.drawChatMessages = function(context, delta = 1) {
    const _this = this;

    const scale = _this.game.renderer.rScale;

    const messages = _this.pMessages._messages,
        messages_count = _this.pMessages._messages.length;

    context.save();
    context.translate(_this.ePosition.x, _this.ePosition.y);

    if (messages_count > 0) {
        for (let index = 0; index < messages_count; index++) {
            const message = messages[index];

            if (message) {
                if (!_this.pMessages._messages_label[index]) {
                    _this.pMessages._messages_label[index] = createRoundRectangleWithText(message, scale);
                    _this.pMessages._effect[index] = 0;
                    _this.pMessages._move[index] = 0;
                }

                if (index === 1) {
                    _this.pMessages._move[0] = EaseInOutQuad(_this.pMessages._ease) * _this.pMessages._messages_label[index].height * 1.15;
                }
            }
        }

        _this.pMessages._effect[0] += delta;

        if (messages_count > 1) {
            _this.pMessages._ease = Math.min(_this.pMessages._ease + delta, 1);

            if (_this.pMessages._effect[0] > 1 && _this.pMessages._ease > 0.70) _this.pMessages._effect[1] += delta;
        }

        for (let index = 0; index < messages_count; index++) {
            const effect = _this.pMessages._effect[index];

            if (effect > 0) {
                const message = _this.pMessages._messages_label[index];

                if (message) {
                    const message_move = _this.pMessages._move[index];

                    if (effect < 0.25)
                        context.globalAlpha = effect * 6;
                    else if (effect > 5.15)
                        context.globalAlpha = Math.max((5.5 - effect) * 5.5, 0);
                    else
                        context.globalAlpha = 1;

                    context.drawImage(message, -message.width / 2, -message_move + -message.height / 2 - 110 * scale, message.width, message.height);
                }
            }
        }

        if (_this.pMessages._effect[0] > 6) {
            _this.pMessages._ease = 0;

            _this.pMessages._move.shift();
            _this.pMessages._effect.shift();
            _this.pMessages._messages.shift();
            _this.pMessages._messages_label.shift();
        }
    }

    context.restore();
};

Player.prototype.render = function(delta, _) {
    const _this = this;
    
    const game = _this.game;
    
    if (!_this.eAlive) return;

    const context = _this.game.con;

    // temp
    context.save();
    context.beginPath();
    context.translate(_this.ePosition.x + game.user.uCamera.cameraX, _this.ePosition.y + game.user.uCamera.cameraY);
    context.rotate(_this.eAngle);

    const radius = 50;
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.strokeStyle = "black";
    context.stroke();

    context.fillStyle = "cyan";
    context.fill();

    context.fillStyle = "black";

    const synced = _this._entityInterpolation.currentPacket - _this._entityInterpolation.previousPacket > 5000 ? true : false;
    
    _this.drawChatMessages(context, delta);
    context.fillText(`Timeout: ${synced}`, 0, 20);
    context.fillText(_this.pNickname ? _this.pNickname : `Player #${_this.eId}`, 0, 0);

    
    // Updating camera
    if (_this.eId === game.user.uId) {
        game.user.uCamera.update(_this.ePosition.x, _this.ePosition.y);

        context.fillText(`You are here!`, 0, 35);
    }

    context.restore();
};

export default Player;