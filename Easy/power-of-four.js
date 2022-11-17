// 342. Power of Four
// Easy

// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.



// Example 1:

// Input: n = 16
// Output: true

// Example 2:

// Input: n = 5
// Output: false

// Example 3:

// Input: n = 1
// Output: true



// Constraints:

//     -231 <= n <= 231 - 1


// Follow up: Could you solve it without loops/recursion?

var isPowerOfFour = function(n) {
  let x = 0
  while (n >= Math.pow(4, x)) {
    if (n === Math.pow(4, x)) {
      return true
    }
    x++
  }
  return false
};

n = 16
console.log(isPowerOfFour(n)) //true



n = 5
console.log(isPowerOfFour(n)) //false



n = 1
console.log(isPowerOfFour(n)) //true