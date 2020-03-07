/* Given a string, write a function that returns true if that string contains
valid (or balanced) braces, including () [] {}. Also include the number of
balanced braces and the number of leftover braces in the form of a tuple:
[true/false, number of balanced braces, number of leftover braces]. The number of
leftover braces include open and close braces, so count them seperately and not as pairs.
By balanced, I mean that each brace is closed in the reverse order in which it was
opened (e.g. the first brace opened should be the last one closed and the last one
opened should be the first one closed).
For example, in the string "(string[5])", the first brace opened is ( and the second
one opened is [, which means the [ should be closed first and the ( closed last. Since
this is the case, the function should return true because it is balanced and because
there are two balanced braces and no unbalanced braces, it should also return 2 and 0 in
this format: [true, 2, 0].
There may be characters between the braces. The string may also be empty, in which case
return [true, 0, 0] because it's technically balanced.
 */
function isBalanced(string) {
  let result = [];
  let count = 0;

  console.log(string);
  for(let char of string) {
    if(char === '(' || char === '{' || char === '[')  {
      result.push(char);
    } else if (char === ')') {
      if (result[result.length - 1] === '(') {
        result.pop();
        count++;
      }
      else result.push(char);
    }
    else if (char === '}') {
      if (result[result.length - 1] === '{') {
        result.pop();
        count++;
      } else result.push(char);
    }
    else if (char === ']') {
      if (result[result.length - 1] === '[') {
        result.pop();
        count++;
      } else result.push(char);
    }
  }
  return [result.length ? false : true, count, result.length]
}