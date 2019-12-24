/* Complete the function that calculates the area of the red square, when the length
of the circular arc A is given as the input. Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
function squareArea(A){
    let radius = (4 * A) / (2 * Math.PI);
    let area = Math.pow(radius, 2);
    return Number((area).toFixed(2));
}


/* Each number should be formatted that it is rounded to two
decimal places. You don't need to check whether the input is
a valid number because only valid numbers are used in the tests.
Example:
5.5589 is rounded 5.56
3.3424 is rounded 3.34
*/
function twoDecimalPlaces(n) {
    return +n.toFixed(2);
}


/* We need to write some code to return the original price of a product,
the return type must be of type decimal and the number must be rounded
to two decimal places.
We will be given the sale price (discounted price), and the sale
percentage, our job is to figure out the original price.
Given an item at $75 sale price after applying a 25% discount, the function
should return the original price of that item before applying the sale percentage,
which is ($100.00) of course, rounded to two decimal places.
DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price
(discounted price), 25 is the sale percentage and 100 is the original price
 */
function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}