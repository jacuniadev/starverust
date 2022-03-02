class ArrayRemove {
    constructor() {
        Array.prototype.remove = function(object) {
            let _this = this;

            const index = _this.indexOf(object),
                len = _this.length - 1;

            if (index === -1) throw Error("Object is not in array");
            if (index !== _this.length) {
                const temporary = _this[index];

                _this[index] = _this[len];
                _this[len] = temporary;
            }

            _this.pop();
        };
    }
}

export default ArrayRemove;