/* Write an algorithm that will identify valid IPv4 addresses
in dot-decimal format. IPs should be considered valid if they
consist of four octets, with values between 0 and 255, inclusive.
Input to the function is guaranteed to be a single string.
Examples
Valid inputs:
1.2.3.4
123.45.67.89

Invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
 */

function isValidIP(str) {
    return (/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(str));

}