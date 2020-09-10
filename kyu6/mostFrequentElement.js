/*
Write function that takes array as an argument and returns element
that occurs the most times. If there are multiple such elements,
return all elements as an array.
 */

function mostFrequentElement(arr){
  let obj = {};
  arr.forEach(el => {
    obj[el] ? obj[el] += 1 : obj[el] = 1;
  });

  let arrValue = Object.values(obj);
  let max = Math.max(...arrValue);

  let result = [];
  for(let key in obj) {
    if(obj[key] === max) result.push(+key);
  }
  return result;
}