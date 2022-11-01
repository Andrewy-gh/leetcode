// 367. Valid Perfect Square
// Easy

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true

// Example 2:

// Input: num = 14
// Output: false

 

// Constraints:

//     1 <= num <= 2^31 - 1

var isPerfectSquare = function(num) {
  let operations = 0
  let i = 1
  while (num > 0) {
    num -= i
    // console.log(num)
    i += 2
    operations++
  }
  return num === 0 ? true : false
};

console.log(isPerfectSquare(16)) // true
console.log(isPerfectSquare(14)) // false