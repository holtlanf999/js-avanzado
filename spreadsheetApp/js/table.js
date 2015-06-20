( function( window ){
	var matriz = [];
	var rows = 5;
	var columns = 5;

	var tableb = document.getElementById('tableb');

	/**
	* Init the matriz wiht rows x columns
	*/
	function initMatriz(){
		for(var r = 0; r < rows; r++){
			var columnsArray = [];
			for(var c = 0; c < columns; c++){
				columnsArray.push(c+1);
			}
			matriz.push(columnsArray);
		}
	};

	/**
	* Print the table body
	*/
	function printTable(){
		var tr = '';
		var r = 0;
		var max = matriz.length;
		for(; r < max; r++){
			tr += '<tr><th>'+(r+1)+'</th>';
			for(var c = 0; c < matriz[r].length; c++){
				tr += '<td id="' + r + '-' + c + '">' + matriz[r][c] + '</td>';
			}
			tr += '</tr>';
		}

		tableb.innerHTML = tr;
		tableEvents();
	};

	function tableEvents(){
		var cell = undefined;
		for( var r = 0; r < matriz.length;  r++ ) {
			for( var c = 0; c < matriz.length; c++){
				var cell = document.getElementById( r + '-' +c );
				cell.addEventListener( 'dblclick', clickEvent ); 
			}
		}
	};

	function clickEvent(){
		event.target.setAttribute( 'contentEditable', true ); 
	};

	initMatriz();
	printTable();

	
} )();