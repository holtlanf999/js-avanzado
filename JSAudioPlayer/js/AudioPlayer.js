( function( window, undefined ){

	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var duration = undefined;
	var currentTime = undefined;
	var name = document.getElementById( 'song-name' );
	var artist = document.getElementById( 'artist' );
	var cont = 0;
	
	var songList = new Array();
	songList[ 0 ] = { src: 'audio/1.mp3', name: 'Bang Bang (My Baby Shot Me Down)', artist: "Nico Vega", background: "img/backgrounds/nico-vega.jpg"};
	songList[ 1 ] = { src: 'audio/2.mp3', name: 'Blame It On Me', artist: "Bang Camaro", background: "img/backgrounds/bang-camaro.jpg"};
	songList[ 2 ] = { src: 'audio/3.mp3', name: 'Kriptonite', artist: "Three Doors Down", background: "img/backgrounds/three-doors-down.jpg"};

	function initSong(){
		audio = document.createElement( 'audio' );
		audio.setAttribute( 'src', songList[0].src );
		audio.durationchange = duration;
		audio.volume = volumeValue;
		audio.setAttribute( 'loop', loop ); 
		duration = document.getElementById( 'duration' );
		currentTime = document.getElementById( 'currentTime' );
		name.innerHTML = songList[cont].name;
		artist.innerHTML = songList[cont].artist;
		document.body.style.backgroundImage = "url(" + songList[0].background + ")";
		
		// audio events
		audio.addEventListener( 'durationchange', setDuration );
		audio.addEventListener( 'timeupdate',setCurrentTime );

		//print playlist
		for( i = 0; i < songList.length; i++ ){
			document.getElementById( 'songList' ).innerHTML += 
			'<li>' + 
				'<img src="img/play.png" class="play" id= play' + i + '/>' + 
				'<p>' + songList[i].name + '</p>' +
			'</li>';
		}

		setCurrentTime();
	};

	function playSong(){
		audio.play();
	};

	function playFromList(){
		console.log( "play from list" );

		for( i = 0; i < songList.length; i++ ){
			playBtn = document.getElementById( "play" + i );
			console.log( "play btn" );
		}
	}

	function pauseSong(){
		audio.pause();
	};

	function repeatSong(){
		var audioLoopAttr = audio.getAttribute( 'loop' );

		if( audioLoopAttr == "false" ){
			audio.setAttribute( 'loop', true );
			console.log( audio );
		} else {
			audio.setAttribute( 'loop', false );
			console.log( audio );
		}
		
	};

	function prevSong(){
		if( cont > 0 ){
			cont--;
			audio.setAttribute( 'src', songList[cont].src );
			name.innerHTML = songList[cont].name;
			artist.innerHTML = songList[cont].artist;
			document.body.style.backgroundImage = "url(" + songList[cont].background + ")";
			audio.play();
		} else {
			return;
		}
	};

	function nextSong(){
		if( cont < songList.length - 1 ){
			cont++;
			audio.setAttribute( 'src', songList[cont].src );
			name.innerHTML = songList[cont].name;
			artist.innerHTML = songList[cont].artist;
			document.body.style.backgroundImage = "url(" + songList[cont].background + ")";
			audio.play();
		} else {
			return;
		}
	};

	function setDuration(){
		duration.innerHTML = Math.floor( audio.duration );
	};

	function vol( amount ){
		console.log( 'vol' );
		audio.volume = amount;
	};

	function setCurrentTime(){
		currentTime.innerHTML = Math.floor( audio.currentTime );
	}

	window.Player = function(){

		initSong( songList );

		return{
			play:   playSong,
			pause:  pauseSong,
			repeat: repeatSong,
			prev:   prevSong,
			next:   nextSong,
			vol:    vol
		}
	}

} )( window, undefined );