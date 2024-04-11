// 239. Sliding Window Maximum
// Hard

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     1 <= k <= nums.length

function maxSlidingWindow(nums: number[], k: number): number[] {
  const res = [];
  const q = [];
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    while (q && nums[q[q.length - 1]] < nums[r]) {
      q.pop();
    }
    q.push(r);
    if (l > q[0]) {
      q.shift();
    }
    if (r + 1 >= k) {
      res.push(nums[q[0]]);
      l++;
    }
    r++;
  }
  return res;
}

const nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
console.log(maxSlidingWindow(nums1, k1)); // [3, 3, 5, 5, 6, 7];

const nums2 = [1];
const k2 = 1;
console.log(maxSlidingWindow(nums2, k2)); // [1];
