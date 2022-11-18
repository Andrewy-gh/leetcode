// 258. Add Digits
// Easy

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Example 2:

// Input: num = 0
// Output: 0

 

// Constraints:

//     0 <= num <= 231 - 1

 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

var addDigits = function(num) {
  const addedNum = [...num.toString()].reduce((a,c) => a + Number(c), 0)
  return addedNum.toString().length === 1 ? addedNum : addDigits(addedNum)
};

var addDigits = function(num) {
  const getSum = (n) => {
    let sum = 0;
    while (n != 0) {
      sum = sum + n % 10;
      n = parseInt(n / 10);
    }
    return sum;
  }
  const sum = getSum(num)
  return parseInt(sum / 10) ? addDigits(sum) : sum
};

var addDigits = function(num) {
  let sum = 0 
  while(num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)

    // If sum is over one digit reset and start again
    if (num === 0 && sum > 9) {
      num = sum
      sum = 0
    }
  } 
  return sum
};

num = 38
console.log(addDigits(num)) // 2

num = 0
console.log(addDigits(num)) // 0