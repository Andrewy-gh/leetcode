// 102. Binary Tree Level Order Traversal
// Medium

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

 

// Constraints:

//     The number of nodes in the tree is in the range [0, 2000].
//     -1000 <= Node.val <= 1000

// PSEUDO CODE
// Use BFS and Queue
// init res array 
// init queue array
// queue push root
// while queue is not empty...
// init length var as queue length
// init level subarray
// for... loop through length
// var node is first elem of queue popped off (shift)
// if node ... chance it could be a current, left, right
// level push node
// queue push node.left
// queue push node.right
// outside of for...loop, still inside while...
// if level is not empty
// res push level
// finally return res

var levelOrder = function(root) {
    const res = []
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        const length = queue.length
        const level = []
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node) {
                level.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if (level.length > 0) {
            res.push(level)
        }
    }
    return res    
};