// 110. Balanced Binary Tree

// Given a binary tree, determine if it is
// height-balanced


// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true

 

// Constraints:

//     The number of nodes in the tree is in the range [0, 5000].
//     -104 <= Node.val <= 104


// before we check the balance of the root
// go to right subtree to check balance
// then go to subtree in the right subtree to check balance
// keep going until you hit the bottom base case
// while doing that record height of subtree and as we go up 
// check left and right height is less than or equal to 1
// as we move up take the max of sub trees to calculate the height from the root

// PSEUDO CODE:
// Returns: [Boolean, height integer]

// dfs function:
// if no root return [true and 0]
// initialize left as dfs(root.left)
// initialize right as dfs(root.right)
// balanced: boolean is defined as left[0] and right[0] and Math.abs(left[1] - right[1]) <= 1
// if one false returns the entire tree is unbalanced
// return [balanced, 1 + Math.max(left, right)

// finally return function(root)[0]


var isBalanced = function(root) {
  const dfs = (root)  => {
    if (!root) {
      return [true, 0]
    }
    let left = dfs(root.left)
    let right = dfs(root.right)
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1])
    return [balanced, 1 + Math.max(left[1], right[1])]
  }

  return dfs(root)[0]
};

//  Solution 2, -1 equals false
var isBalanced = function(root) {
  const dfs = (root)  => {
    if (!root) {
      return 0
    }
    const leftHeight = dfs(root.left)
    if (leftHeight === -1) {
      return -1
    } 
    const rightHeight = dfs(root.right)
    if (rightHeight === -1) {
      return -1
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }
    return Math.max(leftHeight, rightHeight) + 1
  }

  return dfs(root) !== -1
};