// 290. Word Pattern
// Easy

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:

//     1 <= pattern.length <= 300
//     pattern contains only lower-case English letters.
//     1 <= s.length <= 3000
//     s contains only lowercase English letters and spaces ' '.
//     s does not contain any leading or trailing spaces.
//     All the words in s are separated by a single space.

var wordPattern = function (pattern, s) {
  const map = new Map();
  const keys = pattern.split("");
  const values = s.split(" ");
  const keySet = [...new Set(keys)];
  const valSet = [...new Set(values)];
  if (keys.length !== values.length || keySet.length !== valSet.length)
    return false;
  for (let i = 0; i < keys.length; i++) {
    if (!map.has(keys[i])) {
      map.set(keys[i], values[i]);
    } else {
      const val = map.get(keys[i]);
      if (val !== values[i]) return false;
    }
  }
  return true;
};

(pattern = "abba"), (s = "dog cat cat dog");
console.log(wordPattern(pattern, s)); // true

(pattern = "abba"), (s = "dog cat cat fish");
console.log(wordPattern(pattern, s)); // false

(pattern = "aaaa"), (s = "dog cat cat dog");
console.log(wordPattern(pattern, s)); // false

(pattern = "abba"), (s = "dog dog dog dog");
console.log(wordPattern(pattern, s)); // false
