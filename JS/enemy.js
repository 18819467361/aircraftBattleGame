var Enemy = function (opts) {
    var opts = opts || {};
    //继承父类属性
    Element.call(this, opts);

//    特有属性状态和图标
    this.status = 'normal';
    this.icon = opts.icon;
    this.live = opts.live;
    this.type = opts.type;
    this.boomIcon=opts.boomIcon;
    this.boomCount=0;
    this.enemyType=opts.enemyType;
};

Enemy.prototype = new Element();

Enemy.prototype.down = function () {
    this.move(0, this.speed);
};

//方法：booming爆炸中,状态处理函数
Enemy.prototype.booming = function () {
    //设置状态为booming
    this.status = 'booming';
    this.boomCount += 1;
    //如果已经BOOMING 了6次，则设置状态为boomed
    if (this.boomCount > 6) {
        this.status = "boomed";
    }
};

Enemy.prototype.draw = function () {

    switch (this.status) {
        case 'normal':
            context.drawImage(this.icon, this.x, this.y, this.width, this.height);
            break;
        case 'booming':
            context.drawImage(this.boomIcon, this.x, this.y, this.width, this.height);
            break;
    }

};

