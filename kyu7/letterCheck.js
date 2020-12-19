/* Write a function that checks if all the letters in the second
string are present in the first one at least once, regardless of
how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2.
Note: both strings are presented as a single argument in the form of an array.
 */

function letterCheck(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  let result = [[...firstWord], [...secondWord]];

  return result[1].every(char => result[0].includes(char));
}

