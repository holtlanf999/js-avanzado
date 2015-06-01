var weatherApp = ( function( window ) {

	function getWeather( city, country ) {
		city = document.getElementById( 'type-city' );
		country = document.getElementById( 'type-country' );
		temp = 0;
		humidity = 0;	

		console.log( 'ciudad: ' + city.value );
		console.log( 'pais: ' + country.value );
		printClima = document.getElementById( 'display-weather' ).innerHTML = 
			'<p>' + 'city: ' + city.value + '</p>' + 
			'<p>' + 'country: ' + country.value + '</p>' +
			'<p>'+ 'Temperature: ' + temp.value + '</p>' +
			'<p>'+ 'Humidity: ' + humidity.value + '</p>'	;
	}

	return {
		getC : getWeather
	}

	requestC = function(){
		climaData = xmlhttp.open("GET","api.openweathermap.org/data/2.5/weather?q=London,uk",true);
		document.print( climaData );
	}

	requestC();

} )( window );