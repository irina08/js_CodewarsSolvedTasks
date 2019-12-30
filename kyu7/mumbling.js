/* Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only
letters from a..z and A..Z.
 */

function accum(s) {
    return s.split("")
        .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
        .join("-");
}