var weatherApp = ( function( window, undefined ) {

	city = document.getElementById( 'type-city' );
	country = document.getElementById( 'type-country' );
	compUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	displayWeather = document.getElementById( 'display-weather' );

	var getWeather = function(){

		var request = new XMLHttpRequest();
		request.open( 'GET', compUrl + city.value + ',' + country.value, true );
		
		request.onload = function(){

			if( this.status >= 200 && this.status < 400 ){
				var data = JSON.parse( this.response );
				console.log( this.response );
				console.log( data.weather[0].description );
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
		giveC : getWeather,
	}

	function printWeather(){ 

		var city =	data.name;
		var country = data.sys.country;
		var temp =	data.main.temp;
		var weatherType = data.weather[0].description;
		var icon =	data.weather[0].icon;
		
		var sunny = function(){
			this.icon =	icon;
		}

		var rainy = function(){
			this.icon =	icon;
		}

		var stormy = function(){
			this.icon =	icon;
		}

		var cloudy = function(){
			this.icon =	icon;
		}


		this.createWeatherBox = function (type) {

			var weather;

			if( type === "sunny" ){
				weather = new sunnyWeather();
			} else if( type === "rainy" ){
				weather = new rainyWeather();
			} else if( type === "stormy" ){
				weather = new stormyWeather();
			} else if( type === "cloudy" ){
				weather = new cloudyWeather();
			}

			weather.type = type;

			weather.print = function(){

				displayWeather.innerHTML =
					'<p>' + 'city: ' + city.value + '</p>' + 
					'<p>' + 'country: ' + country.value + '</p>' +
					'<p>' + 'temperature: ' + temp.value + '</p>' +
					'<p>' + 'weather: ' + weatherType.value + '</p>';

			}

		}

	}
	
} )( window );