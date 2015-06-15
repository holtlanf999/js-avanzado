(function(window, undefined) {
	
	var button = document.getElementById("getLocation");
	var div = document.getElementById('message');
	var viewHistory = document.getElementById("viewHistory");
	var history = document.getElementById('history');

	button.addEventListener('click', getLocation);
	viewHistory.addEventListener('click', displayHistory);
	
	function getLocation() {
	    if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(displayPosition, displayError);
		}else {
		  alert('Geolocation is not supported by this browser');
		}
	};

	function displayPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
	    div.innerHTML = '<p>Latitude: ' + latitude 
	    				+'<br>Longitude: ' + longitude + '</p>'; 
		
		var img = new Image();
    	img.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=13&size=500x500&sensor=false';
    	div.appendChild(img);

    	storageModule.set(position.coords);
	};

	function displayError(error){
	  	alert("Error: " + error.message);
	};

	function displayHistory(){
		var data = storageModule.getAll();
		history.innerHTML = '';
		for(var i =0; i < data.length; i++){
			history.innerHTML += '<li>'+data[i]+'</li>';
		}
	};
})(window);