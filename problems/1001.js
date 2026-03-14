/**
 * Beecrowd Problem 1001 - Extremely Basic
 * https://www.beecrowd.com.br/judge/en/problems/view/1001
 * 
 * Description:
 * Read two integer values and print the sum.
 **/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const X = A + B;
console.log(`X = ${X}`);


