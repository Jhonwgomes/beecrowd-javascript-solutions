/**
 * Beecrowd Problem 1011 - Sphere
 * https://judge.beecrowd.com/en/problems/view/1011
 *
 * Description:
 * Read a floating-point number representing the radius (R) of a sphere.
 * Calculate the volume of the sphere using the formula:
 *
 * VOLUME = (4/3) * π * R³
 *
 * In this problem, π (pi) must be considered as 3.14159.
 *
 * Output Format:
 * Print the volume using the following format:
 *
 * VOLUME = value
 *
 * The result must be printed with 3 digits after the decimal point.
 *
 * Example:
 * Input:
 * 3
 *
 * Output:
 * VOLUME = 113.097
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const radius = parseFloat(lines[0]);
const PI = 3.14159;

const volume = (4.0/3) * PI * (radius**3);

console.log(`VOLUME = ${volume.toFixed(3)}`);