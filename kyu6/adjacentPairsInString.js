/*
Write a function countAdjacentPairs that counts the number of adjacent pairs
in a string. It should be case-insenstive. A word in this kata is a sequence
of non-whitespace characters enclosed by whitespace, so the string "dog dog."
contains the two words "dog" and "dog.", which differ. The occurence of two
 or more equal words next after each other count as one.
Example:
countAdjacentPairs "dog cat"       == 0
countAdjacentPairs "dog dog cat"   == 1
countAdjacentPairs "apple dog cat" == 0
countAdjacentPairs "pineapple apple dog cat" == 0
countAdjacentPairs "apple     apple dog cat" == 1
countAdjacentPairs "apple dog apple dog cat" == 0
countAdjacentPairs "dog dog dog dog dog dog" == 1
countAdjacentPairs "dog dog dog dog cat cat" == 2
countAdjacentPairs "cat cat dog dog cat cat" == 3
//returns 0
countAdjacentPairs('')
// returns 1
countAdjacentPairs('cat dog dog')
// returns 1 (The first pair has been matched, and will be ignored from then on).
countAdjacentPairs('dog dog dog')
// returns 2
countAdjacentPairs('cat cat dog dog cat')
 */
function countAdjacentPairs(searchString) {
    let obj = {};
    searchString
        .toLowerCase()
        .split(' ')
        .map(word => obj[word] = obj[word] ? obj[word]+1 : 1);
    return Object.values(obj).filter(val => val > 1).length;
}