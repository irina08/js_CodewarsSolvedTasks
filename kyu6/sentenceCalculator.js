/* Calculate the total score (sum of the individual character scores)
of a sentence given the following score rules for each allowed group
of characters:
Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string
 */

function lettersToNumbers(s) {
  let total = 0;
  s.split('').map(el => {
    if (el.match(/[a-z]/)) total += el.charCodeAt() - 96;
    else if (el.match(/[A-Z]/)) total += (el.charCodeAt() - 64) * 2;
    else if (el.match(/[0-9]/)) total += el.charCodeAt() - 48;
    else total += 0;
  });
  return total;
}