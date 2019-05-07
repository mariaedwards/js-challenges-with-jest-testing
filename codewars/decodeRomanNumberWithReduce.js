/* eslint-disable max-len */
/**
 * ! Roman Numerals Decoder from https://www.codewars.com/kata/51b6249c4612257ac0000005
 * ! solution 2: with String.prototype.match and Array.prototype.reduce
 * TODO: Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
 * @example
 * solution('XXI'); // should return 21
 * @param {string} romanNumber
 * @return {number|null}
 */
function decodeRomanNumberWithReduce(romanNumber) {
  romanNumber = romanNumber.trim();
  // validation of a Roman number from https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
  const isValid = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(
      romanNumber
  );
  if (!isValid) return null;

  const dictionary = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const decodedNumber = romanNumber
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((sum, romanNumber) => sum + dictionary[romanNumber], 0);

  return decodedNumber;
}

module.exports = decodeRomanNumberWithReduce;
