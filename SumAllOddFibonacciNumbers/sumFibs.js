/**
 *
 *
 * @param {any} num
 * @returns
 */
function sumFibs(num) {
  let f1 = 0;
  let f2 = 1;
  const arr = [];
  while (f2 <= num) {
    if (f2 % 2 === 1) {
      arr.push(f2);
    }
    const next = f1 + f2;
    f1 = f2;
    f2 = next;
  }
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return total;
}

export default sumFibs;

sumFibs(20);
