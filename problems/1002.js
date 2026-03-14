/**
 * Beecrowd Problem 1002 - Area of a Circle
 * https://judge.beecrowd.com/en/problems/view/1002
 *
 * Description:
 * Read the value of the radius (R) of a circle and calculate its area.
 *
 * Formula:
 * area = π * R²
 *
 * In this problem, π = 3.14159.
 *
 * Output:
 * Print the area formatted as:
 * A=area
 * with 4 decimal places.
 */


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const R = parseFloat(lines[0]);
const n = 3.14159;
const A = n*(R*R);

console.log(`A=${A.toFixed(4)}`);
