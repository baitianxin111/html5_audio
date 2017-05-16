/**
 * Created by liuyujing on 2017/5/15.
 */
(function () {




    function init() {


        var audioPlayer = new window.audioPlayer.AudioPlayer("#audioPlayer");

        audioPlayer.duration(function (duration) {
            //单位是秒
            console.log(duration);

        });

        document.querySelector(".controlButton").onclick = function () {

            var isPlay = this.textContent == "播放"?true:false;
            audioPlayer.control(isPlay);
            // audioPlayer.audioEle.play();
            this.textContent = this.textContent == "播放"?"暂停":"播放";

        };

        document.querySelector(".volumeValue").onchange = function () {
          audioPlayer.changeVolume(this.value);
        };

        // var audioEle = document.querySelector("#audioPlayer");
        //
        // // audioEle.volume = 0.5;
        //
        // var audioControlButton = document.querySelector(".controlButton");
        //
        // audioControlButton.onclick = function () {
        //
        //     this.textContent == "播放" ? audioEle.play():audioEle.pause();
        //     this.textContent = this.textContent == "播放"?"暂停":"播放";
        //
        // }

    }


    init();

})();