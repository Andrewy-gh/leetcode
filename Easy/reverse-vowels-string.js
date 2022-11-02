// 345. Reverse Vowels of a String
// Easy

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

//     1 <= s.length <= 3 * 105
//     s consist of printable ASCII characters.

var reverseVowels = function(s) {
  const vowels = 'aeiou'
  const word = s.split('')  
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      word[i] = vowelArr.at(-1)
      vowelArr.pop()
    }
  }
  return word.join('')
};

s = "hello"
console.log(reverseVowels(s)) // "holle"

s = "leetcode"
console.log(reverseVowels(s)) // "leotcede"
