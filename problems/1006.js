/**
 *  Beecrowd Problem 1006 - Average 2
 * https://judge.beecrowd.com/en/problems/view/1006
 *
 * Description:
 * Read three floating-point numbers (A, B, and C) and calculate their weighted average.
 *
 * Weights:
 * A has weight 2
 * B has weight 3
 * C has weight 5
 *
 * Formula:
 * MEDIA = (A * 2 + B * 3 + C * 5) / 10
 *
 * Output Format:
 * Print the result in the following format:
 * MEDIA = result
 *
 * The result must be displayed with 1 digit after the decimal point.
 *
 * Example:
 * Input:
 * 5.0
 * 6.0
 * 7.0
 *
 * Output:
 * MEDIA = 6.3
 **/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

MEDIA = (A * 2 + B * 3 + C * 5)/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);