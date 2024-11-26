var rotateVal = 0; 
var InterVal; 
var isplay = 0;
var songNum = 1;

function control(num) {
	var audio = document.getElementById('music'+num); 
	if(audio!==null){ 
		if(audio.paused){ 
			audio.play();
			rotate();
		}else{
			audio.pause();
			clearInterval(InterVal);
		}
	} 
}

function rotate () {
	InterVal = setInterval(function () {
		var img = document.getElementById('status_pic');
		rotateVal += 7;
		img.style.transform = 'rotate(' + rotateVal + 'deg)';
		img.style.transition = '0.1s linear';
	}, 100)
}


function start(num){
	var max = 3;
	var audio;
	var name;
	songNum = num;
	
	for(var i=1;i<=max;i++){
		audio = document.getElementById('music'+i);
		audio.currentTime = 0;
		audio.pause();
		name = document.getElementById('songName'+i);
		name.style.borderRight = '0px solid orangered';
		name.style.fontWeight = 'normal';
		name.style.backgroundColor = 'white';
		if(i == num){
			audio.play();
			name.style.borderRight = '5px solid orangered';
			name.style.fontWeight = 'bold';
			name.style.backgroundColor = '#F7F7F7';
			document.getElementById('songCover').src = 'img/songCover'+num+'.png';
		}
		
	}
	
	clearInterval(InterVal);
	rotate();

}

