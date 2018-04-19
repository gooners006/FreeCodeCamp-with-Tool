/* eslint no-shadow: 0 */
/* eslint array-callback-return: 0 */
/**
 *
 *
 * @param {any} arr
 * @returns
 */
function steamrollArray(arr) {
  const newArr = [];
  // I'm a steamroller, baby
  const anh = arr => {
    arr.map(e => {
      // if the element isn't an array then push it in to the new array
      if (!Array.isArray(e)) {
        newArr.push(e);
      } else {
        // otherwise use recursive
        anh(e);
      }
    });
  };
  anh(arr);
  return newArr;
}
export default steamrollArray;
steamrollArray([1, [2], [3, [[4]]]]);
