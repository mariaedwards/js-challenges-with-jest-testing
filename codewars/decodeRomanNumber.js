/* eslint-disable max-len */
/**
 * ! Roman Numerals Decoder from https://www.codewars.com/kata/51b6249c4612257ac0000005
 * ! solution 1
 * TODO: Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
 * @example
 * solution('XXI'); // should return 21
 * @param {string} romanNumber
 * @return {number|null}
 */
function decodeRomanNumber(romanNumber) {
  romanNumber = romanNumber.trim();
  // validation of a Roman number from https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
  const isValid = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(
      romanNumber
  );
  if (!isValid) return null;

  // Roman numbers
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumberToDecimal = romanNumber
      .split('')
      .map((char) => dictionary[char]);

  let decodedNumber = null;

  let i = 0;
  while (i < romanNumberToDecimal.length) {
    const currentNumber = romanNumberToDecimal[i];
    const nextNumber = romanNumberToDecimal[i + 1]
      ? romanNumberToDecimal[i + 1]
      : 0;

    const currentResult =
      currentNumber >= nextNumber ? currentNumber : nextNumber - currentNumber;
    i = currentNumber >= nextNumber ? i + 1 : i + 2;

    decodedNumber = decodedNumber + currentResult;
  }

  return decodedNumber;
}

module.exports = decodeRomanNumber;
