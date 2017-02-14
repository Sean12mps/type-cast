console.log( 'background' );

var $ = require( 'jquery' );

//	A generic onclick callback function.
function genericOnClick(info, tab) {

	var package = {greeting: "hello"};

	chrome.tabs.sendMessage( tab.id, package, function( response ) {

	} );

}


var context = 'editable',
	title 	= "Use Type Cast",
	id 		= chrome.contextMenus.create( {
		"title" 	: title, 
		"contexts"	: [context],
		"onclick"	: genericOnClick
	} );