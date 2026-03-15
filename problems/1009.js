/**
 * Beecrowd Problem 1009 - Salary with Bonus
 * https://judge.beecrowd.com/en/problems/view/1009
 *
 * Description:
 * Read a seller's name, their fixed salary, and the total value of sales
 * made during the month.
 *
 * The seller receives a bonus equal to 15% of the total sales.
 *
 * Calculate the total salary, which is the fixed salary plus the bonus.
 *
 * Formula:
 * TOTAL = fixedSalary + (totalSales * 0.15)
 *
 * Output Format:
 * Print the total salary using the following format:
 * TOTAL = R$ value
 *
 * The value must be printed with 2 digits after the decimal point.
 *
 * Example:
 * Input:
 * JOAO
 * 500.00
 * 1230.30
 *
 * Output:
 * TOTAL = R$ 684.54
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const sellerName = lines[0];
const salary = parseFloat(lines[1]);
const salesTotal = parseFloat(lines[2]);

const salaryTotal = salary + salesTotal*0.15;

console.log(`TOTAL = R$ ${salaryTotal.toFixed(2)}`);