var spreadsheet = ( function( window, undefined ){
	
	var matriz = [];
	var rows = 5;
	var columns = 5;
	var tableb = document.getElementById('tableBody');
	
	/**
	* Init the matriz wiht rows x columns.
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
	* Print the table body, adds new row.
	*/
	function printTable( ){
		var tr = '';
		var r = 0;
		var max = matriz.length;

		for( ; r < max; r++ ){
			tr += '<tr><th>'+(r+1)+'</th>';
			for( var c = 0; c < matriz[r].length; c++ ){
				tr += '<td id="' + r + '-' + c + '">' + matriz[r][c] + '</td>';
			}
			tr += '</tr>';
		}

		function addNewRow( max ){
			// for( i = 6; i > max; i++ ){
			// 	th = i;
			// }
		}

		console.log( matriz );
		


		tableBody.innerHTML = tr;
		tableEvents();
	};

	/**
	* Makes possible to edit the table cells.
	*/
	function tableEvents(){
		var cell = undefined;
		for( var r = 0; r < matriz.length;  r++ ) {
			for( var c = 0; c < matriz.length; c++){
				var cell = document.getElementById( r + '-' + c );
				cell.addEventListener( 'dblclick', clickEvent ); 
			}
		}
	};

	function clickEvent(){
		event.target.setAttribute( 'contentEditable', true ); 
	};

	/**
	* save, set, get and search data.
	*/
	function dataManagement(){
		// console.log( 'dataManagement starts' );
	}

	/**
	* Download the full table in .csv format.
	*/
	function downloadData(){
		// console.log( 'downloadData starts' );
	}


	return{
		revealMatriz : initMatriz,
		revealprintT : printTable,
		revealdataM : dataManagement,
		revealdownloadD : downloadData
	}

} )( window );

spreadsheet.revealMatriz();
spreadsheet.revealprintT();
spreadsheet.revealdataM();
spreadsheet.revealdownloadD();