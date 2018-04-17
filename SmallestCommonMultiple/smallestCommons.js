/* eslint no-param-reassign: 0 */
/**
 *
 *
 * @param {any} arr
 * @returns
 */
function smallestCommons(arr) {
  const newArr = [];
  // swap position of the 2 values if arr0>arr1
  if (arr[0] > arr[1]) {
    // use destructuring
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }

  for (let num = arr[0]; num <= arr[1]; num += 1) {
    newArr.push(num);
  }
  // find the greatest common divisor to use to calculate the least common multiple
  function gcd(a, b) {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    // now a is the gcd
    return a;
  }

  const lcm = newArr.reduce(
    (accumulator, currentValue) =>
      accumulator * currentValue / gcd(accumulator, currentValue),
    1
  );
  return lcm;
}

export default smallestCommons;

smallestCommons([1, 5]);
