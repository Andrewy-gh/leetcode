// 347. Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
//     k is in the range [1, the number of unique elements in the array].
//     It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function (nums, k) {
  // Create array of nums.length with empty arrays as items.
  // nums.length + 1 accounts for the 0 index which will be 0 counts
  // However 0 index will not be used
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  // Create hashmap of num counts
  const counts = nums.reduce((obj, num) => {
    obj[num] = (obj[num] || 0) + 1;
    return obj;
  }, {});

  // Creates bucket array, where the index is equal to number of
  // counts. Example: nums = [1, 1, 1, 2, 2, 3] returns freq as:
  // [ [], [ 3 ], [ 2 ], [ 1 ], [], [], [] ]
  for (const [num, count] of Object.entries(counts)) {
    freq[count].push(Number(num));
  }

  const res = [];

  // Loop through freq from the end of the array, we will be skipping
  // the 0 index.
  for (i = freq.length - 1; i > 0; i--) {
    // Each item inside freq is an array
    for (const n of freq[i]) {
      // Push into res until res.length is equal to k
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
};

(nums = [1, 1, 1, 2, 2, 3]), (k = 2);
console.log(topKFrequent(nums, k)); //[1,2]

(nums = [1]), (k = 1);
console.log(topKFrequent(nums, k)); //[1]
