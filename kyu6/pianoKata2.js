/* The function you are going to write will explore one of the patterns
you're experiencing in your practice: Given the number you stopped on,
which note was it? For example, in the description of your piano exercise above,
if you stopped at 5, your left thumb would be on the fifth key of the piano,
which is C#. Or if you stopped at 92, you would have gone all the way from keys 1
to 88 and then wrapped around, so that you would be on the fourth key, which is C.

Your function will receive an integer between 1 and 10000 (maybe you think that in
principle it would be cool to count up to, say, a billion, but considering how many
years it would take it is just not possible) and return one of the strings
"A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", or "G#" indicating which
note you stopped on -- here are a few more examples:
1     "A"
12    "G#"
42    "D"
100   "G#"
2017  "F"
 */

function whichNote(keyPressCount) {
  const code =
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
  return code[(keyPressCount - 1)  % 88];
}