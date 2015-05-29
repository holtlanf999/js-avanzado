var weatherApp = ( function( window ) {

	function getWeather( city, country ) {
		this.city = city;
		this.country = country;

		city = document.getElementById( 'type-city' );

		country = document.getElementById( 'type-country' );

		cityInfo : city
		coutryInfo : country

		console.log( 'ciudad: ' + city.value );
		console.log( 'pais: ' + country.value );
		document.getElementById( 'display-weather' ).append( 
			'<p>' + 'city ' + giveClima.cityInfo.value + '</p>' + '<br/>' + 
			'<p>' + 'country ' + giveClima.countryInfo.value + '</p>' 
		);
	}	

	return {
		giveClima : getWeather,
		printClima
	}

} )( window );