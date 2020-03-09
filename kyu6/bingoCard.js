/* Finish method: getCard()
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
{ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
The numbers must be in the order of their column: B, I, N, G, O.
Within the columns the order of the numbers is random.
 */
function fillArray(min, max, n){
  let array = [];
  for (let i = 0; array.length < n; i++){
    let r = Math.floor(Math.random() * (max - min + 1) + min);
    if (!array.includes(r)) array.push(r);
  }
  return array;
}

function getCard() {
  let obj = {
    'B': fillArray(1, 15, 5),
    'I': fillArray(16, 30, 5),
    'N': fillArray(31, 45, 4),
    'G': fillArray(46, 60, 5),
    'O': fillArray(61, 75, 5),
  };
  let result = [];
  for (let i in obj){
    for (let j = 0; j < obj[i].length; j++){
      result.push(i + obj[i][j]);
    }
  }
  return result;
}