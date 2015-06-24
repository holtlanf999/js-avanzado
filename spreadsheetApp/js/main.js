var spreadsheet = ( function( window, undefined ){
	
	var matriz = [];
	var rows = 5;
	var columns = 5;
	var tableb = document.getElementById('tableBody');

	function initMatriz(){

		for( var r = 0; r < rows; r++ ){
			var columnsArray = [];

			for( var c = 0; c < columns; c++ ){
				columnsArray.push( c + 1 );
			}

			matriz.push( columnsArray );
			// console.log( columnsArray );
		}
	};

	function printTable(){
		var tr = '';
		var max = matriz.length;

		for( var r = 0; r < max; r++ ){
			tr += '<tr><th>'+ ( r + 1 ) +'</th>';
			for( var c = 0; c < matriz[ r ].length; c++ ){
				tr += '<td id="' + r + '-' + c + '">' + matriz[ r ][ c ] + '</td>';
			}
			tr += '</tr>';
		}

		document.getElementById( 'add-row' ).addEventListener ( 'click', function addNewRow(){

			var newTr = '';
			var cont1 = rows - 1;
			var cont2 = 0;

			if( cont1 < rows ){
				matriz.push( [ '','','','','' ] );
				matriz[ rows ].push( cont2 );
				rows++;
				newTr += '<tr><th>' + ( rows ) + '</th>';

				for ( cont2 = 0; cont2 < max; cont2++ ){
					console.log(  'newTr = ' + newTr + ' cont1 = ' + cont1 + ' cont2 = ' + cont2 );
					// console.log( 'matriz ' + cont2 + '= ' + matriz[ cont2 + 1 ] );
					newTr += '<td id="' + ( cont1 + 1 ) + '-' + cont2 + '">' + matriz[ cont1 ][ cont2 ] + '</td>';
				}
				tr += '</tr>';
			}

			tableBody.innerHTML += newTr;

		} );

		tableBody.innerHTML = tr;
		tableEvents();
	};

	function tableEvents(){
		var cell = undefined;
		for( var r = 0; r < matriz.length;  r++ ) {
			for( var c = 0; c < matriz.length; c++){
				var cell = document.getElementById( r + '-' + c )
				cell.addEventListener( 'dblclick', clickEvent ); 
			}
		}
	};

	function clickEvent(){
		event.target.setAttribute( 'contentEditable', true ); 
	};

	function dataManagement(){
	}

	function downloadFile(){
		// console.log( 'downloadFile starts' );
	}


	return{
		revealMatriz : initMatriz,
		revealprintT : printTable,
		revealdataM : dataManagement,
		revealdownloadD : downloadFile
	}

} )( window );

spreadsheet.revealMatriz();
spreadsheet.revealprintT();
spreadsheet.revealdataM();
spreadsheet.revealdownloadD();

