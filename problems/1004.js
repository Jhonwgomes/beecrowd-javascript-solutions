/**
 * Beecrowd Problem 1004 - Simple Product
 * https://judge.beecrowd.com/en/problems/view/1004
 *
 * Description:
 * Read two integer values (A and B) and calculate their product.
 *
 * Output Format:
 * Print the result in the following format:
 * PROD = result
 *
 * Example:
 * Input:
 * 3
 * 9
 *
 * Output:
 * PROD = 27
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

PROD = A * B;

console.log(`PROD = ${PROD}`);
