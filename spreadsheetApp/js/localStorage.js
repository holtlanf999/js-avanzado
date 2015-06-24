( function( window, undefined ){

	function save( data ){
		if( Array.isArray( data ) ){
			localStorage.data = JSON.stringify( data )
		}
	}

	function getAll(){
		var data = [];
		if typeof( localStorage.data === 'string' ){
			data = JSON.parse(localStorage.data);
		}
		return data
	}

	window.cache = {
		save : save,
		getAll: getAll
	}

})( window );
