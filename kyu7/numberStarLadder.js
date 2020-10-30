/* Using n as a parameter in the function pattern, where n>0,
complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3
pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
 */

function pattern(n){
  let output="1";
  for (let i = 2; i <= n; i++) {
    output += "\n" + 1 + Array(i).join("*") + i;
  }
  return output;
}

/*
function pattern(numberOfLines) {
  let output = '1'
  let lineNumber;

  for (lineNumber = 2; lineNumber <= numberOfLines; lineNumber++) {
    output += '\n' + '1' + getStars(lineNumber - 1) + lineNumber.toString();
  }
  return output
}

function getStars(numberOfStars) {
  let output = '';

  while (output.length < numberOfStars) {
    output += '*'
  }
  return output
}
 */