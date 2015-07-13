( function( window, undefined ){

	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var durationElement = undefined;
	var currentTimeElement = undefined;

	var songList = new Array();
	songList[ 0 ] = { src: 'audio/1.mp3', name: 'Bang Bang (My Baby Shot Me Down)', artist: "Nico Vega" };
	songList[ 1 ] = { src: 'audio/2.mp3', name: 'Blame It On Me', artist: "Bang Camaro" };
	songList[ 2 ] = { src: 'audio/3.mp3', name: 'Kriptonite', artist: "Three Doors Down" };

	function initSong(){
		audio = document.createElement( 'audio' );
		audio.setAttribute( 'src', songList[0].src );
		audio.durationchange = duration;
		audio.volume = volumeValue; // 50% 
		durationElement = document.getElementById( 'duration' );
		currentTimeElement= document.getElementById( 'currentTime' );

		// audio events
		audio.addEventListener( 'durationchange', setDuration );
		// audio.addEventListener( 'timeupdate',setCurrentTime );

		//print playlist
		for( i = 0; i < songList.length; i++ ){
			document.getElementById( 'songList' ).innerHTML += 
			'<li>' + 
				'<button id= play' + i + '>play</button>' + 
				'<p>' + songList[i].name + '</p>' +
			'</li>';
		}

		// setCurrentTime();
	}

	function playSong(){
		console.log("playSong function activated");
		audio.play();
	}

	function pauseSong(){
		console.log("pauseSong function activated");
		audio.pause();
	}

	function repeatSong(){
		console.log("repeatSong function activated");
	}

	function prevSong(){
		console.log("prevSong function activated");
	}

	function nextSong(){
		console.log("nextSong function activated");
	}

	function setDuration(){
		durationElement.innerHTML = Math.floor(audio.duration);
	};

	function volume(){
		console.log( 'volume' );
	}

	// function setCurrentTime(){
	// 	currentTimeElement.innerHTML = Math.floor(audio.currentTime*1000);
	// }

	window.Player = function(){

		initSong( songList );

		return{
			play:   playSong,
			pause:  pauseSong,
			repeat: repeatSong,
			prev:   prevSong,
			next:   nextSong,
			vol:    volume
		}
	}

} )( window, undefined );