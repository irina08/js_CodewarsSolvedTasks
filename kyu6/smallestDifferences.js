/* Given two arrays of integers, find the pair of values with the smallest
difference and return that difference.
If both arrays are empty, return -1.
If one array is empty, return the smallest value from the non-empty array.

Example:
  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]
  Output = 1

Example empty array:
  arr1 = [1, 3, 5, 23, 5]
  arr2 = []
  Output = 1

Example two empty arrays:
  arr1 = []
  arr2 = []
  Output = -1
 */
function smallestDiff(arr1, arr2) {
  if (!arr1.length && !arr2.length) return -1;
  if (!arr1.length) return Math.min(...arr2);
  if (!arr2.length) return Math.min(...arr1);

  let result = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(Math.abs(arr1[i] - arr2[j]) < result) {
        result = Math.abs(arr1[i] - arr2[j]);
      }
      if(Math.abs(arr1[i] - arr2[j]) === 0) break;
    }
  }
  return result;
}