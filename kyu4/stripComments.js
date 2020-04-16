/* Complete the solution so that it strips all text that follows any of a set
of comment markers passed in. Any whitespace at the end of the line should
also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
 */

function solution(input, markers) {
  input = input.split('\n');
  for (let i = 0; i < input.length; i++)
  {
    for (let j = 0; j < input[i].length; j++)
    {
      if (markers.indexOf(input[i][j]) !== -1)
      {
        input[i] = input[i].substring(0, j).trim();
        break;
      }
    }
  }
  return input.join('\n');
}