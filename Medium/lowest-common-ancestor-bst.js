// 235. Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

 

// Constraints:

//     The number of nodes in the tree is in the range [2, 105].
//     -109 <= Node.val <= 109
//     All Node.val are unique.
//     p != q
//     p and q will exist in the BST.

// Pesudo Code:      
// root = [6,2,8,0,4,7,9,null,null,3,5]
// p = 0 
// q = 4

// initialize current as root

// if p > current and q > current
// current = current.left

// else if p < current and q < current
// current = current.right

// else 
// return current

// 6 is greater than both 0 , 4
// head left to 2
// 2 is greater than 0 but less than 4 so return 2

// p = 7
// q = 6
// cur is 6
// 6 is less than 7 but not greater than 6, also if root is included, return root      

var lowestCommonAncestor = function(root, p, q) {
    let curr = root
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left
        } else {
            return curr
        }
    }
};


