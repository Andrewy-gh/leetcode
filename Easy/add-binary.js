// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

//     1 <= a.length, b.length <= 104
//     a and b consist only of '0' or '1' characters.
//     Each string does not contain leading zeros except for the zero itself.

// PSEUDO CODE:
// Variables to initialize:
// result as an empty string
// carry as 0
// total to calculate a, b and total values as undefined
// char as undefined
// reverse both a and b
// create a for loop with the stop condition of reaching 
// the max of a or b length
// create two condiontal variables:
// if i is out of bounds for a or b, make that variable 0
// total = digita + digitb + carry
// modding total by 2 handles all scenarios:
// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// Carry is handled by Math.floor(total / 2)
// Any total from 1 - 3 will return a 1 to carry
// if carry is true at the end add one more '1' to the front
// return result

var addBinary = function(a, b) {
  let result = ''
  let carry = 0
  let total
  let char
  a = [...a].reverse()
  b = [...b].reverse()
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    digitA = i < a.length ? Number(a[i]) : 0
    digitB = i < b.length ? Number(b[i]) : 0
    total = digitA + digitB + carry
    char = String(total % 2)
    result = char + result
    carry = Math.floor(total / 2)
  }
  return carry ? '1' + result : result
};


a = "11", b = "1"
console.log(addBinary(a, b))//"100"

a = "1010", b = "1011"
console.log(addBinary(a, b))//"10101"

a = "1111", b = "1111"
console.log(addBinary(a, b))// "11110"

a =
"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b =
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
expected = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
console.log(addBinary(a, b) === expected)