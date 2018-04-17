/**
 *
 *
 * @param {any} arr
 * @param {any} func
 * @returns
 */
function findElement(arr, func) {
  const num = arr.filter(n => func(n))[0];
  return num;
}
export default findElement;

findElement([1, 3, 5, 9], num => num % 2 === 0);
