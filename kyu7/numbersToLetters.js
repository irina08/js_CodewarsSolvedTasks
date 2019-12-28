/* Given an array of numbers, you must return a string.
The numbers correspond to the letters of the alphabet in reverse order:
a=26, z=1 etc. You should also account for '!', '?' and ' ' that are
represented by '27', '28' and '29' respectively.
 */

function switcher(x){
    console.log(x);
    let s = 'zyxwvutsrqponmlkjihgfedcba!? ';
    let str = '';
    for(let i = 0; i < x.length; i++) {
        str += s.charAt(Number(x[i] - 1));
    }
    return str;
}