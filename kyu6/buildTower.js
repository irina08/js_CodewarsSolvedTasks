/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as an Array;
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
 */
function towerBuilder(nFloors) {
    let tower = [];
    let counter = nFloors - 1;
    for(let i = 1; i < nFloors * 2; i += 2) {
        tower.push(' '.repeat(counter) + '*'.repeat(i) + ' '.repeat(counter))
        counter--;
    }
    return tower;
}