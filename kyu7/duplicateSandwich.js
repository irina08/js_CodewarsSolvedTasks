/* In this kata you will be given a list consisting of unique elements
except for one thing that appears twice.

Your task is to output a list of everything in between both occurrences
of this element in the list.

Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"

Notes
All elements will be the same datatype.
All used elements will be primitive.
 */

function duplicateSandwich(a) {
  for (let i = 0; i < a.length; i++){
    let firstInd = a.indexOf(a[i]);
    let lastInd = a.lastIndexOf(a[i]);
    if (firstInd !== lastInd)
      return a.slice(firstInd + 1,lastInd);
  }
}

/*
const duplicateValue = array => array.find((value) => (
  array.indexOf(value) !== array.lastIndexOf(value)
))

function duplicateSandwich (array) {
  const duplicateWord = duplicateValue([...array])

  const firstOccurrence = array.indexOf(duplicateWord)
  const lastOccurrence = array.lastIndexOf(duplicateWord)

  return array.slice(firstOccurrence + 1, lastOccurrence)
}
 */


/*
function duplicateSandwich(a) {
  for (var i = 0; i < a.length; i++) {
    var num1 = a[i];

    for (var j = i + 1; j < a.length; j++) {
      var num2 = a[j];

      if (num2 === num1) {
        return a.slice(i + 1, j);
      }
    }
  }
  return [];
}
 */

