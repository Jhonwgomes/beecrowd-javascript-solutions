/**
 * Beecrowd Problem 1007 - Difference
 * https://judge.beecrowd.com/en/problems/view/1007
 *
 * Description:
 * Read four integer values (A, B, C, and D).
 * Calculate the difference between the product of A and B
 * and the product of C and D.
 *
 * Formula:
 * DIFFERENCE = (A * B) - (C * D)
 *
 * Output Format:
 * Print the result in the following format:
 * DIFERENCA = result
 *
 * Example:
 * Input:
 * 5
 * 6
 * 7
 * 8
 *
 * Output:
 * DIFERENCA = -26
 */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const C = parseInt(lines[2]);
const D = parseInt(lines[3]);

const DIFERENCA = (A*B - C*D);

console.log(`DIFERENCA = ${DIFERENCA}`);