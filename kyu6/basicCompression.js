/* First, You will write a very basic compression algorithm

It gets a string:
string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters like so:
compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string, the function
will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm, create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"
Note: The original string may not contain "[]" for obvious reasons.
 */

let compress = function (str) {
  let array = '[';
  let char = str[0];
  let count = 1;
  let length = 0;
  for (let i = 1; i <= str.length; i++) {
    if (char === str[i]) count++;
    else {
      array += `[${count},"${char}"],`;
      char = str[i];
      count = 1;
      length++;
    }
  }
  return array.length >= str.length ? str : array.slice(0, -1) + `]`;
}

let decompress = function (c) {
  if (!c.includes('[')) return c;
  let decode = '';
  let array = c
    .slice(1, -1)
    .split(']')
    .map(el => el.replace('[', ''))
    .map(el => el.replace(/^,/, ''))
    .map(el => el.replace(/"/g, ''))
    .map(el => el.replace(',', '*'))
    .map(el => el.split('*'))
    .filter(el => el[0] !== '');
  array.map(el => el.push(+el[0]));
  for (let i = 0; i < array.length; i++) {
    decode += array[i][1].repeat(array[i][2]);
  }
  return decode;
}