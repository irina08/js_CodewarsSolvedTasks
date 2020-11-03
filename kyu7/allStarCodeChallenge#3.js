/* Create a function, called removeVowels (or remove_vowels),
that takes a string argument and returns that same string with
all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
 */

var removeVowels = function(str){
  return str.replace(/[aeiou]/gi, '');
}

/*
var removeVowels = function(str){
  const arr = str.split('')

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'a'){
      arr[i] = ''
    }else if (arr[i] === 'e'){
      arr[i] = ''
    }else if (arr[i] === 'i'){
      arr[i] = ''
    }else if (arr[i] === 'o'){
      arr[i] = ''
    }else if (arr[i] === 'u'){
      arr[i] = ''
    }
  }

  const newString = arr.join('')
  return newString;
}
 */