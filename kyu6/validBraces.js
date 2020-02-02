/* Write a function that takes a string of braces, and determines if the order of
the braces is valid. It should return true if the string is valid, and false if it's invalid.
All input strings will be nonempty, and will only consist of parentheses, brackets
and curly braces: ()[]{}.
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */

function validBraces(braces){
    let array = [];
    for(let i = 0; i < braces.length; i++) {
        if(braces[i] === "(") {
            array.unshift(")");
        } else if (braces[i] === "{") {
            array.unshift("}");
        } else if (braces[i] === "[") {
            array.unshift("]");
        } else if (braces[i] !== array[0]){
            return false;
        } else {
            array.shift();
        }
    }
    return array.length === 0;
}