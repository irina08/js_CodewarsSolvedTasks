/*
reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
 */

function reverseVowels(str) {
  let result = str.split('');
  let temp;
  let a = result.length - 1;
  for (let i = 0; i < result.length; i++){
    for (let j = a; j > i; j--){
      if (/[aeiou]/gi.test(result[i])) {
        if (/[aeiou]/gi.test(result[j])){
          temp = result[i];
          result[i] = result[j];
          result[j] = temp;
          a = j - 1;
          break;
        }
      }
    }
  }
  return result.join('');
}