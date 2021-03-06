/*Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
 */
function solution(str) {
    let array = [];
    for (let i = 0; i < str.length; i = i + 2) {
        if (i === str.length - 1) {
            array.push(str.substr(i, 2) + '_');
        } else {
            array.push(str.substr(i, 2));
        }
    }
    return array;
}
