/* Write a function that will take in a string and return all the unpaired
characters (show up an odd number of times in the string) in the order they
were encountered as an array. In case of multiple options to choose from,
take the last occurence as the unpaired character.
Notes
A wide range of characters is used, and some of them may not render properly in your browser.
Your solution should be linear in terms of string length to pass the last test.
Examples
oddOneOut('Hello World')   ===  ["H", "e", " ", "W", "r", "l", "d"]
oddOneOut('Codewars')      ===  ["C", "o", "d", "e", "w", "a", "r", "s"]
oddOneOut('woowee')        ===  []
oddOneOut('wwoooowweeee')  ===  []
oddOneOut('racecar')       ===  ["e"]
oddOneOut('Mamma')         ===  ["M"]
oddOneOut('Mama')          ===  ["M", "m"]
 */

function oddOneOut(str) {
    let obj = {};
    let result = [];
    for(let i = 0; i < str.length; i++) {
        if(!obj[str[i]]) obj[str[i]] = 1;
        else delete obj[str[i]];
    }

    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]] && str.lastIndexOf(str[i]) === i)
            result.push(str[i]);
    }
    return result;
}