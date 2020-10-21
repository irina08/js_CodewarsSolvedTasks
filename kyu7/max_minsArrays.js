/* you will be given an array of unique elements, and your task is to
rerrange the values so that the first max value is followed by the
first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and
the second min is 10 and so on.
 */

function solve(arr){
  //console.log(arr);
  let result = [];
  arr.sort((a,b) => a - b);
  //console.log(arr);
  if(arr.length % 2 === 0) {
    for(let i = 0, j = arr.length - 1; i < (arr.length / 2); i++, j--) {
      result.push(arr[j]);
      result.push(arr[i]);
    }
  }
  else {
    let middle = Math.round((arr. length - 1) / 2);
    for(let i = 0, j = arr.length - 1; i < middle; i++, j--) {
      result.push(arr[j]);
      result.push(arr[i]);
    }
    result.push(arr[middle]);
  }
  //console.log(result);
  return result;
};

