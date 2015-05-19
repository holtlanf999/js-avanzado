save2Do = function(){

//createDo properties
	this.saveUsrDo = 0;
	this.display2dos = 0;
	var storeDoArray = [];

	this.createDo = function( saveUsrDo ){

		saveUsrDo = document.getElementById( 'new-do' ).value;

		display2Dos = document.getElementById( 'display-2dos' );
		display2Dos.innerHTML += ( 
			'<p>' + saveUsrDo + '</p>' + 
			'<input name="checker" type="checkbox"/> ' +
			'<button name="delete" value="delete">Delete</button>' +
			'<br/>' 
		);

		storeDoArray.push( saveUsrDo );
		console.log( storeDoArray );

	};

	//this.arrayStore = function(storeDoArray){}

}

var app2Do = new save2Do;