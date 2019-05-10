/* eslint-disable max-len */
/**
 * ! JavaScript Algorithms and Data Structures Projects: Caesars Cipher
 * ! from https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
 * * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * * In a shift cipher the meanings of the letters are shifted by some set amount.
 * TODO: Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 * @example
 * solution('Serr PBQR PNZC!', -13) // should decode to 'Free CODE CAMP!'
 * @param {string} str – string to decode
 * @param {number} shift - amount of chars to shift
 * @return {string} decoded string
 */
function shiftCipher(str, shift = 0) {
  if (typeof shift !== 'number') {
    throw new Error('Argument should be a number');
  }
  if (!Number.isInteger(shift)) {
    throw new Error('Argument should be an integer number');
  }
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  let decodedString = '';

  shift = shift % 26;

  if (shift === 0) {
    decodedString = str;
  } else {
    const dictionary = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: '',
      m: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      w: '',
      x: '',
      y: '',
      z: '',
    };

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const leftShift = alphabet.slice(0, -shift);
    const rightShift = alphabet.slice(-shift);
    alphabet = rightShift + leftShift;

    let i = 0;
    for (const property in dictionary) {
      if (dictionary.hasOwnProperty(property)) {
        dictionary[property] = alphabet[i];
        i = i + 1;
      }
    }

    decodedString = str
        .split('')
        .map((char) =>
        !dictionary[char.toLowerCase()]
          ? char
          : /[A-Z]/.test(char)
          ? dictionary[char.toLowerCase()].toUpperCase()
          : dictionary[char.toLowerCase()]
        )
        .join('');
  }

  return decodedString;
}

module.exports = shiftCipher;
