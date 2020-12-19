/* Finish the solution so that it sorts the passed in array of numbers.
If the function passes in an empty array or null/nil value then it should
return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
 */

function solution(nums){
  if (!nums) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

//second solution
/* function solution(nums){
  if(!nums)
    nums = [];
  for (let i = nums.length-1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (nums[i] < nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      };
    };
  };
  return nums;
}
*/
