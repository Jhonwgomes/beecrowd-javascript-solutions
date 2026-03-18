/**
 * Beecrowd Problem 1013 - The Greatest
 * https://judge.beecrowd.com/en/problems/view/1013
 *
 * Description:
 * Read three integer values (A, B and C) and determine the greatest value among them.
 *
 * The problem requires the use of the mathematical formula to determine the greatest
 * value between two numbers:
 *
 *     greatest = (a + b + |a - b|) / 2
 *
 * Where |a - b| represents the absolute value of the difference between a and b.
 *
 * First, calculate the greatest value between A and B. Then use the same formula
 * to compare this result with C, obtaining the greatest value among the three numbers.
 *
 * Output:
 * Print the greatest value followed by the message:
 *
 *     "eh o maior"
 *
 * Example:
 * Input:
 * 7 14 106
 *
 * Output:
 * 106 eh o maior
 */

const [firstValue, secondValue,thirdValue ] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(" ").map(Number);

const biggerAB = (firstValue+secondValue+Math.abs(firstValue-secondValue))/2;

const biggest = (biggerAB+thirdValue+Math.abs(biggerAB-thirdValue))/2;

console.log(`${biggest} eh o maior`);