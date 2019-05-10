/* eslint-disable max-len */
const shiftCiphers = require('./shiftCiphers');

describe('Decoding with shift algorithm', () => {
  test('Decoding with shift algorithm NaN -> Error expected', () => {
    expect(() => {
      shiftCiphers('str', '1');
    }).toThrowError('Argument should be a number');
  });

  test('Decoding with shift algorithm !integer -> Error expected', () => {
    expect(() => {
      shiftCiphers('str', 1.5);
    }).toThrowError('Argument should be an integer number');
  });

  test('Decoding with shift algorithm not a string -> Error expected', () => {
    expect(() => {
      shiftCiphers(['a', 'b', 'c'], 1);
    }).toThrowError('Argument should be a string');
  });

  test('Decoding with shift algorithm SERR PBQR PNZC -> FREE CODE CAMP', () => {
    expect(shiftCiphers('SERR PBQR PNZC', -13)).toBe('FREE CODE CAMP');
  });

  test('Decoding with shift algorithm SERR PBQR PNZC -> SERR PBQR PNZC', () => {
    expect(shiftCiphers('SERR PBQR PNZC', 26)).toBe('SERR PBQR PNZC');
  });

  test('Decoding with shift algorithm SeRR123 PBQR PNZc -> FrEE123 CODE CAMp', () => {
    expect(shiftCiphers('Serr PBQR PNZC!', -39)).toBe('Free CODE CAMP!');
  });

  test('Decoding with shift algorithm abcde -> yzabc', () => {
    expect(shiftCiphers('abcde', 2)).toBe('yzabc');
  });
});
