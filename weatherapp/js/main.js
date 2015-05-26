var weatherApp = ( function( window ) {

	city = 0;
	country = 0;

	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+ city + country, true);

	request.onload = function(){
		if(this.status >= 200 && this.status < 400){
			var data = JSON.parse(this.response);
			console.log( 'conection stablished' );
			console.log( this.response );
		} else {
			alert('server reached, but it returned an error');
		}
	} ;

	request.onerror = function(){
		console.log('connection error');
	};

	request.send();	

	function getWeather( city, country ) {
		city = document.getElementById( 'type-city' );
		country = document.getElementById( 'type-country' );
		console.log( city.value );
		console.log( country.value );
	}

	return {
		giveClima : getWeather
	}

} )( window );

