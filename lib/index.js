/**
*
*	VALIDATE: object-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an object array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' );


// IS OBJECT ARRAY //

/**
* FUNCTION: isObjectArray( value )
*	Validates if a value is an object array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an object array
*/
function isObjectArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isObject( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isObjectArray()


// EXPORTS //

module.exports = isObjectArray;
