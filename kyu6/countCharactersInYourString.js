/* The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
 */

function count (string) {
  //console.log(string)
  string = string.toLowerCase().replace(/ /g, '');
  //console.log(string)
  let obj = {};
  for (let char of string) {
    if(obj[char])
      obj[char]++;
    else
      obj[char] = 1;
  }

  /*
  for(let i = 0; i < string.length; i++) {
    if(obj[string[i]])
      obj[string[i]]++;
    else
      obj[string[i]] = 1;
  }
  console.log(obj)
*/
  return obj;
}