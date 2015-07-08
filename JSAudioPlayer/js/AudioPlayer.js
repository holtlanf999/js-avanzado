( function( window, undefined ){

	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var durationElement = undefined;
	var currentTimeElement = undefined;

	var songList = new Array();
	songList[ 0 ] = { src: 'audio/1.mp3', name: 'Bang Bang (My Baby Shot Me Down)' }
	songList[ 1 ] = { src: 'audio/2.mp3', name: 'Blame It On Me' }
	songList[ 2 ] = { src: 'audio/3.mp3', name: 'Kriptonite' }

	function initSong( songList ){

		audio = document.createElement( 'audio' );
		audio.setAttribute( 'src', songList[0].src );

		audio.durationchange = duration;
		audio.volume = volumeValue; // 50%

		durationElement = document.getElementById( 'duration' );
		currentTimeElement= document.getElementById( 'currentTime' );

		// audio events
		audio.addEventListener( 'durationchange', setDuration );
		audio.addEventListener( 'timeupdate',setCurrentTime );
		
		setCurrentTime();
	}

	function playSong(){}

	function pauseSong(){}

	function repeatSong(){}

	function prevSong(){}

	function nextSong(){}

	function setDuration(){
		durationElement.innerHTML = Math.floor(audio.duration);
	};

	function setCurrentTime(){
		currentTimeElement.innerHTML = Math.floor(audio.currentTime*1000);
	}

	window.Player = function(){

		initSong( songList );

		return{
			play: playSong,
			pause: pauseSong,
			repeat: repeatSong,
			prev: prevSong,
			next: nextSong
		}


	}

} )( window, undefined );