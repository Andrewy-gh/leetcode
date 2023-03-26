// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest
// substring
// without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

// PSEUDO CODE:
// Sliding window algorithm
// init set, left and right pointer
// loop through string, while set has current letter, delete left most letter from set
// abca, left most would be a
// increment left pointer
// then add current letter to set
// bca
// result = max of res or current window
// current window in case legnth of 1, res = Math.max(0, r:0 - l:0 + 1), return 1
// return result

var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l += 1;
    }
    charSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
};

s = 'dvdf';
console.log(lengthOfLongestSubstring(s));

s = 'abcabcbb';
// 3
// "abc"
console.log(lengthOfLongestSubstring(s));

s = 'bbbbb';
// 1
// "b"
console.log(lengthOfLongestSubstring(s));

s = 'pwwkew';
// 3
// "wke"
console.log(lengthOfLongestSubstring(s));

s = '';
console.log(lengthOfLongestSubstring(s));

s = 'au';
console.log(lengthOfLongestSubstring(s));
