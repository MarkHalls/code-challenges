// https://leetcode.com/problems/divide-two-integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const originalDividend = dividend;
  const originalDivisor = divisor;

  let counter = 0;
  let total = 0;
  let result = 0;

  if (divisor < 0 && dividend > 0) {
    dividend = dividend - dividend - dividend;
  }

  if (dividend < 0 && divisor > 0) {
    divisor = divisor - divisor - divisor;
  }

  while (divisor > 0 && total <= dividend) {
    if (total + total > dividend) {
      dividend = dividend - total;
      total = 0;
      result += counter;
      counter = 0;
    } else if (counter === 0) {
      total += divisor;
      counter++;
    } else {
      total += total;
      counter += counter;
    }
  }

  while (divisor < 0 && total >= dividend) {
    if (total + total < dividend) {
      dividend = dividend - total;
      total = 0;
      result += counter;
      counter = 0;
    } else if (counter === 0) {
      total += divisor;
      counter++;
    } else {
      total += total;
      counter += counter;
    }
  }

  if (divisor > 0 || (originalDivisor < 0 && originalDividend < 0)) {
    if (result > 2147483647) {
      return 2147483647;
    } else {
      return result;
    }
  } else {
    return result - result - result;
  }
};
