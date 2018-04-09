//常用元素和变量
var $body = $(document.body);

//画布相关
var $canvas = $("#game");
var canvas = $canvas.get(0);
var context = canvas.getContext("2d");

//设置画布的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//获取画布相关信息
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//判断是否有requestAnimationFrame方法，如果无则模拟实现
window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 30);
    };

//获取音乐对象


//基础事件
function bindEvent() {
    var self = this;
    $body.on("click", ".js-start_button", function () {
        //点击音效
        music.clickMusicOn();
        $body.attr("data-status", "startGame");
        $("#game").css("display", "block");
        $(".wrapper").css("background", 'url("Images/background.png")');
        //开始游戏
        GAME.start();
    });
    $body.on("click", ".js-config_button", function () {
        $body.attr("data-status", "config");
        //点击音效
        music.clickMusicOn();
        //设置游戏
        //    GAME.init();
    });
    $body.on("click", ".js-instruction_button", function () {
        $body.attr("data-status", "instruction");
        //点击音效
        music.clickMusicOn();
    });
    $body.on("click", ".js-config_confirm", function () {
        $body.attr("data-status", "main_menu_button_group");
        //点击音效
        music.clickMusicOn();
    });
    $body.on("click", ".js-confirm", function () {
        $body.attr("data-status", "main_menu_button_group");
        //点击音效
        music.clickMusicOn();
    });
    $body.on("click", ".js-restart", function () {
        music.backgroundMusicOn();
        music.clickMusicOn();
        $body.attr("data-status", "startGame");
        //开始游戏
        GAME.start();
    });
    $body.on("click", ".selectOption", function () {
        $(this).addClass("select").siblings().removeClass("select");
        var option = [];
        var $select = $(".select");
        CONFIG.option.music = $select.eq(0).attr("title");
        CONFIG.option.level = $select.eq(1).attr("title");
        if (CONFIG.option.level === "difficult") {
            CONFIG.enemySpeed = 6;
            CONFIG.enemyMaxNum = 8;
        }
        music.clickMusicOn();
    });
    $body.on("click", ".js-config_confirm", function () {
        GAME.init();
    })

}

