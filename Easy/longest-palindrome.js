// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

 

// Constraints:

//     1 <= s.length <= 2000
//     s consists of lowercase and/or uppercase English letters only.

// PSEUDO CODE:
// Create hashmap
// initialze counter
// loop through hashmap 
// if count value is even
// add count value to counter
// else if count value is odd
// add count value - 1 to counter, which makes the odd value even
// if there exists one odd value in the map, add one to the result
// this accounts for the largest odd number in the map
// finally return counter

// Alternative method:
// Math.floor(number / 2) * 2
// result = 0
// even number: (2 / 2) * 2 = 2
// odd number: (3 / 2) = 1, 1 * 2 = 2
// result will always be even, hence if number is odd,
// add one to result
// result will always be odd hereafter, which replaces the need to 
// check for an odd number existing

var longestPalindrome = function(s) {
  const charMap = [...s].reduce((o,c) => {
    o[c] = (o[c]||0) + 1
    return o
  },{})
  let counter = 0
  for (const key in charMap) {
    if (charMap[key] % 2 === 0) {
      counter += charMap[key]
    } else {
      counter += charMap[key] -1
    }
  }
  const oddExists = Object.values(charMap).find(e => e % 2 === 1)
  return oddExists ? counter + 1 : counter
};

var longestPalindrome = function(s) {
  const charMap = [...s].reduce((o,c) => {
    o[c] = (o[c]||0) + 1
    return o
  },{})
  let result = 0
  for (const letter in charMap) {
    result += Math.floor(charMap[letter] / 2) * 2
    if (result % 2 === 0 && charMap[letter] % 2 === 1) {
      result += 1
    }
  }
  return result
};