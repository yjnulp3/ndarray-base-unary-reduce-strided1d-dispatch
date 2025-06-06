/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var dmax = require( '@stdlib/stats-base-ndarray-dmax' );
var smax = require( '@stdlib/stats-base-ndarray-smax' );
var base = require( '@stdlib/stats-base-ndarray-max' );
var uniform = require( '@stdlib/random-array-uniform' );
var dtypes = require( '@stdlib/ndarray-dtypes' );
var dtype = require( '@stdlib/ndarray-dtype' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var UnaryStrided1dDispatch = require( './../lib' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_and_generic' );

// Define dispatch policies:
var policies = {
	'output': 'same',
	'casting': 'none'
};

// Define a dispatch table:
var table = {
	'types': [
		'float64', // input
		'float32'  // input
	],
	'fcns': [
		dmax,
		smax
	],
	'default': base
};

// Create an interface for performing a reduction:
var max = new UnaryStrided1dDispatch( table, [ idt ], odt, policies );

// Generate an array of random numbers:
var xbuf = uniform( 100, -1.0, 1.0, {
	'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 10, 10 ], [ 10, 1 ], 0, 'row-major' );

// Perform a reduction:
var y = max.apply( x, {
	'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
