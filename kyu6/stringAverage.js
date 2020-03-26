/* You are given a string of numbers between 0-9. Find the average of these numbers
 and return it as a floored whole number (ie: no decimal places) written out as a string.
 Eg:
"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
 */

function averageString(str) {
  let sum = 0;
  let count = 0;
  let num = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let array = str.split(' ');
  for (let i = 0; i < array.length; i++){
    if (num.includes(array[i])) count++;
  }
  if (str !== '' && count === array.length){
    for (let i = 0; i < array.length; i++)
      for(let j = 0; j < num.length; j++){
        if (array[i] === num[j]) sum = sum + j;
      }
    sum =  Math.trunc(sum/array.length);
    return num[sum];
  } return 'n/a';
}