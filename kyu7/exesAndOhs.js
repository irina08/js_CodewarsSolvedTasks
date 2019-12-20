/*XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let countX = 0;
    let countO = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'x') countX++;
        if (str.charAt(i) === 'o') countO++;
    }
    if ((countX === countO) || (!countX && !countO)) return true;
    return false;
}