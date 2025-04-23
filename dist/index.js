/** @license Apache-2.0 */

'use strict';

/**
* Constructor for performing a reduction on an input ndarray.
*
* @module @stdlib/ndarray-base-unary-reduce-strided1d-dispatch
*
* @example
* var base = require( '@stdlib/stats-base-ndarray-max' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var UnaryStrided1dDispatch = require( '@stdlib/ndarray-base-unary-reduce-strided1d-dispatch' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var table = {
*     'default': base
* };
* var max = new UnaryStrided1dDispatch( table, [ idt ], odt, policy );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max.apply( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
