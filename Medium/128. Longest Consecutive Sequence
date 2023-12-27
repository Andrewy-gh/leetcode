// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

//     0 <= nums.length <= 105
//     -109 <= nums[i] <= 109

// var longestConsecutive = function (nums) {
//   let max = 1;
//   let seq = nums.length > 0 ? 1 : 0;
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (Math.abs(nums[i + 1] - nums[i]) === 1) {
//       seq++;
//     } else if (nums[i + 1] === nums[i]) {
//     } else {
//       max = Math.max(max, seq);
//       seq = 1;
//     }
//   }
//   max = Math.max(max, seq);
//   return max;
// };

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  set.forEach((e) => {
    // found start of sequence
    if (!set.has(e - 1)) {
      let len = 1;
      // search until sequence ends
      while (set.has(e + len)) {
        len++;
      }
      max = Math.max(max, len);
    }
  });
  return max;
};

nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // 4

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums)); // 9

nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
console.log(longestConsecutive(nums)); // 7

nums = [1, 2, 0, 1];
console.log(longestConsecutive(nums)); // 3
