/**
 * Beecrowd Problem 1003 - Simple Sum
 * https://judge.beecrowd.com/en/problems/view/1003
 *
 * Description:
 * Read two integer values, calculate their sum, and print the result.
 *
 * Output Format:
 * The output must be printed in the format:
 * SOMA = result
 *
 * Example:
 * Input:
 * 30
 * 10
 *
 * Output:
 * SOMA = 40
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

SOMA = A+B;
console.log(`SOMA = ${SOMA}`);
