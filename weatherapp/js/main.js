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
				weatherData( data );
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
	function weatherData( data ){ 
		console.log( "weatherData start" );
		this.city = data.name;
		this.country = data.sys.country;
		this.temp = data.main.temp;
		this.weatherDescription = data.weather[0].description;
		this.icon =	null;
	}
	// Para producir con factory

	// Proceso de factory
	function weatherFactory(){}
	weatherFactory.prototype.createWBox = function cWeatherBox( data ) {
		var weatherCode = data.weather[0].id;
		displayWeather.innerHTML +=
			'<p>' + 'city: ' + cityOpt + '</p>' + 
			'<p>' + 'country: ' + countryOpt + '</p>' +
			'<p>' + 'temperature: ' + tempOpt + '</p>' +
			'<p>' + 'weather: ' + iconName + weatherType.value + '</p>';

		if ( 200 <= weatherCode <= 232 == true){
			weatherData(data).icon = iconName + '11d.png';
		} else if( 300 <= weatherCode <= 321 || 511 <= weatherCode <= 522 == true ){
			weatherData(data).icon = iconName + '09d.png';
		} else if( 500 <= weatherCode <= 504 == true ){
			weatherData(data).icon = iconName + '10d.png';
		} else if( 600 <= weatherCode <= 621 == true ){
			weatherData(data).icon = iconName + '13d.png';
		} else if( 701 <= weatherCode <= 741 == true ){
			weatherData(data).icon = iconName + '50d.png';
		} else if( 800 <= weatherCode <= 801 == true ){
			weatherData(data).icon = iconName + '02d.png';
		} else if( 802 == weatherCode ){
			weatherData(data).icon = iconName + '03d.png';
		} else if( 803 <= weatherCode <= 804 == true ){
			weatherData(data).icon = iconName + '03d.png';
		} else if( weatherCode === null ){
			return false;
		}

		return new weatherCode( data );
	}

	var weatherPrint = new weatherFactory( data );
	var algo = weatherPrint.createWBox( {
		weatherCode : data.weather[0].id
	} );
} )( window );