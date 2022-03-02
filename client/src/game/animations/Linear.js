class LinearAnimation {
    constructor(data, init, min, max, min_speed, max_speed) {
        this.o = data;
        this.v = init;
        this.min = min;
        this.max = max;
        this.min_speed = min_speed;
        this.max_speed = max_speed;
    }
}

LinearAnimation.prototype.update = function(delta) {
    const _this = this;

    if(_this.v < _this.min) _this.v = _this.min;
    if(_this.v > _this.max) _this.v = _this.max;

    if (_this.o) {
        var c = _this.v + delta * _this.max_speed;

        if (c > _this.max)
            return _this.v = _this.max, _this.o = false, true;

        _this.v = c;
    } else c = _this.v - delta * _this.min_speed, c < _this.min ? (_this.v = _this.min, _this.o = true) : _this.v = c;
};

export default LinearAnimation;