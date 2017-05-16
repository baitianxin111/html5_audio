/**
 * Created by liuyujing on 2017/5/15.
 */

// var a = 20;
// window.a = 20;
// function ccc() {
//
// }
//
// window.ccc = function () {
//
// };

// window.$ = window.$||{};
// window.jQuery = window.$;

window.audioPlayer = window.audioPlayer||{};

(function () {

    function AudioPlayer(audioID) {
        // if (audioID){
        //     this.audioEle = document.querySelector(audioID);
        // }else {
        //     this.audioEle = document.createElement("audio");
        // }

        this.audioEle = audioID?document.querySelector(audioID):document.createElement("audio");
    }

    /*
    * setAudioSrc:设置播放器的资源文件
    * src:资源文件的路径
    * */
    AudioPlayer.prototype.setAudioSrc = function (src) {
      this.audioEle.src = src;
    };

    /*
    * control:控制播放 开始暂停的方法
    * isPlay:是否播放 true 调用播放的方法 false调用暂停的方法
    * */
    AudioPlayer.prototype.control = function (isPlay) {
        isPlay ? this.audioEle.play():this.audioEle.pause();
    };

    AudioPlayer.prototype.changeVolume = function (volume) {
        this.audioEle.volume =  volume>1 ? volume/100:volume;
    };

    //音频的总时长
    //必须等 元数据 加载成功之后 才可以获取到
    AudioPlayer.prototype.duration = function (callback) {

        // var self = this;
        this.audioEle.addEventListener("loadedmetadata",function () {
            console.log(this.audioEle.duration);
            callback(this.audioEle.duration);

        }.bind(this));
    };

    window.audioPlayer.AudioPlayer = AudioPlayer;

})();


/*
* loadData(callback) 是一个带参数的函数
* 如果想调用 loadData就需要传入参数
* 比如：loadData(1);
* 但是 loadData 需要的参数是一个函数
* loadData(function(result){});
*
* 在loadData函数内部
* callback(11);
* 当调用callback的时候  就是 在调用 传入的匿名函数oadData(【function(result){}】);
* 当调用 匿名函数的时候  就会执行  匿名函数中的代码
* function(result){console.log(result)} -> 这时候 就可以 获得到 loadData这个函数中的参数【11】
* */
function loadData(callback) {
    var request = new XMLHttpRequest();
    request.open("GET","XXX.json");
    request.onload = function () {
        // console.log(request.response);
    //     callback(11);
        callback(request.response);
    };
    request.send();
}

loadData(function (result) {
    console.log(result);
});



