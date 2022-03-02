import Packets from "../../../../../shared/networking/packets";
import TICKS from "../../../../../shared/gameserver/ticks";

// function update(){
//     if(lastSendAngle !== currentAngle && Date.now() - lastSend  1000 / 30){
//       socket.send([anglePacket, currentAngle]);
//       lastSend = Date.now();
//       lastSendAngle = currentangle;
//     }
//   }
//   function __(){
//     window.requestAnimFrame(__);
//     update();
//   }

class AnglePacket {
    constructor(game) {
        this.game = game;

        this.last_send = 0;
        this.last_angle = 0;
        
        this.current_send = Date.now();
        this.current_angle = 0;
    }
}

// Calling packet to send
AnglePacket.prototype.CallSend = function() {
    const _this = this; // That seem work for use this object in a event listener

    // Gathering game instance
    const game = _this.game;

    // If socket is connected
    if (game.networking.socket.readyState === game.networking.socket.OPEN) {
        // Gathering current angle
        const current_angle = _this.game.user.uAngle;

        // Set user entity angle
        _this.game.user.uEntity.eAngle = current_angle;

        // Gathering current timestamp
        const now = Date.now();

        // Optimized sending
        if (_this.last_angle !== current_angle) {
            if (now - _this.last_send > TICKS - 20) {
                // Preparing packet
                const packet = JSON.stringify([Packets.UPDATE_ANGLE, current_angle]);

                // Send packet
                game.networking.socket.send(packet);

                // Setting last sent data
                _this.last_send = Date.now();
                _this.last_angle = current_angle;
            }
        }

        // Old code
        // const angle = _this.game.user.uAngle,
        //     entityAngle = _this.game.user.uEntity.eAngle;
        // // To optimize bandwidth
        // if (Math.abs(entityAngle - angle) > 0.015) {
        //     // Preparing packet
        //     const packet = JSON.stringify([Packets.UPDATE_ANGLE, angle]);
        //     // Send packet
        //     game.networking.socket.send(packet);
        // }
    }
};

export default AnglePacket;