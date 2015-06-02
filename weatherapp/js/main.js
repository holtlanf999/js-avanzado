var weatherApp = ( function( window, undefined ) {
	city = document.getElementById( 'type-city' );
	country = document.getElementById( 'type-country' );
	compUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	displayWeather = document.getElementById( 'display-weather' );

	var pideCLima = function(){
		var request = new XMLHttpRequest();
		request.open( 'GET', compUrl + city.value + ',' + country.value, true );
		
		request.onload = function(){
			if( this.status >= 200 && this.status < 400 ){
				var data = JSON.parse( this.response );
				console.log( 'conection stablished' );
				console.log( this.response );
			} else {
				console.log( 'server reached, error returned' );
			}
		};
		request.onerror = function(){
			console.log( 'connection error' );
		};
			request.send();
	};
	return{
		giveC : pideCLima
	}

	function getWeather(){ 
		this.printClima = displayWeather.innerHTML = 
			'<p>' + 'city: ' + city.value + '</p>' + 
			'<p>' + 'country: ' + country.value + '</p>' +
			'<p>' + 'temperature: ' + data.main.temp + '</p>'

			;
	}

} )( window );