/* eslint-disable max-len */
/**
 * ! Sum Strings as Numbers from https://www.codewars.com/kata/5324945e2ece5e1f32000370
 * TODO: Given the string representations of two integers, return the string representation of the sum of those integers.
 * @example
 * solution('1','2') // => '3'
 * solution('123456789123456789123456789','123456789123456789123456789') // => '246913578246913578246913578'
 * @param {string} a
 * @param {string} b
 * @return {string|null}
 */
function sumStringsAsNumbers(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Both arguments should be strings');
  }
  if (!Number.isInteger(+a) || !Number.isInteger(+b)) {
    throw new Error(
        'Both arguments should be successfully translated into integers'
    );
  }

  if (Number(a) < 0 || Number(b) < 0) {
    throw new Error('Both arguments should be positive');
  }
  a = a === '' ? '0' : a;
  b = b === '' ? '0' : b;
  if (a === '0' && b === '0') return '0';

  const longestString = a.length > b.length ? a : a > b ? a : b;
  let sum = '';
  let addedNumber = 0;
  a = a
      .split('')
      .reverse()
      .join('');
  b = b
      .split('')
      .reverse()
      .join('');

  for (let i = 0; i < longestString.length; i++) {
    const charA = a[i] ? +a[i] : 0;
    const charB = b[i] ? +b[i] : 0;
    if (charA + charB + addedNumber >= 10) {
      sum = sum + String(charA + charB + addedNumber - 10);
      addedNumber = 1;
      if (i === longestString.length - 1) {
        sum = sum + '1';
      }
    } else {
      sum = sum + String(charA + charB + addedNumber);
      addedNumber = 0;
    }
  }
  sum = sum.split('');
  while (sum[sum.length - 1] === '0') {
    sum.pop();
  }
  sum = sum.reverse().join('');
  return sum;
}

module.exports = sumStringsAsNumbers;
