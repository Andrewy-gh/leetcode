// 98. Validate Binary Search Tree
// Medium

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left
//     subtree
//     of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true

// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:

//     The number of nodes in the tree is in the range [1, 104].
//     -231 <= Node.val <= 231 - 1

// PSEUDO CODE:
// Create a helper recursive function, with parameters (node, left, right).
// Return true if null.
// Check if val is less than right and greater than left.
// Return recurse(node.left, left, node.val) for left boundary
// and recurse(node.right, node.val, right).
// Call valid func with (node, -infinity, infinity).

var isValidBST = function (root) {
  const valid = (node, left, right) => {
    if (!node) {
      return true;
    }
    if (node.val < right && node.val > left) {
      return false;
    }
    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  };
  return valid(root, -Infinity, Infinity);
};
