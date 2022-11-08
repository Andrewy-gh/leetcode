// 415. Add Strings
// Easy

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"

// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// Constraints:

//     1 <= num1.length, num2.length <= 104
//     num1 and num2 consist of only digits.
//     num1 and num2 don't have any leading zeros except for the zero itself.


var addStrings = function(num1, num2) {
  const arr1 = [...num1]
  const arr2 = [...num2]
  let result = ''
  let remainder = 0
  let digit = ''
  let digit1;
  let digit2;
  while (arr1.length || arr2.length) {
    digit1 = Number(arr1.pop()) || 0
    digit2 = Number(arr2.pop()) || 0
    if (remainder) {
      digit = String(digit1 + digit2 + remainder)
    } else {
      digit = String(digit1 + digit2)
    }
    if (digit.length > 1) {
      remainder = Number(digit[0])
      result = digit[1] + result
    } else {
      remainder = 0
      result = digit + result
    }
  }
  if (remainder) {
    return remainder + result
  }
  return result
};

num1 = "11", num2 = "123"
console.log(addStrings(num1, num2)) // "134"

num1 = "456", num2 = "77"
console.log(addStrings(num1, num2)) // "533"

num1 = "0", num2 = "0"
console.log(addStrings(num1, num2)) // "0"