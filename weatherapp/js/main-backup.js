var weatherApp = ( function( window, undefined ) {

	var city = document.getElementById( 'type-city' );
	var country = document.getElementById( 'type-country' );
	var compUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var displayWeather = document.getElementById( 'display-weather' );
	var iconName = "http://openweathermap.org/img/w/";

	var getWeather = function(){

		var request = new XMLHttpRequest();
		request.open( 'GET', compUrl + city.value + ',' + country.value, true );
		
		request.onload = function(){

			if( this.status >= 200 && this.status < 400 ){
				var data = JSON.parse( this.response );
				console.log( this.response );
				printW( data );
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
		giveC : getWeather
	}

	// Para producir con factory
	function printW( data ){ 
		console.log( "printW start" );
		this.city = data.name;
		this.country = data.sys.country;
		this.temp = data.main.temp;
		this.weatherType = data.weather[0].description;
		this.icon =	iconName + data.weather[0].icon;
		console.log( this.city );
	}
	// Para producir con factory

	function wFactory( ){
		console.log( "wFactory start" );

		wFactory.prototype.createWBox = function cWeatherBox( options ) {
		displayWeather.innerHTML +=
			'<p>' + 'city: ' + city.value + '</p>' + 
			'<p>' + 'country: ' + country.value + '</p>' +
			'<p>' + 'temperature: ' + temp.value + '</p>' +
			'<p>' + 'weather: ' + iconName + weatherType.value + '</p>';
		}	
	}
} )( window );