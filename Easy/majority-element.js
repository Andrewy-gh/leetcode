// 169. Majority Element
// Easy

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  const cache = {};
  let max = 0;
  let val;
  let key;
  for (const num of nums) {
    if (cache[num]) {
      val = ++cache[num];
    } else {
      cache[num] = 1;
      val = 1;
    }
    if (val > max) {
      max = val;
      key = num;
    }
  }
  return Number(key);
};

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;
  for (const num of nums) {
    if (count === 0) candidate = num;
    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};

nums = [3, 2, 3];
console.log(majorityElement(nums)); // 3

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // 2

nums = [1];
console.log(majorityElement(nums)); // 1
