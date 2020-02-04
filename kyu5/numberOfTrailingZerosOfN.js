/* Write a program that will calculate the number of trailing zeros
in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
Be careful 1000! has 2568 digits...
Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
 */

function zeros (n) {
    //nonefficiente way
    /* let result = 0;
      for (let i = 5; i <= n; i += 5) {
          let number = i;
          while (number % 5 === 0) {
              number /= 5;
              result++;
          }
      }
      return result;
    */

    let result = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        result += n;
    }
    return result;
}