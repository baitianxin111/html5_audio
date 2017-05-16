window.palyer = window.palyer ||{};
(function(){
	//所欲音频播放的界面，逻辑，统一Player在里面种关联
	function Player (){
		var urls = ["res/songs/宋冬野 - 董小姐.mp3",
					"res/songs/味道.mp3",										
					"res/songs/丑八怪.mp3",
					"res/songs/一次就好.mp3",
					"res/songs/Need You Now.mp3",
					"res/songs/Sam Tsui,Kylee - Just Give Me a Reason.mp3"];
		
		this.audioPlayer = new palyer.AudioPlayer(urls);
		//single:0,
//		random:1,
//		order:2
		this.playTypes = ["single","random","order"];
		//indexOf  查找字串中指定字符或字串首次出现的位置,返首索引值
		this.curTypeIndex = this.playTypes.indexOf(localStorage.getItem("loopType") ?localStorage.getItem("loopType"):"single") ;
		this.getUI();
		this.addListener();
	}
	Player.prototype.getUI = function(){
		//获取播放元素
		this.playTypeControl = document.querySelector('.playerControlBox :first-child');
		var type = this.playTypes[this.curTypeIndex];
		this.playTypeControl.src = "res/img/"+type +".png";
		this.playButton = document.querySelector('.playerControlBox :nth-child(3) ');
		this.nextButton = document.querySelector('.playerControlBox :nth-child(4) ');
		this.lastButton = document.querySelector('.playerControlBox :nth-child(2)');
		
		
//		console.log(this.lastButton);
//		console.log(this.playButton);
	};
	Player.prototype.addListener = function(){
		var self =this;
		//注意指向  this.playButton指的是点击按钮 input
		this.playButton.onclick = function(){
			//self是指的是audio元素的
 this.src = self.audioPlayer.playControl()?"res/img/play.png":"res/img/pause.png";
		};
		this.nextButton.onclick = function(){
			self.audioPlayer.next();
		}
		this.lastButton.onclick =function(){
			self.audioPlayer.last();
		}
		//播放类型切换
		this.playTypeControl.onclick = function(){
			self.curTypeIndex++;
			if (self.curTypeIndex > 2) {
				self.curTypeIndex = 0;
				
			}  
			var type =  self.playTypes[self.curTypeIndex];
			 self.audioPlayer.setPlayType(type);
			 this.src = "res/img/"+type +".png";
		}
		
		
	};
	 
	window.palyer.Player = Player;
}());
