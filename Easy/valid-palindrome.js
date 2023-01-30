// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

//     1 <= s.length <= 2 * 105
//     s consists only of printable ASCII characters.

// string - transform into lowercase
// remove all non alphanumeric characters
// check palindrome
// for loop until string.length / 2
// if string[i] !== string[string.length - 1 - i]
// then return false
// else return true

var isPalindrome = function(s) {
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz1234567890'
  const transformed = [...s.toLowerCase()].filter(l => alphaNumeric.includes(l)).join('')
  for (let i = 0; i < transformed.length / 2; i++) {
    if (transformed[i] !== transformed[transformed.length - 1 - i]) {
      return false
    }
  }
  return true
};

var isPalindrome = function(s) {
  const transformed = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  for (let i = 0; i < transformed.length / 2; i++) {
    if (transformed[i] !== transformed[transformed.length - 1 - i]) {
      return false
    }
  }
  return true
};

s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))//true

s = "race a car"
console.log(isPalindrome(s))//false

s = " "
console.log(isPalindrome(s))//true

s = "Fb Ley'?P:\"'I\":P?IyeL bF"
console.log(isPalindrome(s))//false

s = "ab_a"
console.log(isPalindrome(s))//true