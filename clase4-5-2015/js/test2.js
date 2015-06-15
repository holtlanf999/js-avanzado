var  myClass = {};

(function(){

	myClass.get = get;

	function get (argument){
		alert('hola');

		var mensaje = '';

		// correcto
		if(a == true){

			mensaje = 'hola';

		}else{

			mensaje = 'adios';

		};
		//correcto 

		// incorrecto
		var mensaje = (a==true) ? 'hola' : 'adios';
		// incorrecto
	};

})();

	