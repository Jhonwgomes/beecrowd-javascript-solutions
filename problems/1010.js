/**
 * Beecrowd Problem 1010 - Simple Calculate
 * https://www.beecrowd.com.br/judge/en/problems/view/1010
 *
 * Description:
 * Read the information of two purchased items.
 * Each line contains three values:
 * - Product code
 * - Number of units
 * - Price per unit
 *
 * Calculate the total amount to be paid.
 *
 * Formula:
 * TOTAL = (units1 * price1) + (units2 * price2)
 *
 * Output Format:
 * Print the total value to be paid using the following format:
 *
 * VALOR A PAGAR: R$ value
 *
 * The value must be printed with 2 digits after the decimal point.
 *
 * Example:
 * Input:
 * 12 1 5.30
 * 16 2 5.10
 *
 * Output:
 * VALOR A PAGAR: R$ 15.50
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const item1 = lines[0].split(" ");
const item2 = lines[1].split(" ");

const codeProduct1 = parseInt(item1[0]);
const unitsProduct1 = parseInt(item1[1]);
const priceUnit1 = parseFloat(item1[2]);

const codeProduct2 = parseInt(item2[0]);
const unitsProduct2 = parseInt(item2[1]);
const priceUnit2 = parseFloat(item2[2]);

const valorPagar = (unitsProduct1 * priceUnit1) + (unitsProduct2 * priceUnit2)

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);


