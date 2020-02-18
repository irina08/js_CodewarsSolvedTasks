/* Given the string representations of two integers, return the
string representation of the sum of those integers.
For example:
sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters
besides the ten numerals "0" to "9".
 */

function sumStrings(a,b) {
    if (a.length < b.length) {
        a = '0'.repeat(b.length-a.length) + a;
    } else if (b.length < a.length) {
        b = '0'.repeat(a.length-b.length) + b;
    }

    a = a.split('').reverse().map(val=>+val);
    b = b.split('').reverse().map(val=>+val);;

    let balance = 0;
    let c = a.map((el, index) => {
        let sum = el + b[index] + balance;
        if( sum > 9) {
            balance = 1;
        } else {
            balance = 0;
        }
        return sum % 10;
    });

    if(balance) {
        c.push(1);
    }
    c = c.reverse().join('');
    return c.replace(/^0+/, '');
}