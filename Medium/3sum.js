// 15. 3Sum
// Medium


// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

 

// Constraints:

//     3 <= nums.length <= 3000
//     -105 <= nums[i] <= 105


// PSEUDO Code
// init empty res array
// sort variable array 
// for... loop through sorted array
// if index > 0 and current value is same as i - 1
// handles duplicate value at current index
// continue
// init left pointer as next value (i + 1)
// init right pointer as last value in array (len - 1)
// while left < right
// threeSum = current + left + right
// if sum > 0, move right pointer to left (-= 1) to decrease sum
// else if sum < 0, move left pointer to right (+= 1) to increase sum
// else (sum === 0) condition met
// push sum into res array and move left pointer to right
// while ... loop inside above else condition
// handle duplicate value in left pointer
// while condition: current left pointer is same as previous
// and left < right
// then increase left by one
// end: return res array

var threeSum = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i -1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r]
      if (threeSum > 0) {
        r -= 1
      } else if (threeSum < 0) {
        l += 1
      } else {
        res.push([nums[i], nums[l], nums[r]])
        l += 1
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1
        }
      }
    }
  }
  return res
}

nums = [-1,0,1,2,-1,-4]
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))

nums = [0,1,1]
// []
console.log(threeSum(nums))

nums = [0,0,0]
// [[0,0,0]]
console.log(threeSum(nums))




