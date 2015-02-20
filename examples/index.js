'use strict';

var isObjectArray = require( './../lib' );

console.log( isObjectArray( [{},{}] ) );
// returns true

console.log( isObjectArray( [] ) );
// returns false

console.log( isObjectArray( [{},[]] ) );
// returns false
