/* In this Kata, you will be given a string and your task is to return
the most valuable character. The value of a character is the difference
between the index of its last occurrence and the index of its first
occurrence. Return the character that has the highest value. If there is
a tie, return the lexicographically lowest character.
All inputs will be lower case.
For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character.
Return lexicographically lowest.
solve("axyzxyz") = 'x'
 */
function solve(st) {
    let obj = {};
    st.split('').map(key => obj[key] = Math.abs(st.indexOf(key) - st.lastIndexOf(key)));
    return Object.entries(obj).sort((a,b) => b[1] - a[1] ||
        a[0] > b[0])[0][0];

}