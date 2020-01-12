/*
Create a function isAlt() that accepts a string as an argument and validates
 whether the vowels (a, e, i, o, u) and consonants are in alternate order.
isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
 */
/*
//with regular expression
function isAlt(word) {
  return !(/[^aeiou]{2,}|[aeiou]{2,}/i.test(word));
}
*/

function isAlt(word) {
    let vowels = "aeiouAEIOU";
    word = word.toLowerCase();

    for (let i = 0; i < word.length - 1; i++) {
        if (vowels.indexOf(word[i]) > -1) {
            if (vowels.indexOf(word[i + 1]) > -1) return false;
        } else {
            if (vowels.indexOf(word[i + 1]) === -1) return false;
        }
    }
    return true;
}