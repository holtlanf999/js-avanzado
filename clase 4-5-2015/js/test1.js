// * @users mynameSpace

var users = (function(window){

	
	
	var userData = {};

	function get(id){
		if(typeof id !== 'number'){
			console.error('Error: invalid id', id);
			return false;
		}
		return _getData(id);
	};

	// get real data
	// * @parse {int} userId
	// * @return {object}

	function _getData(userId){
		console.log('getData private method', userId);
	};

	return{
		get: get,
		data: userData
	};
})(window);