// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

 

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104

var mergeTwoLists = function(l1, l2) {
    // initialize a dummy head node
    
    // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
    
    // while there are still nodes to compare in two lists
        // if value of 2nd node is less than value of 1st node
            // set the current node's link to l2 node
            // set the l2 node to l2's next node
       // else
            // set the current node's link to l1 node
            // set the l1 node to l1's next node
        
        // move on to the next node 
            
    // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    // if both lists are empty, point crt's link to null

    // return merged linked list
}

var mergeTwoLists = function(list1, list2) {
    const dummy = {val: -1, next: null}
    let current = dummy
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    if (list1 || list2) {
        current.next = list1 || list2
    }
    return dummy.next
};

list1 = [1, 2, 4], list2 = [1, 3, 4]
console.log(mergeTwoLists(list1, list2) //[1, 1, 2, 3, 4, 4]

list1 = [], list2 = []
console.log(mergeTwoLists(list1, list2) //[]

list1 = [], list2 = [0]
console.log(mergeTwoLists(list1, list2) //[0]