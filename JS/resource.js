var resourceHelper = {
    //   加载图片
    soundLoader:function(soundSrc,soundName){
        var sound=document.createElement("audio");
        sound.setAttribute("src",soundSrc);
        sound.setAttribute('id',soundName);
        // console.log(soundName);
        sound.autoplay=false;
        $("#game").append(sound);
    },
    imageLoader:function (src,callback) {
        var image = new Image();
        image.addEventListener("load", callback);
        image.addEventListener("error", function () {
            console.log("iamgerror");
        });
        image.src=src;
        return image;
    },

    getImage:function (imageName) {
        return this.resources.images[imageName];
    },

    load:function (resources,callback) {
        var images=resources.images;
        var sounds=resources.music;
        var total=images.length;
        var finish=0;
        this.resources={
            images:{},
            sounds:{}
        };
        var self=this;
        //遍历所有音频
        for(var j=0;j<sounds.length;j++){
            var soundName=sounds[j].name;
            var soundSrc=sounds[j].src;
            self.soundLoader(soundSrc,soundName);
        }
    //    遍历所有图片
        for(var i=0;i<images.length;i++){
            var name=images[i].name;
            var src =images[i].src;
            self.resources.images[name]=self.imageLoader(src,function () {
                //    加载完成
                finish++;
                if(finish===total){
                    callback(self.resources);
            }

            });
        }
    }

};