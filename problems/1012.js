/**
 * Beecrowd Problem 1012 - Area
 * https://judge.beecrowd.com/en/problems/view/1012
 *
 * Description:
 * Read three floating-point values A, B, and C. Then calculate and print
 * the areas of five geometric shapes using the following formulas:
 *
 * 1) TRIANGLE:
 *    Area = (A * C) / 2
 *
 * 2) CIRCLE:
 *    Area = π * C²
 *    (π must be considered as 3.14159)
 *
 * 3) TRAPEZOID:
 *    Area = ((A + B) * C) / 2
 *
 * 4) SQUARE:
 *    Area = B²
 *
 * 5) RECTANGLE:
 *    Area = A * B
 *
 * Output Format:
 * Print the results in the following format:
 *
 * TRIANGULO: value
 * CIRCULO: value
 * TRAPEZIO: value
 * QUADRADO: value
 * RETANGULO: value
 *
 * Each value must be printed with 3 digits after the decimal point.
 *
 * Example:
 * Input:
 * 3.0 4.0 5.2
 *
 * Output:
 * TRIANGULO: 7.800
 * CIRCULO: 84.949
 * TRAPEZIO: 18.200
 * QUADRADO: 16.000
 * RETANGULO: 12.000
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const entrada = lines[0].split(" ");

const A = parseFloat(entrada[0]);
const B = parseFloat(entrada[1]);
const C = parseFloat(entrada[2]);

const PI = 3.14159;

const areaTriangle = (A * C )/2;
const areaCircle = PI * (C **2);
const areaTrapezoid = ((A + B) * C) /2;
const areaSquare = B **2  ;
const areaRectangle = A * B;

console.log(`TRIANGULO: ${areaTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${areaCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezoid.toFixed(3)}`);
console.log(`QUADRADO: ${areaSquare.toFixed(3)}`);
console.log(`RETANGULO: ${areaRectangle.toFixed(3)}`);


