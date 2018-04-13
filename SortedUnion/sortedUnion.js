/**
 *
 *
 * @param {any} arr
 * @returns
 */
function uniteUnique(...arr) {
  const set1 = new Set();
  arr.map(x => x.map(y => set1.add(y)));
  return Array.from(set1);
}
export default uniteUnique;
