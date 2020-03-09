/* Complete function splitOddAndEven, accept a number n(n>0), return an array
that contains the continuous parts of odd or even digits.
Please don't worry about digit 0, it won't appear ;-)

splitOddAndEven(123)  ===  [1,2,3]
splitOddAndEven(223)  ===  [22,3]
splitOddAndEven(111)  ===  [111]
splitOddAndEven(13579)  ===  [13579]
splitOddAndEven(135246)  ===  [135,246]
splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
 */

function splitOddAndEven(n) {
  let str = n.toString();
  let array = [];
  let a = '';
  for (let i = 0; i < str.length; i++){
    if (+str[i]%2 === 0){
      if (+str[i+1]%2 !== 0 || i === str.length - 1){
        a += str[i];
        array.push(a);
        a = '';
      } else a += str[i];
    }
    if (+str[i]%2 !== 0){
      if (+str[i+1]%2 === 0 || i === str.length - 1){
        a += str[i];
        array.push(a);
        a = '';
      } else a += str[i];
    }
  } return array.map(el => +el);
}