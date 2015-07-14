( function( window, undefined ){

	var audio = undefined;
	var loop = false;
	var volumeValue = 0.5;
	var duration = undefined;
	var currentTime = undefined;
	var songRange = document.getElementById( 'song-range' );
	var name = document.getElementById( 'song-name' );
	var artist = document.getElementById( 'artist' );
	var cont = 0;
	var playPause = document.getElementById( 'play-pause' );
	var toggle = true;
	
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
		songRange.setAttribute( 'max', duration );
		console.log( audio );
		
		// audio events
		audio.addEventListener( 'durationchange', setDuration );
		audio.addEventListener( 'timeupdate',setCurrentTime );
		audio.addEventListener( 'ended', autoChange );

		//print playlist
		for( i = 0; i < songList.length; i++ ){
			document.getElementById( 'songList' ).innerHTML += 
			'<li>' + 
				'<img src="img/play.png" onclick= "player.selectList(' + i + ')" class="play"/>' + 
				'<p>' + songList[i].name + '</p>' +
			'</li>';
		}

		setCurrentTime();
	};

	function playPauseSong( ){
		if( toggle == true ){
			audio.play();
			toggle = false;	
			playPause.setAttribute( 'src', 'img/pause.png' );
		}else{
			audio.pause();
			toggle = true;
			playPause.setAttribute( 'src', 'img/play.png' );
		}
	};

	function playFromList( id ){
		audio.setAttribute( 'src', songList[ id ].src );
		name.innerHTML = songList[ id ].name;
		artist.innerHTML = songList[ id ].artist;
		document.body.style.backgroundImage = "url(" + songList[ id ].background + ")";
		cont = id;
		audio.play();
	}

	// function pauseSong(){
	// 	audio.pause();
	// };

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

	function autoChange(){
		nextSong();
	} 

	function setDuration(){
		var mins = Math.floor( audio.duration / 60 );
		var secs = mins.

		duration.innerHTML = mins + ':';
		console.log( audio.duration % ( 60 * 60 ) );
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
			playPause:   	 playPauseSong,
			// pause:  	 pauseSong,
			repeat: 	 repeatSong,
			prev:   	 prevSong,
			next:   	 nextSong,
			vol:         vol,
			selectList:  playFromList
		}
	}

} )( window, undefined );