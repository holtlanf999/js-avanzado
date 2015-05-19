save2Do = function(){

//createDo properties
	this.saveUsrDo = 0;
	this.display2dos = 0;
	var storeDoArray = [];

	this.createDo = function( saveUsrDo ){
		// asign 
		saveUsrDo = document.getElementById( 'new-do' ).value;

		if ( saveUsrDo != "" ){
			display2Dos = document.getElementById( 'display-2dos' );
			display2Dos.innerHTML += ( 
				'<div>' +
				'<p>' + saveUsrDo + '</p>' + '   ' +
				'<input name="checker" type="checkbox"/> ' +
				'<button name="delete" value="delete">Delete</button>' +
				'</div>' +
				'<br/>'
			);

			// store user input in storeDoArray
			storeDoArray.push( saveUsrDo );
			console.log( storeDoArray );
		} else {
			alert( "No empty Do's are allowed. Please insert some information" );
		}
	};

}

var app2Do = new save2Do;