(function(){
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

		for(var r = 0; r < matriz.length; r++){
			tr += '<tr><th>'+(r+1)+'</th>';
			for(var c = 0; c < matriz[r].length; c++){
				tr += '<td>' + matriz[r][c] + '</td>';
			}
			tr += '</tr>'
		}

		tableb.innerHTML = tr;
	};

	initMatriz();
	printTable();

})();