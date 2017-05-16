 
	window.onload=function(){
//		alert(2222);
		function init (){
			//全局不认识它，需要写上window
			var audioPlayer = new window.audioPlayer.AudioPlayer('#audioPlayer1');
			document.querySelector('.btn').onclick = function(){
			//播放功能
			var isPlay=	this.textContent =='play'?true:false;
			audioPlayer.control(isPlay);
			//播放，暂停功能
			this.textContent = this.textContent =='play'?"pause":'play';
			//单曲循环
				 document.querySelector('#loop').onclick = function(){
//				 	 
			 		  var isLoop = this.textContent == "单曲循环"?true:false;
			 		  audioPlayer.loop(isLoop);
			 		console.log(audioPlayer.loop(isLoop));
			 }	
			};
			//音量控制		
			document.querySelector('.volume').onchange = function(){
				 
				 audioPlayer.changeVolume(this.value);
//				currentVolume=value;
				document.querySelector('#showvolume').textContent=this.value;
//				  console.log( audioPlayer.changeVolume(this.value));
				};
			//时长	
			audioPlayer.duration(function(duration){
				document.querySelector('#length').textContent=duration;
//					console.log(duration)
				});
			//快进
			document.querySelector('.fast').onchange = function(){
//				alert(222);
//			console.log(audioPlayer.currentTime);
//			this.range=
			var currentValue = (this.value)+"%";
				audioPlayer.controlFast(this.value);
//				console.log(currentValue);
//				document.querySelector('.fast').textContent = this.value;
			}
			
			 
			//面向过程的写法
//		var audio = document.querySelector('#audioPlayer');
//		var inputVolume = document.querySelector('.volume');
//		inputVolume.onchange = function(){
//			inputVolume.textContent=audio.volume;
//			console.log(inputVolume.textContent);
//		}
//
//		var play = document.querySelector('.btn');
//		play.onclick = function(){
////			alert(111);
//		this.textContent == "play" ? audio.play():audio.pause();
//        this.textContent = this.textContent == "play"?"暂停":"play";
//			console.log(this.textContent);		
//		}
	}
		init();
		 
	}
	
 
