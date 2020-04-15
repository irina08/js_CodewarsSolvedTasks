/* Peter can see a clock in the mirror from the place he sits in the office.
When he saw the clock shows 12:22
He knows that the time is 11:38

in the same manner:
05:25 --> 06:35
01:50 --> 10:10
11:58 --> 12:02
12:01 --> 11:59
Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror
is the mirrored time (what Peter sees) as string.
Return the real time as a string.
Consider hours to be between 1 <= hour < 13.
So there is no 00:20, instead it is 12:20.
There is no 13:20, instead it is 01:20.
 */

function WhatIsTheTime(time)
{
  time = time.split(':').map(el => parseInt(el));
  if (time[0] == 12)
    time[0] = 0;
  if (time[1] == 0)
  {
    time[1] = 60;
    time[0] -= 1;
  }
  let result = [(11 - time[0]).toString(), (60 - time[1]).toString()];
  if (result[0] == '0')
    result[0] = '12';
  if (result[0].length == 1)
    result[0] = '0' + result[0];
  if (result[1].length == 1)
    result[1] = '0' + result[1];
  return result.join(':');
}