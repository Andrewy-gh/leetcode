// 118. Pascal's Triangle
// Easy

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

function generate(numRows: number): number[][] {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
    } else if (i === 1) {
      res.push([1, 1]);
    } else {
      const row = res[res.length - 1];
      const rowRes = [1];
      for (let j = 0; j < row.length - 1; j++) {
        rowRes.push(row[j] + row[j + 1]);
      }
      rowRes.push(1);
      res.push(rowRes);
    }
  }
  return res;    
};
