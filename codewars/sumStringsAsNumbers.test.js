/* eslint-disable max-len */
const sumStringsAsNumbers = require('./sumStringsAsNumbers');

describe('Sum Strings As Numbers', () => {
  test('Sum Strings As Numbers "1", "2" -> "3"', () => {
    expect(sumStringsAsNumbers('1', '2')).toBe('3');
  });

  test('Sum Strings As Numbers "123456789123456789123456789", "123456789123456789123456789" -> "246913578246913578246913578"', () => {
    expect(
        sumStringsAsNumbers(
            '123456789123456789123456789',
            '123456789123456789123456789'
        )
    ).toBe('246913578246913578246913578');
  });

  test('Sum Strings As Numbers "246913578246913578246913578", "1" -> "246913578246913578246913579"', () => {
    expect(sumStringsAsNumbers('246913578246913578246913578', '1')).toBe(
        '246913578246913578246913579'
    );
  });

  test('Sum Strings As Numbers "", "1" -> "1"', () => {
    expect(sumStringsAsNumbers('', '1')).toBe('1');
  });

  test('Sum Strings As Numbers "2", "" -> "2"', () => {
    expect(sumStringsAsNumbers('2', '')).toBe('2');
  });

  test('Sum Strings As Numbers "2.5", "5.5" -> Error expected', () => {
    expect(() => {
      sumStringsAsNumbers('2.52', '5.5');
    }).toThrowError(
        'Both arguments should be successfully translated into integers'
    );
  });

  test('Sum Strings As Numbers false, "5.5" -> Error expected', () => {
    expect(() => {
      sumStringsAsNumbers(false, '5.5');
    }).toThrowError('Both arguments should be strings');
  });

  test('Sum Strings As Numbers "200", "-1" -> Error expected', () => {
    expect(() => {
      sumStringsAsNumbers('200', '-1');
    }).toThrowError('Both arguments should be positive');
  });

  test('Sum Strings As Numbers "", "" -> 0', () => {
    expect(sumStringsAsNumbers('', '')).toBe('0');
  });
});
