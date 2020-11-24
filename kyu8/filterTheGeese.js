/* Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter,
that takes an array of strings as an argument and returns a filtered array
containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated
in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
 */

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((el) => !geese.includes(el));

};

//second solution
/*
function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArray = [];
  for (let i =0; i<birds.length; i++) {
    if (!geese.includes(birds[i])) {
     newArray.push(birds[i]);
    }
  }
  return newArray;
};
 */