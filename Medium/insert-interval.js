// 57. Insert Interval
// Medium

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.



// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// PSEDUO CODE
// sort the intervals array
// add 0 index val to res array
// for... loop through starting at 1 index
// lastEnd is res array last ending val
// if current start is less than lastEnd,
// overlapping ex: [[1,3],[2,4]]
// check the max end value ex: [[1,6],[2,4]]
// so [1,6] is correctly added to res
// else push start end to res

// Sort through the intervals array. Loop through the starting and ends at 1 index.
// If current start is less than recorded end value. Change latest output end val 
// to max of recorded end value or current end val. Else add [current start, 
// current end] to output. 

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = [intervals[0]];

  for (const [start, end] of intervals.slice(1)) {
    const lastEnd = output.at(-1)[1];
    if (start <= lastEnd) {
      output.at(-1)[1] = Math.max(lastEnd, end);
    } else {
      output.push([start, end]);
    }
  }
  return output;
};

intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals)); // [[1,6],[8,10],[15,18]]

intervals = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals)); // [[1,5]]

intervals = [
  [1, 4],
  [0, 1],
];
console.log(merge(intervals)); // [[0,4]]

intervals = [
  [1, 4],
  [0, 0],
];
console.log(merge(intervals)); // [[0,0],[1,4]]