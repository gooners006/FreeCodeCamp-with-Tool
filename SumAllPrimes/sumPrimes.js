/**
 *
 *
 * @param {any} num
 * @returns
 */
function sumPrimes(num) {
  let total = 0;
  // a function to check if the number is a prime number
  function checkPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  // add all prime number that is smaller than the input number
  for (let j = 2; j <= num; j += 1) {
    if (checkPrime(j)) {
      total += j;
    }
  }
  return total;
}
export default sumPrimes;

sumPrimes(10);
