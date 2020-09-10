/* Find the most common letter (not space) in the string(always lowercase and 2 < words)
and replace it with the letter.
 If such letters are two or more, choose the one that appears in the string( earlier.

For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
  const str = string.split(' ').join('').split('');
  const obj = {};
  str.forEach(letter => {
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  });

  let commonKeyValue = ['key', 0];
  for (let [key, value] of Object.entries(obj)) {
    if (value > commonKeyValue[1]) commonKeyValue = [key, value];
  }

  const commonLetter = commonKeyValue[0];
  const result = [];
  string.split('').forEach(char => {
    char === commonLetter ? result.push(letter) : result.push(char);
  });
  return result.join('');
}

