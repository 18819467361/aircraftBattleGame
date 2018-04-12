// var backgroundMusic = document.getElementById("backgroundMusic");
// var clickMusic = document.getElementById("clickMusic");
// var gameOverMusic = document.getElementById("gameOverMusic");
// var shootSound = document.getElementById("bullet");

var music = {
    backgroundMusicOn: function () {
        if (CONFIG.option.music === "on") {
            var backgroundMusic = document.getElementById("backgroundMusic");
            backgroundMusic.play();
            console.log(this.clickMusic);
            console.log(this.bbb);
            backgroundMusic.setAttribute("loop", "loop");
        }
    },
    backgroundMusicOff: function () {
        if (CONFIG.option.music === "on") {
            var backgroundMusic = document.getElementById("backgroundMusic");
            backgroundMusic.pause();
        }
    },
    clickMusicOn: function () {
        if (CONFIG.option.music === "on") {
            var clickMusic = document.getElementById("clickMusic");
            clickMusic.play();
        }
    },
    clickMusicOff: function () {
        if (CONFIG.option.music === "on") {
            var clickMusic = document.getElementById("clickMusic");
            clickMusic.pause();
        }
    },
    gameOverMusicOn: function () {
        if (CONFIG.option.music === "on") {
            gameOverMusic = document.getElementById("gameOverMusic");
            gameOverMusic.play();
        }
    },
    gameOverMusicOff: function () {
        if (CONFIG.option.music === "on") {
            gameOverMusic = document.getElementById("gameOverMusic");
            gameOverMusic.pause();
        }
    },
    shootSoundOn: function () {
        if (CONFIG.option.music === "on") {
            var shootSound = document.getElementById("bullet");
            shootSound.play();
            shootSound.setAttribute("loop", "loop");
        }
    },
    shootSoundOff: function () {
        if (CONFIG.option.music === "on") {
            var shootSound = document.getElementById("bullet");
            shootSound.pause();
        }
    }

};