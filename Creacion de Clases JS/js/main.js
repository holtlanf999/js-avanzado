// Nueva clase Bingo.
var Bingo = function(){

	this.randomNum = 0;

	// metodo guess. Es una propiedad y igualada a una funcion).
	this.guess = function ( userNum ){

		userNum = document.getElementById( 'user-number' ).value;

		this.randomNum = Math.floor( (Math.random() * 1000) + 1 );

		if( userNum <= 1000 ) {

			if ( userNum == this.randomNum ){
				var printSameNum = document.getElementById( 'result' ).innerHTML = ( '<br/>' + '<br/>' + 'Elegiste: ' + userNum + ', igual que la PC' );
				// return true;
			} else {
				var printDiffNum = document.getElementById( 'result' ).innerHTML = ( '<br/>' + '<br/>' +'Elegiste: ' + userNum + ', la PC eligió: ' + this.randomNum );
				// return false;
			}

		} else {
			alert( 'please inserT a number between "0" and "1000" ' );
		}

	};
};

var bingo1 = new Bingo;