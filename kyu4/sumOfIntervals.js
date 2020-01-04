/* Write a function called sumIntervals/sum_intervals() that accepts
an array of intervals, and returns the sum of all the interval lengths.
Overlapping intervals should only be counted once.
Intervals
Intervals are represented by a pair of integers in the form of an array.
The first value of the interval will always be less than the second value.
Interval example: [1, 5] is an interval from 1 to 5. The length of this
interval is 4.
Overlapping Intervals
List containing overlapping intervals:
[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap,
we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
 */

function sumIntervals(intervals){
    if (!(intervals instanceof Array) || intervals.length == 0) return 0;
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        let prev = intervals[i - 1];
        let current = intervals[i];

        if (prev[0] <= current[0] && prev[1] >= current[1]) {
            intervals.splice(i--, 1); // delete element
        } else if (prev[0] <= current[0] && prev[1] >= current[0]) {
            prev[1] = current[1];
            intervals.splice(i--, 1); // delete element
        }
    }
    return intervals.reduce((a, v) => a += v[1] - v[0], 0);
}