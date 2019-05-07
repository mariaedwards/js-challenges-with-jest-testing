/* eslint-disable max-len */
const decodeRomanNumber = require('./decodeRomanNumber');

describe('Decoding Roman number', () => {
  test('Decoding Roman number XXI -> 21', () => {
    expect(decodeRomanNumber('XXI')).toBe(21);
  });

  test('Decoding Roman number III -> 3', () => {
    expect(decodeRomanNumber('III')).toBe(3);
  });

  test('Decoding Roman number MCMXC -> 1990', () => {
    expect(decodeRomanNumber('MCMXC')).toBe(1990);
  });

  test('Decoding Roman number MMVIII -> 2008', () => {
    expect(decodeRomanNumber('MMVIII')).toBe(2008);
  });

  test('Decoding Roman number MDCLXVI -> 1666', () => {
    expect(decodeRomanNumber('MDCLXVI')).toBe(1666);
  });

  test('Decoding Roman number MM -> 2000', () => {
    expect(decodeRomanNumber('MM')).toBe(2000);
  });

  test('Decoding Roman number MCMLIV -> 1954', () => {
    expect(decodeRomanNumber('MCMLIV ')).toBe(1954);
  });

  test('Decoding Roman number "" -> null', () => {
    expect(decodeRomanNumber('')).toBe(null);
  });

  test('Decoding Roman number "123" -> null', () => {
    expect(decodeRomanNumber('123')).toBe(null);
  });

  test('Decoding Roman number "IIIX" -> null', () => {
    expect(decodeRomanNumber('IIIX')).toBe(null);
  });

  test('Decoding Roman number "IIIIIIIIII" -> null', () => {
    expect(decodeRomanNumber('IIIIIIIIII')).toBe(null);
  });
});
