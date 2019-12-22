/* Nathan loves cycling.
Because Nathan knows it is important to stay hydrated,
he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return
the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
 */
const litres = time =>
    Math.floor(time * 0.5);

/*Given a number return the closest number to it that is divisible by 10.
Example input:
22 25 37
Expected output:
20 30 40
 */
const closestMultiple10 = num => Math.round(num/10)*10;

/* Lot of museum allow you to be a member, for a certain amount amount_by_year
you can have unlimitted acces to the museum.
In this kata you should complete a function in order to know after how many visit
it will be better to take an annual pass. The function take 2 arguments
 annual_price and individual_price.
*/

function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
}