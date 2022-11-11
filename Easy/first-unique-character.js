// 387. First Unique Character in a String
// Easy

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0

// Example 2:

// Input: s = "loveleetcode"
// Output: 2

// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

//     1 <= s.length <= 105
//     s consists of only lowercase English letters.

var firstUniqChar = function(s) {
    const arr = [...s]
    return arr.findIndex((e) => arr.indexOf(e) === arr.lastIndexOf(e))
};

var firstUniqChar = function(s) {
  let cache = {}
  for (const e of s) {
    if (cache[e]) {
      cache[e]++
    } else {
      cache[e] = 1
    }
  }
  const unique = Object.keys(cache).find(e => cache[e] === 1)
  return unique ? [...s].findIndex(e => e === unique) : -1
};

s = "leetcode"
console.log(firstUniqChar(s))// 0

s = "loveleetcode"
console.log(firstUniqChar(s))// 2

s = "aabb"
console.log(firstUniqChar(s))// -1

s = "dddccdbba"
console.log(firstUniqChar(s))// 8