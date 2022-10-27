// 283. Move Zeroes
// Easy

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

 

// Constraints:

//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

 
// Follow up: Could you minimize the total number of operations done?
  
function moveZeroes(nums) {
  let index = 0
  let operations = 0
  let end = nums.length - 1
  while (operations <= end) {
    if (nums[index] === 0) {
      nums.splice(index, 1)
      nums.push(0)
      operations++
    } else {
      index++
      operations++
    }
  }
  return nums
}

nums = [0,1,0,3,12]
console.log(moveZeroes(nums)) // Output: [1,3,12,0,0]

nums = [0]
console.log(moveZeroes(nums)) // Output: [0]
