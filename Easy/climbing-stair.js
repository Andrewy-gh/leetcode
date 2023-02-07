// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

 

// Constraints:

//     1 <= n <= 45


// Dynamic Programming
var climbStairs = function(n) {
    let one = 1
    let two = 1
    let temp;
    for (let i = 0; i < n - 1; i++) {
        temp = one
        one = one + two
        two = temp
    }
    return one
};

// Recursive Time limit exceeded
var climbStairs = function(n) {
  return (n <= 2) ?  n : climbStairs(n - 1) + climbStairs(n - 2)
};

// Memoization
var climbStairs = function(n) {
  const memo = {}
  memo[1] = 1
  memo[2] = 2
  const climb = (n) => {
    if (n in memo) {
      return memo[n]
    } else {
      memo[n] = climb(n-1) + climb(n-2)
      return memo[n]
    }
  }
  return climb(n)
};

n = 2
console.log(climbStairs(n))// 2

n = 3
console.log(climbStairs(n))// 3

n = 5
console.log(climbStairs(n))// 8
