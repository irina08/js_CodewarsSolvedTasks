/*
Write a function that counts the letters in a string in object notation.
Input
A string. e.g. "Hello World" If input is anything other than a string,
it should return null
Output
Should be an object of the letters and how often they show up. e.g.
{ d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
Special: Case-insensitive. So convert all letters to lowercase
Ignore whitespace. Ignore anything not a-z
Challenge input:
"Hello World" // { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
 */

function countLetters (str) {
    console.log(str);
    if(typeof str !== 'string') return null;
    let obj = {};
    str = str.toLowerCase().replace(/[^a-zA-Z]/g,'');
    console.log(str);
    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    console.log(obj);
    return obj;
}