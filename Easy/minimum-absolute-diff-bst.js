// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Example 1:

// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:

// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:

//     The number of nodes in the tree is in the range [2, 104].
//     0 <= Node.val <= 105

// Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

var getMinimumDifference = function (root) {
  const res = [];
  const traverse = (root) => {
    if (!root) {
      return;
    }
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  };
  traverse(root);
  let min = Infinity;
  for (let i = 0; i <= res.length - 2; i++) {
    min = Math.min(min, Math.abs(res[i + 1] - res[i]));
  }
  return min;
};
