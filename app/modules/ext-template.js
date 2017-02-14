// requirements
var $ = require( 'jquery' );

// functions
function get( name ){

	if ( typeof( mytemplate[name] ) == 'undefined' ) return false;

	return mytemplate[name];

};

function compile( str ) {

	return ( $( str ) );

};

function create( name ){

	var str = get( name );

	return compile( str );

};


// dist
exports.get = get;

exports.compile = compile;

exports.create = create;