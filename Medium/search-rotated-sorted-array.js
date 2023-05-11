// 33. Search in Rotated Sorted Array
// Medium

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:

// Input: nums = [1], target = 0
// Output: -1


// Scenarios:
// left:
// if target greater than mid: cut off left
// if target less than mid:
//   if target less than left: cut off left
//   if target greater than or equal to left: cut off right
// right: 
// if target less than mid: cut off right
// if target greater than mid: 
//   if target greater than right: cut off right
//   if target less than or equal to right: cut off left

// Binary search
// left pointer as 0
// right pointer as 1
// while loop of left point <= right pointer
// mid as Math floor (left + right) / 2
// Success: target = nums[mid] return mid
// Find out if in left by checking if mid greater than left pointer else right
// Left scenarios: target greater than mid or target less than left, left = mid + 1
// else right = mid - 1
// Right scenarios: target less than mid or target greater than right, right = mid - 1
// else left = mid + 1 
// Finally: return - 1

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};


(nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0);
console.log(search(nums, target)); //4

(nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3);
console.log(search(nums, target)); //-1

(nums = [1]), (target = 0);
console.log(search(nums, target)); //-1
