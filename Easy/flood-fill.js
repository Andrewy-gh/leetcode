// 733. Flood Fill


// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

 

// Constraints:

//     m == image.length
//     n == image[i].length
//     1 <= m, n <= 50
//     0 <= image[i][j], color < 216
//     0 <= sr < m
//     0 <= sc < n

// initialize current color as image[sr][sc]
// fill function
// check row is not below 0
// check row is not above image length
// check column is not below 0
// check column is not above row length
// image[r][c] is equal to current color

// if so run fill on (r - 1, c)
// (r + 1, c)
// (r, c- 1)
// (r, c + 1)

// return image

var floodFill = function(image, sr, sc, color) {
  const fill = (sr, sc) => {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== currentColor || image[sr][sc] === color) {
      return
    }
    image[sr][sc] = color
    fill(sr - 1, sc)
    fill(sr + 1, sc)
    fill(sr, sc - 1)
    fill(sr, sc + 1)
  }
  const currentColor = image[sr][sc]
  fill(sr, sc)
  return image    
};

var floodFill = function(image, sr, sc, color) {
  const currColor = image[sr][sc]
  if (currColor === color) {
    return image
  }
  const dfs = (r,c) => {
    if (image[r][c] === currColor) {
      image[r][c] = color
      if (r >= 1) {
        dfs(r - 1, c)
      }
      if (r + 1 < image.length) {
        dfs(r + 1, c)
      }
      if (c >= 1) {
          dfs(r, c - 1)
      }
      if (c + 1 < image[0].length) {
        dfs(r, c + 1)
      }
    }
  }
  dfs(sr, sc)
  return image
};

image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, color = 2
console.log(floodFill(image, sr, sc, color))//[[2,2,2],[2,2,0],[2,0,1]]

image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, color = 0
console.log(floodFill(image, sr, sc, color))//[[0,0,0],[0,0,0]]

