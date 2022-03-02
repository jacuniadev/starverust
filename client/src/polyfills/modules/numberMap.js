export default class {
    constructor() {
        Number.prototype.map = function (in_min, in_max, out_min, out_max) {
            return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        };
        Number.prototype.degree = function () {
            return this * Math.PI / 180;
        };
    }
}