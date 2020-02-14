/* Your job is to write a function which increments a string,
to create a new string.
If the string already ends with a number, the number should
be incremented by 1. If the string does not end with a number,
the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered.
 */

function incrementString(str) {
    if(isNaN(str.slice(-1))) {
        return `${str}1`;
    }
    else {
        let letters = str.split('').filter(char => isNaN(char)).join('');
        let numbers = str.split('').filter(num => !isNaN(num)).join('');
        //let letters = str.match(/[A-Z]{0,}/gi).filter(m => m !== '');
        //let numbers = str.match(/[0-9]{0,}/gi).filter(m => m !== '');

        let incrementedNum = +numbers + 1;
        if(numbers.length > incrementedNum.toString().length) {
            let zeros = '';
            for(let i = 0; i < numbers.length; i++) {
                zeros += '0';
            }
            return letters + (zeros + incrementedNum).slice(-numbers.length);
        }
        else {
            return letters + incrementedNum;
        }
    }
}