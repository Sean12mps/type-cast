// 	Global functions
function getUrlParameter(sParam) {

	var sPageURL = window.location.search.substring(1);

	var sURLVariables = sPageURL.split('&');

	for (var i = 0; i < sURLVariables.length; i++) {

		var sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] == sParam) {

			return sParameterName[1];

		}

	}

}


// 	Node Modules
var template = require('./modules/ext-template.js'),
	$ = require( 'jquery' );


// 	Script Extensions
require( 'virtual-keyboard' );



// 	Elements
var window_main = template.create( 'window_search' ),
	clicked_el 	= null;


// 	Append type-cast
$( 'body' ).append( window_main );


// 	Chrome listener
chrome.runtime.onMessage.addListener( function( request, sender, sendResponse ) {
	
	$( window_main ).fadeIn( 'fast' );

	$( window ).trigger( 'open/type-cast' );

});


// 	Right click listener
$( window ).on( 'mousedown', function( event ){

	//	right click
	if( event.button != 2 ) return;

	var clicked = $( event.target );

	if ( ! $( clicked ).is( 'input' ) ) return;

	clicked_el = clicked;

} );


// 	Open Typecast
$( window ).on( 'open/type-cast', function() {

	if ( clicked_el == null ) return;

	$( clicked_el ).keyboard( {
		layout 		: 'qwerty',
		appendTo 	: window_main,
		beforeClose : function( e, keyboard, el, accepted ) {

			$( window_main ).fadeOut( 'fast' );
		
		},
		hidden : function( event, keyboard, el ) {

			keyboard.destroy();

		},
	} );

	$( clicked_el ).getkeyboard().reveal();

} );