// 202. Happy Number
// Easy

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

 

// Constraints:

//     1 <= n <= 231 - 1

var isHappy = function(n) {
  let cache = []
  let result
  while (result !== 1) {
    result = [...n.toString()].reduce((a, c) => a + Math.pow(Number(c), 2), 0)
    n = result
    if (cache.includes(result)) {
      return false
  }
    cache.push(result)
  }
  return true
};

var isHappy = function(n) {
  const addSquares = (num) => {
    let sum = 0
    while (num > 0) {
      sum += Math.pow(num % 10, 2)
      num = Math.floor(num / 10)
    }
    return sum
  };
  let set = new Set()
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = addSquares(n)
  }
  return n === 1
}


n = 19
console.log(isHappy(n))true

n = 2
console.log(isHappy(n))false
