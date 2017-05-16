//面向对象的写法
//下面这种写法，是为了防止其他文件也有这个对象，将现在这个对象清空，就判断一下，audioPlay是一个统一入口
window.audioPlayer = window.audioPlayer || {};
//console.log(window.audioPlayer );
(function(){
	function AudioPlayer(audioID){
		if (audioID) {
			this.audioEle = document.querySelector(audioID);
			
		} else{
			this.audioEle = document.createElement('audio');
			
		}
//		this.duration();
		//三目运算的方式
//		this.audioEle= audioID?document.querySelector(audioID);document.createElement('audio');
	}
	//路径
	AudioPlayer.prototype.setAudioSrc= function(src){
			this.audioEle.src = src;
	}
	//改变音量
	AudioPlayer.prototype.changeVolume = function(volume){
		this.audioEle.volume = volume>1?volume/100:volume;
		console.log(this.audioEle.volume);
	}
	//isPlay传参数是否播放，true开始播放，否则会暂停，控制播放暂停
	AudioPlayer.prototype.control = function(isPlay){
//		this.audioEle.played = 
		isPlay?this.audioEle.play():this.audioEle.pause();
		
	}
	//必须等源数据加载成功之后，才可以获取到
	//g给回掉函数，这个参数的名字是一个函数名， 时间段
	AudioPlayer.prototype.duration = function(callBack){
//		var self = this ;
		this.audioEle.addEventListener('loadedmetadata',function(){
//			console.log(this.audioEle.duration) ;
			callBack(this.audioEle.duration/60);
		}.bind(this));
	 	
	}
	//单曲循环功能
	AudioPlayer.prototype.loop = function(isLoop){
		 isLoop?true:false;
	}
	//当前的播放时间
	AudioPlayer.prototype.controlFast = function(currentTime){
		this.audioEle.currentTimer =currentTime;
		
//		this.audioEle.currentTimer="seconds";
//		console.log(this.audioEle.currentTimer);
		this.audioEle.currentTimer+=  ;
//		console.log(this.audioEle.currentTimer);
		
		
	}
	//全局化audioPlayer的一个功能函数
	window.audioPlayer.AudioPlayer = AudioPlayer;
//	console.log(window.audioPlayer.AudioPlayer );
}());
