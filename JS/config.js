// 游戏相关配置
// @type {Object}

var CONFIG = {
    planeSize: {
        width: 60,
        height: 45
    },
    planeType: "bluePlaneIcon",
    bulletSize: {
        width: 10,
        height: 20
    },
    enemySpeed: 4,
    enemyMaxNum: 5,
    enemySmallSize: {
        width: 54,
        height: 40
    },
    enemyBigSize: {
        width: 110,
        height: 100
    },
    bulletSpeed: 10,
    option: {
        music:"on",
        level:"easy"
    },
    resources: {
        music: [
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/music/background.mp3",
                name: "backgroundMusic"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/music/click.mp3",
                name: "clickMusic"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/music/gameOver.mp3",
                name: "gameOverMusic"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/music/bullet.mp3",
                name: "bullet"
            }
        ],
        images: [
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/hero.png",
                name: "hero"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/hero_blowup_n1.png",
                name: "hero_blowup_n1"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/hero_blowup_n2.png",
                name: "hero_blowup_n2"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/hero_blowup_n3.png",
                name: "hero_blowup_n3"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/hero_blowup_n4.png",
                name: "hero_blowup_n4"
            },

            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy1.png",
                name: "smallEnemy"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy1_down1.png",
                name: "smallEnemy_down1"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy1_down2.png",
                name: "smallEnemy_down2"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy1_down3.png",
                name: "smallEnemy_down3"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy1_down4.png",
                name: "smallEnemy_down4"
            },

            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy2.png",
                name: "middleEnemy"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy2_down1.png",
                name: "middleEnemy_down1"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy2_down2.png",
                name: "middleEnemy_down2"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy2_down3.png",
                name: "middleEnemy_down3"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy2_down4.png",
                name: "middleEnemy_down4"
            },

            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy3.png",
                name: "bigEnemy"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy3_down1.png",
                name: "bigEnemy_down1"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy3_down2.png",
                name: "bigEnemy_down2"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy3_down3.png",
                name: "bigEnemy_down3"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/enemy3_down4.png",
                name: "bigEnemy_down4"
            },

            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/bullet1.png",
                name: "bullet"
            },
            {
                src: "http://localhost:63342/%E9%A1%B9%E7%9B%AE/%E9%A3%9E%E6%9C%BA%E5%A4%A7%E6%88%98/Images/bullet2.png",
                name: "bullet2"
            }

        ]

    }
}