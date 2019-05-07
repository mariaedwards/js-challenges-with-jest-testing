/* eslint-disable max-len */

const decodeRomanNumberWithReduce = require('./decodeRomanNumberWithReduce');

describe('Decoding Roman number Var 2', () => {
  test('Decoding Roman number Var 2 XXI -> 21', () => {
    expect(decodeRomanNumberWithReduce('XXI')).toBe(21);
  });

  test('Decoding Roman number Var 2 III -> 3', () => {
    expect(decodeRomanNumberWithReduce('III')).toBe(3);
  });

  test('Decoding Roman number Var 2 MCMXC -> 1990', () => {
    expect(decodeRomanNumberWithReduce('MCMXC')).toBe(1990);
  });

  test('Decoding Roman number Var 2 MMVIII -> 2008', () => {
    expect(decodeRomanNumberWithReduce('MMVIII')).toBe(2008);
  });

  test('Decoding Roman number Var 2 MDCLXVI -> 1666', () => {
    expect(decodeRomanNumberWithReduce('MDCLXVI')).toBe(1666);
  });

  test('Decoding Roman number Var 2 MM -> 2000', () => {
    expect(decodeRomanNumberWithReduce('MM')).toBe(2000);
  });

  test('Decoding Roman number Var 2 MCMLIV -> 1954', () => {
    expect(decodeRomanNumberWithReduce('MCMLIV ')).toBe(1954);
  });

  test('Decoding Roman number Var 2 "" -> null', () => {
    expect(decodeRomanNumberWithReduce('')).toBe(null);
  });

  test('Decoding Roman number Var 2 "123" -> null', () => {
    expect(decodeRomanNumberWithReduce('123')).toBe(null);
  });

  test('Decoding Roman number Var 2 "IIIX" -> null', () => {
    expect(decodeRomanNumberWithReduce('IIIX')).toBe(null);
  });

  test('Decoding Roman number Var 2 "IIIIIIIIII" -> null', () => {
    expect(decodeRomanNumberWithReduce('IIIIIIIIII')).toBe(null);
  });
});
