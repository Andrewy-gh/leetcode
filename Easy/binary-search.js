// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

 

// Constraints:

//     1 <= nums.length <= 104
//     -104 < nums[i], target < 104
//     All the integers in nums are unique.
//     nums is sorted in ascending order.
      
// RECURSIVE:
var search = function(nums, target) {
  function recurse(start, end) {
    if (start > end || end < start) {
      return -1
    }
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      return middle
    }
    if (nums[middle] < target) {
      start = middle + 1
      return recurse(start, end)
    } else if (nums[middle] > target) {
      end = middle - 1
      return recurse(start, end)
    }
  }
  const start = 0
  const end = nums.length - 1
  return recurse(start, end)
};

// PSEUDO CODE:
// initialize low at 0
// initialize high at array length minus 1
// start a while loop with end condition of while 
// high is greater than low since all values are unique
// calcualate mid as floor or low plus high divided by 2
// if mid is less than target, cut off lower half by making low as mid + 1
// else if mid is greater than target, cut off top half by making high as mid - 1
// if no value is found return -1

var search = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    }
  }
  return -1
};


nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search(nums, target))// 4

nums = [-1, 0, 3, 5, 9, 12], target = 2
console.log(search(nums, target))// -1