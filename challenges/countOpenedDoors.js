/* eslint-disable max-len */
/**
 * ! Doors in the School from https://www.codewars.com/kata/57c15d314677bb2bd4000017
 * * In the morning all the doors in the school are closed. The school is quite big: there are N doors.
 * * Then pupils start coming. It might be hard to believe, but all of them want to study! Also,
 * * there are exactly N children studying in this school, and they come one by one.
 * * When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open).
 * * Each student has their number, and each i-th student alters the status of every i-th door.
 * * For example: when the first child comes to the schools, he changes every first door (he opens all of them).
 * * The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on).
 * * Finally, when the last one – the n-th – comes to the school,
 * * he changes the status of each n-th door (there's only one such door, though).
 * TODO: You need to count how many doors are left opened after all the students have come.
 * ? or
 * ! Variant Rosetta 100 Doors from https://rosettacode.org/wiki/100_doors
 * TODO: What state are the doors in after the last pass?   Which are open, which are closed?
 * @example
 * solution(5) // => 2
 * @param {number} numDoors – the number of doors and students, n ∈ N, n ∈ [1, 100000]
 * @param {'number' | 'state'} option - output either quantity or array
 * @return {string|array} the number of opened doors, o ∈ N OR Array of doors
 */
function countOpenedDoors(numDoors, option = 'number') {
  if (typeof numDoors !== 'number') {
    throw new Error('Input should be a number');
  }
  if (!Number.isInteger(numDoors)) throw new Error('Number should be integer');
  if (numDoors <= 0) throw new Error('Number should more than 0');

  const openedDoors = Array.from({length: numDoors}, (el, i) => i + 1);
  const state = openedDoors.filter((el) => Number.isInteger(Math.sqrt(el)));
  if (option === 'number') {
    return state.length;
  } else {
    return state;
  }
}

module.exports = countOpenedDoors;
