// app starts...

var weatherApp = ( function( window ) {

	// ajax request starts...

	var request = new XMLHttpRequest();
	request.open( 'GET', 'http://api.openweathermap.org/data/2.5/weather?q=', true );

	request.onload = function(){
		if( this.status >= 200 && this.status < 400 ){
			var data = JSON.parse( this.response );
			console.log( 'conection stablished' );
			console.log( this.response );

		} else {
			alert('server reached, but it returned an error');
		}
	} ;
	request.onerror = function(){
		console.log( 'connection error' );
	};

	request.send();	

	// ajax request ends...

	// Revealing module start...

	function getWeather( city, country ) {
		this.city = city;
		this.country = country;

		city = document.getElementById( 'type-city' );

		country = document.getElementById( 'type-country' );

		cityInfo : city
		coutryInfo : country

		console.log( 'ciudad: ' + city.value );
		console.log( 'pais: ' + country.value );
	}

	return {
		giveClima : getWeather,
		// cityInfo,
		// coutryInfo
	}

	console.log( giveClima.cityInfo.value );
	console.log( giveClima.coutryInfo.value );

	// Revealing module ends...

} )( window );

// app ends...

