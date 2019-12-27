/* Given a string, you have to return a string in which each character
(case-sensitive) is repeated once.
doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "
 */
function doubleChar(str) {
    return str.split('').map((char) => `${char}${char}`).join('');
}


/* Write a function to convert a name into initials. This kata strictly takes
two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
 */
function abbrevName(name){
    let nameArray = name.split(' ');
    return (nameArray[0][0].toUpperCase() + '.' + nameArray[1][0].toUpperCase());
}