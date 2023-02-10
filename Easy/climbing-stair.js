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
// PSEUDO CODE:
// one = 1, step 4, second to last, only one method to get to 5:
// 1 step, 2 steps will have you overshoot

// two = 1, step 5, last step, if we start here at 5, only one method to // get to 5: 0 steps, 1 method

// at step 3: you have one step to get to 4, or two steps to get 5,
// having calculate 4 and 5, we know there are two methods available

// at step 2: we have a 2 initial methods which lead us to steps 3 and // 4. fn(3) = 2 and fn(4) = 1 so 2 + 1 = 3 methods availble to us.

// Two variables are initialized and we carry on until the one variable
// gets to zero. We start at 0 until step 5 so 6 steps total. Only need // to calculate 4 which is n - 1 as n = 5 in this case.
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
// PSEDUO CODE:
// Base Cases:
// At n = 1, there's only one method, take one step
// At n = 2, there's two methods: take one step  or take two steps
// initialize memo object
// input 1 and 2 base cases into our memo object
// initialize helper function: climb
// if n is in memo
// retrieve the  value of at memo[n]
// else memo[n] is equal to climb(n-1) + climb(n-2), using recursion
// return memo[n]
// finally main function body return climb(n)
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
