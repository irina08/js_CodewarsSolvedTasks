/* Complete the solution so that it reverses the string value passed into it.
solution('world'); // returns 'dlrow'
 */

solution = (str) => str.split('').reverse().join('');

/*The first century spans from the year 1 up to and including
the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
 */

const century = year =>
    Math.ceil(year / 100);

/*Given a number n, return the number of positive odd numbers below n, EASY!
oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
 */

function oddCount(n){
    return Math.floor(n / 2);
}