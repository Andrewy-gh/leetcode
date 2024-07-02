// 496. Next Greater Element I
// Easy

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:

//     1 <= nums1.length <= nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 104
//     All integers in nums1 and nums2 are unique.
//     All the integers of nums1 also appear in nums2.
 
// Follow up: Could you find an O(nums1.length + nums2.length) solution?

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const createHash = (nums2: number[]) => {
        const hashArr: number[] = [];
        const hash: Record<number, number> = {};
        for (let i = nums2.length - 1; i >= 0; i--) {
            for (let j = hashArr.length - 1; j >= 0; j--) {
                if (hashArr[j] > nums2[i]) {
                    hash[nums2[i]] = hashArr[j];
                    break;
                }
            }
            if (hash[nums2[i]] === undefined) {
                hash[nums2[i]] = -1;
            }
            hashArr.push(nums2[i]);
        }
        return hash;
    };
    const hash = createHash(nums2);
    return nums1.map((num) => hash[num])
};

const nums1_1 = [4, 1, 2];
const nums2_1 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1_1, nums2_1)); // [-1, 3, 1]

const nums1_2 = [2, 4];
const nums2_2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1_2, nums2_2)); // [3, -1]

const nums1_3 = [3, 1, 5, 7, 9, 2, 6];
const nums2_3 = [1, 2, 3, 5, 6, 7, 9, 11];
console.log(nextGreaterElement(nums1_3, nums2_3)); // [5,2,6,9,11,3,7]
