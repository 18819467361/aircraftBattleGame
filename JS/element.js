// 父类
var Element = function (opts) {
    var opts = opts || {};
//    设置坐标和尺寸
    this.x = opts.x;
    this.y = opts.y;
    this.width = opts.width;
    this.height = opts.height;
    this.speed = opts.speed;
};

Element.prototype = {
//    原型方法MOVE
    move: function (x,y) {
        var addX = x || 0;
        var addY = y || 0;
        this.x = addX+this.x;
        this.y = addY+this.y;
    },
    draw: function () {

    }
};

