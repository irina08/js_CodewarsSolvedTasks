/* Given three arrays of integers, return the sum of elements
that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Array lengths in random tests run from 5000 to 10000 elements.
 */

function common(a,b,c){
  let sum = 0;
  let arrayA = {};
  let arrayB = {};
  let arrayC = {};
  a.map(el => arrayA[el] ? arrayA[el]++ : arrayA[el] = 1);
  b.map(el => arrayB[el] ? arrayB[el]++ : arrayB[el] = 1);
  c.map(el => arrayC[el] ? arrayC[el]++ : arrayC[el] = 1);
  for (let key in arrayA) {
    if (arrayA[key] && arrayB[key] && arrayC[key]) {
      let number = Math.min(arrayA[key], arrayB[key], arrayC[key]);
      sum += number * +key;
    }
  }
  return sum;
}