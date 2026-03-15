/**
 * Beecrowd Problem 1005 - Average 1
 * https://judge.beecrowd.com/en/problems/view/1005
 *
 * Description:
 * Read two floating-point numbers (A and B) and calculate their weighted average.
 *
 * Weights:
 * A has weight 3.5
 * B has weight 7.5
 *
 * Formula:
 * MEDIA = (A * 3.5 + B * 7.5) / 11
 *
 * Output Format:
 * Print the result in the following format:
 * MEDIA = result
 *
 * The result must be displayed with 5 digits after the decimal point.
 *
 * Example:
 * Input:
 * 5.0
 * 7.1
 *
 * Output:
 * MEDIA = 6.43182
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);

MEDIA = (A * 3.5 + B *7.5)/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
