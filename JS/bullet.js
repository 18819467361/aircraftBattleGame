// 子类 Bullet 子弹对象
var Bullet=function (opts) {
    var opts=opts||{};
    Element.call(this,opts);
    this.icon=opts.icon;
};
//继承Element的方法
Bullet.prototype=new Element();

//方法fly向上移动
 Bullet.prototype.fly=function () {
     this.move(0,-this.speed);
     return this;
 };

 Bullet.prototype.hasCrash=function (target) {
     var crash=false;
     if(!(this.x+this.width<target.x)&&!(target.x+target.width<this.x)
         &&!(this.y+this.height<target.y)&&!(target.y+target.height<this.y)){
        crash=true;
     }
     return crash;
 };

 Bullet.prototype.draw=function () {
     context.drawImage(this.icon,this.x,this.y,this.width,this.height);
     return this;
 };