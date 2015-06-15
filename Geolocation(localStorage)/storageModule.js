(function(window, undefined) {
  var geolacations = [];

  function set(geo) {
  	geolacations.push(geo.latitude+','+geo.longitude);
  	window.localStorage.geolocations = JSON.stringify(geolacations);;
  };

  function getAll(){
  	return geolacations;
  };
  
  function init() {
    if(typeof window.localStorage.geolocations === 'string'){
    	geolacations = JSON.parse(window.localStorage.geolocations);
    }
  };
  
  init();

  window.storageModule = {
    set : set,
    getAll : getAll
  };
  
})(window);