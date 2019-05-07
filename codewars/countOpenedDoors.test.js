/* eslint-disable max-len */
const countOpenedDoors = require('./countOpenedDoors');

describe('Number of Opened Doors', () => {
  test('Number of Opened Doors 5 -> 2', () => {
    expect(countOpenedDoors(5)).toBe(2);
  });

  test('Number of Opened Doors 100 -> 10', () => {
    expect(countOpenedDoors(100, 'number')).toBe(10);
  });

  test('Number of Opened Doors State 100 -> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]', () => {
    expect(countOpenedDoors(100, 'state')).toEqual(
        expect.arrayContaining([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
    );
  });

  test('Number of Opened Doors State 100 -> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100], length 10', () => {
    expect(countOpenedDoors(100, 'state')).toHaveLength(10);
  });

  test('Number of Opened Doors State 5 -> [1, 4]', () => {
    expect(countOpenedDoors(5, 'state')).toEqual(
        expect.arrayContaining([1, 4])
    );
  });

  test('Number of Opened Doors State 5 -> [1, 4], length 2', () => {
    expect(countOpenedDoors(5, 'state')).toHaveLength(2);
  });

  test('Number of Opened Doors "5" -> Error expected', () => {
    expect(() => {
      countOpenedDoors('5');
    }).toThrowError('Input should be a number');
  });

  test('Number of Opened Doors 5.5 -> Error expected', () => {
    expect(() => {
      countOpenedDoors(5.5);
    }).toThrowError('Number should be integer');
  });

  test('Number of Opened Doors 0 -> Error expected', () => {
    expect(() => {
      countOpenedDoors(0);
    }).toThrowError('Number should more than 0');
  });
});