//    游戏对象
var GAME = {
    //    游戏初始化
    init: function (opts) {
        //设置opts
        var opts = Object.assign({}, opts, CONFIG);
        this.opts = opts;

        //计算飞机初始坐标
        this.planePosX = canvasWidth / 2 - opts.planeSize.width / 2;
        this.planePosY = canvasHeight - opts.planeSize.height - 50;
    },

    //    游戏开始需要的设置
    start: function () {
        //    获取游戏初始化
        var self = this;
        var opts = this.opts;//获取CONFIG对象
        var images = this.images;
        //    清空设计目标对象数据和分数设置为0
        this.enemies = [];
        this.score = 0;
        $(".score").text(this.score);
        //播放背景音乐
        music.backgroundMusicOn();
        music.shootSoundOn();
        //随机生成大小战机
        this.createSmallEnemyInterval = setInterval(function () {
            self.createEnemy("normal");
        }, 400);
        this.createBigEnemyInterval = setInterval(function () {
            self.createEnemy("big");
        }, 1500);

        //创建主角英雄
        this.plane = new Plane({
            x: this.planePosX,
            y: this.planePosY,
            width: opts.planeSize.width,
            height: opts.planeSize.height,
            //子弹尺寸速度
            bulletSize: opts.bulletSize,
            bulletSpeed: opts.bulletSpeed,
            //图标相关
            icon: resourceHelper.getImage("hero"),
            bulletIcon: resourceHelper.getImage("bullet"),
            boomIcon: resourceHelper.getImage("hero_blowup_n4")
        });
        //飞机开始射击
        // console.log(this.plane);
        this.plane.startShoot()
        //绑定手指移动事件
        this.bindTouchAction();
        //    开始更新游戏
        this.update();
    },
    update: function () {
        var self = this;
        var opts = this.opts;
        //    清理画布
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        //    更新飞机、敌人
        this.updateElement();
        //
        if (this.plane.status === 'boomed') {
            this.end();
            return;
        }
        //    重新绘制
        this.draw();
        //循环update过程
        requestAnimFrame(function () {
            self.update();
        });
    },
    bindTouchAction: function () {
        var opts = this.opts;
        var self = this;
        //飞机飞行极限坐标
        var planeMinX = 0;
        var planeMinY = 0;
        var planeMaxX = canvasWidth - opts.planeSize.width;
        var planeMaxY = canvasHeight - opts.planeSize.height;
        //手指初始位置
        var startTouchX;
        var startTouchY;
        //飞机初始位置
        var startPlaneX;
        var startPlaneY;
        //首次触屏
        $canvas.on("touchstart", function (e) {
            var plane = self.plane;
            //记录首次触摸位置
            startTouchX = e.touches[0].clientX;
            startTouchY = e.touches[0].clientY;
            //记录飞机的初始位置；
            startPlaneX = plane.x;
            startPlaneY = plane.y;
            // console.log('touchstart',startTouchX,startTouchY);
        });
        $canvas.on('touchmove', function (e) {
            var newTouchX = e.touches[0].clientX;
            var newTouchY = e.touches[0].clientY;
            // console.log('touchmove',newTouchX,newTouchY);

            //新的飞机坐标等于手指欢动的距离加上飞机的初始位置
            var newPlaneX = startPlaneX + newTouchX - startTouchX;
            var newPlaneY = startPlaneY + newTouchY - startTouchY;
            if (newPlaneX < planeMinX) {
                newPlaneX = planeMinX;
            }
            if (newPlaneX > planeMaxX) {
                newPlaneX = planeMaxX;
            }
            if (newPlaneY < planeMinY) {
                newPlaneY = planeMinY;
            }
            if (newPlaneY > planeMaxY) {
                newPlaneY = planeMaxY;
            }
            //更新飞机位置
            self.plane.setPosition(newPlaneX, newPlaneY);
            e.preventDefault();

        })
    },
    //更新当前所有元素的状态
    updateElement: function () {
        var opts = this.opts;
        var enemySize = opts.enemySize;
        var enemies = this.enemies;
        var plane = this.plane;
        var i = enemies.length;
        if (plane.status === 'booming') {
            plane.booming();
            return;
        }
        //循环更新怪兽
        while (i--) {
            var enemy = enemies[i];
            enemy.down();

            if (enemy.y >= canvasHeight) {
                this.enemies.splice(i, 1);
            } else {
                //判断飞机状态
                if (plane.status === 'normal') {
                    if (plane.hasCrash(enemy)) {
                        plane.booming();
                    }
                }
                //根据怪兽状态判断是否被击中
                switch (enemy.status) {
                    case 'normal':
                        if (plane.hasHit(enemy)) {
                            enemy.live -= 1;
                            if (enemy.live === 0) {
                                enemy.booming();
                            }
                        }
                        break;
                    case 'booming':
                        enemy.booming();
                        break;
                    case 'boomed':
                        this.calScore(enemy.enemyType);
                        // console.log(enemy);
                        enemies.splice(i, 1);
                        break;
                }
            }
        }
    },
    //计算得分
    calScore: function (enemyType) {
        if (enemyType === "big") {
            this.score += 100;
        } else if (enemyType === 'normal') {
            this.score += 10;
        }
        $(".score").text(this.score);
        // console.log(this.score);
    },
    //生成战机
    createEnemy: function (enemyType) {
        var enemies = this.enemies;
        var opts = this.opts;
        var images = this.images || {};
        var enemySize = opts.enemySmallSize;
        var enemySpeed = opts.enemySpeed;
        var enemyIcon = resourceHelper.getImage("smallEnemy");
        var enemyBoomIcon = resourceHelper.getImage('smallEnemy_down4');
        var enemyLive = 1;

        if (enemyType === "big") {
            enemySize = opts.enemyBigSize;
            enemyIcon = resourceHelper.getImage("bigEnemy");
            enemyBoomIcon = resourceHelper.getImage('bigEnemy_down4');
            enemySpeed = opts.enemySpeed * 0.6;
            enemyLive = 10;
        }
        //    综合元素参数
        var initOpt = {
            x: Math.floor(Math.random() * (canvasWidth - enemySize.width)),
            y: -enemySize.height,
            enemyType: enemyType,
            live: enemyLive,
            width: enemySize.width,
            height: enemySize.height,
            speed: enemySpeed,
            icon: enemyIcon,
            boomIcon: enemyBoomIcon
        };
        if (enemies.length < opts.enemyMaxNum) {
            enemies.push(new Enemy(initOpt));
            // console.log(enemies);
        }
    },
    end: function () {

        music.backgroundMusicOff();
        music.shootSoundOff();

        music.gameOverMusicOn();
        $body.attr("data-status", "endGame");
        $(".finalScore span").text(this.score);
    },
    draw: function () {
        this.plane.draw();
        this.enemies.forEach(function (enemy) {
            enemy.draw();
        });

    }
};

//页面住入口
function init() {
    resourceHelper.load(CONFIG.resources, function (resources) {
        GAME.init();
        bindEvent();
    })
}

init();





