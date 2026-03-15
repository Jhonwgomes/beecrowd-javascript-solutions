/**
 * Beecrowd Problem 1008 - Salary
 * https://judge.beecrowd.com/en/problems/view/1008
 *
 * Description:
 * Read an employee's number, the number of hours worked in a month,
 * and the amount received per hour.
 *
 * Calculate the employee's salary based on the number of hours worked
 * and the hourly wage.
 *
 * Formula:
 * SALARY = hoursWorked * hourlyWage
 *
 * Output Format:
 * Print the employee number and the salary in the following format:
 *
 * NUMBER = employeeNumber
 * SALARY = U$ salary
 *
 * The salary must be printed with 2 digits after the decimal point.
 *
 * Example:
 * Input:
 * 25
 * 100
 * 5.50
 *
 * Output:
 * NUMBER = 25
 * SALARY = U$ 550.00
 */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const employeeNumber = parseInt(lines[0]);
const hoursWorked = parseInt(lines[1]);
const valueHours = parseFloat(lines[2]);

const salary = hoursWorked*valueHours;

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
