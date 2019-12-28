/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
 */

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/g.test(pin)
}

/* Write a function which takes a number and returns the corresponding
ASCII char for that value.
Example: get_char(65) # => 'A'
 */
function getChar(c){
    return String.fromCharCode(c);
}
