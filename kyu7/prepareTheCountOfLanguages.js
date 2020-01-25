/* Your task is to return an object (associative array in PHP) which includes the count of
each coding language represented at the meetup. For example, given the following input array:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP):

{ C: 2, JavaScript: 1, Ruby: 1 }
 */

function countLanguages(list) {
    const obj = {};
    list.map(el => (obj[el.language] = (obj[el.language] || 0) + 1));
    return obj;
}