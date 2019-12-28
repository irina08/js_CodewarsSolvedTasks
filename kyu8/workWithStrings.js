/* Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him
slightly different. She added a special case to her function,
but she made a mistake.
 */
function greet(name){
    if(name === "Johnny") return "Hello, my love!";
    else return "Hello, " + name + "!";

}

/* Template Strings
Your task is to return the correct string using the Template String Feature.
Input: Two Strings, no validation is needed.
Output: You must output a string containing the two strings with the word ```' are '```
 */
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
}

/* Make a function that will return a greeting statement that uses an input;
your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may
not execute properly]
 */
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

/* You are given a list of character sequences as a comma
separated string. Write a function which returns another string
containing all the character sequences except the first and
the last ones. If the input string is empty, or the removal of the
first and last items would cause the string to be empty, return a null value.
 */
function array(arr){
   return arr.split(',').slice(1, -1).join(' ') || null;
}
