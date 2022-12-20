// 867. Transpose Matrix
// Easy

// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]


// Constraints:

//     m == matrix.length
//     n == matrix[i].length
//     1 <= m, n <= 1000
//     1 <= m * n <= 105
//     -109 <= matrix[i][j] <= 109


var transpose = function(matrix) {
  return matrix[0].map((_,col) => matrix.map(row => row[col]))
}

var transpose = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let result = new Array(col).fill().map(() => new Array(row).fill())
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < row; r++) {
      result[c][r] = matrix[r][c]
    }
  }
  return result
}

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(transpose(matrix)) // [[1,4,7],[2,5,8],[3,6,9]]

matrix = [[1, 2, 3], [4, 5, 6]]
console.log(transpose(matrix)) // [[1,4],[2,5],[3,6]]