/* Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  let result = [];
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i]!='?' && array[i]!='!') {
      let word = array[i];
      let letter = word.charAt(0);
      let newWord = word.slice(1) + letter + "ay";
      result.push(newWord);
    } else {
      result.push(array[i]);
    }
  }
  return result.join(" ");
}

function pigIt(str) {
  str = str.trim().split(/\s{1,}/);
  return str.map(val => {
    if (/^[A-Za-z]+$/.test(val)) {
      return `${val.slice(1)}${val.slice(0, 1)}ay`;
    }
    return val;
  }).join(' ');
}
