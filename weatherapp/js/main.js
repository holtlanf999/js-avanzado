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
				printWeather( data );
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

	function printWeather( data ){ 
		console.log( "printWeather start" );
		
		var weatherFactory = function( data ){
			this.city = data.name;
			this.country = data.sys.country;
			this.temp = data.main.temp;
			this.weatherType = data.weather[0].description;
			this.icon =	iconName + data.weather[0].icon;
		}

		var weather = new weatherFactory;

		weather.print = function( ){
			console.log( "weather.print start" );
			displayWeather.innerHTML +=
				'<p>' + 'city: ' + city.value + '</p>' + 
				'<p>' + 'country: ' + country.value + '</p>' +
				'<p>' + 'temperature: ' + temp.value + '</p>' +
				'<p>' + 'weather: ' + weatherType.value + '</p>';
		}
	}

} )( window );