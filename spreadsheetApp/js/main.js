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
		// console.log(  matriz );

		document.getElementById( 'add-row' ).addEventListener ( 'click', function addNewRow(){

			var newTr = '';
			var cont1 = rows - 1;
			var cont2 = 0;

			if( cont1 < rows ){
				matriz.push( [] );
				rows++;
				newTr += '<tr><th>' + ( rows ) + '</th>';

				for ( cont2 = 0; cont2 < max; cont2++ ){
					matriz[ cont1 + 1 ].push( cont2 + 1 );
					newTr += '<td id="' + ( cont1 + 1 ) + '-' + cont2 + '">' + matriz[ cont1 ][ cont2 ] + '</td>';
				}

				tr += '</tr>';
			}

			console.log( ' cont1 = ' + cont1 + ' cont2 = ' + cont2 );
			console.log(  matriz );

			tableBody.innerHTML += newTr;
		} );

		tableBody.innerHTML = tr;
		_tableEvents();
	};

	function _tableEvents( ){
		var cell = undefined;
		for( var r = 0; r < matriz.length;  r++ ) {
			for( var c = 0; c < matriz.length; c++){
				var cell = document.getElementById( r + '-' + c );
				cell.addEventListener( 'dblclick', _clickEvent );
			}
		}
	};

	function _clickEvent(){
		event.target.setAttribute( 'contentEditable', true ); 
	};

	function searchCell(){ 

		var search = document.getElementById( 'search' ).value;
		// console.log( 'searchVal = ' + typeof( search ) + ' = ' + search );



		for( var r = 0; r < matriz.length;  r++ ) {
			for( var c = 0; c < matriz.length; c++){
				var cell = document.getElementById( r + '-' + c );
			}
		}



		// var cell = document.getElementById( "2-2" );
		// console.log( 'cellVal = ' + typeof( cell.innerText ) + ' = ' + cell.innerText );

		if( search === cell.innerText ){
			cell.className = 'highlighted';
		} else{
			console.log( 'no match found' );			
		}

	}

	function clearSearch(){
		var cell = document.getElementById( "2-2" );
		cell.className = '';
	}

	function dataManagement(){

		this.setData = function setData(){
			localStorage.cellData = matriz;
		}

		this.saveData = function saveData(){

		}

		this.getData = function getData(){

		}

	}

	function downloadFile(){
		
		var stringFormat = [
			'A,B,C,D,E'
		];

		var cont = 0;
		var max = matriz.length;
		for( ; cont < max; cont++ ){
			stringFormat.push( matriz[max].join( ',' ) );
		}

		console.log( matriz );

		var csvFile = stringFormat.join('\n');
		var file = document.createElement('file');
		
		file.href = 'data:attachment/csv,' + stringFormat;
		file.target = '_blank';
		file.download = 'tabla.csv';

		var download = document.getElementById('download');
		download.click

	}


	return{
		revealMatriz : initMatriz,
		revealprintT : printTable,
		revealSearch : searchCell,
		revealCSearch :  clearSearch,
		revealdataM : dataManagement,
		revealdownloadD : downloadFile
	}

} )( window );

spreadsheet.revealMatriz();
spreadsheet.revealprintT();
spreadsheet.revealdataM();
spreadsheet.revealdownloadD();

