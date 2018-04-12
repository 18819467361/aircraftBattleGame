// 子类Plane飞机
//1.继承Element
//2.依赖Bullet
var Plane= function (opts) {
    var opts=opts||{};
//    调用父类方法
    Element.call(this,opts);
//    特有属性
    this.status= "normal";
    this.icon=opts.icon;
    this.boomIcon=opts.boomIcon;
    this.boomCount=0;
//    子弹相关
    this.bullets=[];
    this.bulletSize=opts.bulletSize;
    this.bulletSpeed=opts.bulletSpeed;
    this.bulletIcon=opts.bulletIcon;
}

//继承Element方法
Plane.prototype=new Element();

//方法：hasHit判断是否撞到当前元素
Plane.prototype.hasCrash=function (target) {
    var crash=false;
//    判断四边是否都没有间隙
    if(!(this.x+this.width<target.x)&&!(target.x+target.width<this.x)
        &&!(this.y+this.height<target.y)&&!(target.y+target.height<this.y)){
        crash=true;
    }
    return crash;
};

Plane.prototype.hasHit=function (target) {
    var bullets=this.bullets;
    var hasHit=false;
    for(var j=bullets.length-1;j>=0;j--){
    //    如果子弹击中的是目标对象的范围，则销毁子弹
        if(bullets[j].hasCrash(target)){
        //    清除子弹实例
            this.bullets.splice(j,1);
            hasHit=true;
            break;
        }
    }
    return hasHit;
};

//方法：setPosition修改飞机当前的位置
Plane.prototype.setPosition=function (newPlaneX,newPlaneY) {
    this.x=newPlaneX;
    this.y=newPlaneY;
    return this;
};

//方法：startShoot方法

Plane.prototype.startShoot=function () {
    var self=this;
    var bulletWidth=this.bulletSize.width;
    var bulletHeight=this.bulletSize.height;
//    定时发射子弹
    this.shootingInterval=setInterval(function () {
    //    创建子弹，子弹位置是居中射出
        var bulletX=self.x+self.width/2-bulletWidth/2;
        var bulletY=self.y-bulletHeight;
    //    创建子弹
        self.bullets.push(new Bullet({
            x:bulletX,
            y:bulletY,
            width:bulletWidth,
            height:bulletHeight,
            speed:self.bulletSpeed,
            icon:self.bulletIcon
        }));
    },200)
};

//方法：drawBullets画子弹
Plane.prototype.drawBullets=function () {
    var bullets=this.bullets;
    var i=bullets.length;
    while(i--){
        var bullet=bullets[i];
    //    更新子弹的位置
        bullet.fly();//更新和绘制耦合在一起
        if(bullet.y<=0){
            bullets.splice(i,1);
        }else{
            //未超出的子弹绘制出来
            bullet.draw();
        }
    }
};
//方法booming爆炸方法
Plane.prototype.booming=function () {
    this.status='booming';
    this.boomCount+=1;
    if(this.boomCount>10){
        this.status='boomed';
        clearInterval(this.shooting);
    }
    return this;
}
//方法：draw方法
Plane.prototype.draw=function () {
    var $canvas = $("#game");
    var canvas = $canvas.get(0);
    var context = canvas.getContext("2d");
    //绘制飞机
    switch (this.status){
        case 'booming':
            context.drawImage(this.boomIcon,this.x,this.y,this.width,this.height);
            break;
        default:
            context.drawImage(this.icon,this.x,this.y,this.width,this.height);
            break;
    }
    //绘制子弹
    this.drawBullets();
    return this;
};

