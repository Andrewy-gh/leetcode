// 171. Excel Sheet Column Number
// Easy

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

 

// Example 1:

// Input: columnTitle = "A"
// Output: 1

// Example 2:

// Input: columnTitle = "AB"
// Output: 28

// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

 

// Constraints:

//     1 <= columnTitle.length <= 7
//     columnTitle consists only of uppercase English letters.
//     columnTitle is in the range ["A", "FXSHRXW"].



var titleToNumber = function(columnTitle) {
  const getNumber = (str) => str.charCodeAt(0) - 64
  return [...columnTitle].reverse().map((e,index) => Math.pow(26,index) * getNumber(e)).reduce((a,c) => a + c,0)
};

var titleToNumber = function(columnTitle) {
  const getNumber = (str) => str.charCodeAt(0) - 64
  return [...columnTitle].reverse().reduce((acc, curr, index) => acc + (Math.pow(26,index) * getNumber(curr)), 0)
};

var columnTitle = "AB"
console.log(titleToNumber(columnTitle))//28

columnTitle = "ZY"
console.log(titleToNumber(columnTitle))//701

columnTitle = "ZZ"
console.log(titleToNumber(columnTitle))//702

columnTitle = "AAA"
console.log(titleToNumber(columnTitle))//703