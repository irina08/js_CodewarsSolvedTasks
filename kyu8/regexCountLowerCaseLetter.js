/*
Your task is simply to count the total number of lowercase letters in a string.
 */

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
}

/*Simple, remove the spaces from the string, then return the resultant string.
 */

function noSpace(x){
    return x.split(' ').join('');
}

/* Your goal is to create a function that removes the first and last
characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.
 */
function removeChar(str){
    str = str.split('');
    str.shift();
    str.pop();
    str = str.join('');
    return str;
};
