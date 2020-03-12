/* Write a function called that takes a string of parentheses,
and determines if the order of the parentheses is valid. The function
should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
 */
function validParentheses(parens){
  if (parens === '') return true;
  let array = [parens];
  for (let i = 0; i < parens.length/2; i++) {
    if (array[0] !== '') array[0] = array[0].replace('()', '');
  }
  return array[0] === '';
}