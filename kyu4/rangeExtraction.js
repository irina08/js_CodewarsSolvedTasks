/* A format for expressing an ordered list of integers is to use
a comma separated list of either individual integers or a range of integers
denoted by the starting integer separated from the end integer in the range
by a dash, '-'. The range includes all integers in the interval including
both endpoints. It is not considered a range unless it spans at least 3 numbers.
For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and
returns a correctly formatted string in the range format.

Example:
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
 */

function solution(list){
  let start = 0;
  let result = [];
  for (let i = 1; i < list.length; i++)
  {
    if (list[i] > list[i - 1] + 1)
    {
      if (i - start < 3)
      {
        for (let j = start; j < i; j++)
          result.push(list[j].toString());
      }
      else
        result.push(list[start].toString() + '-' + (list[i - 1]).toString());
      start = i;
    }
  }
  if (list.length - start < 3)
  {
    for (let j = start; j < list.length; j++)
      result.push(list[j].toString());
  }
  else
    result.push(list[start].toString() + '-' + (list[list.length-1]).toString());
  return result.join(',');
}

function solution2(list){
  for(let i = 0; i < list.length; i++) {
    let j = i;
    while(list[j] - list[j+1] == -1) j++;
    if(j != i && j-i > 1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}
