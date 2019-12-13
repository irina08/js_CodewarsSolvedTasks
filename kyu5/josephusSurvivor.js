/*
josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
 */

/*
function josephusSurvivor(n,k){
 let arr = [];
 let count = 0;
 //let go = true;
 for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

while(arr.length > 1) {
  for (i = 0; i < arr.length; i++) {
    count++;
      if (count === k && k > 1) {
        arr.splice(i, 1);
        count = 0;
        i--;
      console.log(arr, arr.length);
    }
  }
}

return arr[0];
*/

function josephusSurvivor(n,k) {
    return (n > 1 ? (josephusSurvivor(n - 1, k) + k - 1) % n + 1 : 1);
}