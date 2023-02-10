// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

// Constraints:

//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


// ITERATIVE
// PSEDUO CODE:
// initialize a prev variable and a current variable and a temporary // next variable
// prev is null and current is head
// while loop... current: keep going through list until head is null
// temp = current.next
// current.next = prev
// prev = current
// current = tmp

// EXAMPLES:
// 1 -> 2
// initial, current = 1
// next (tmp) is current.next, next = 2
// current.next is prev, prev is still null
// prev is equal to current now, prev = 1; 1 -> 1
// current is equal to next now, 2

// 1 -> 2 -> 3
// next = null
// current.next = prev
// 3.next = prev = 2 which is current from previous iteration
// current = next which null, ending loop
// prev is current which is now 3
var reverseList = function(head) {
    let prev = null
    let current = head
    let next
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next 
    }
    return prev
};


// RECURSIVE
// PSEUDO CODE:
// 1 -> 2
// newHead = 1 (head)
// if head.next (yes)
//     newHead = recurse(2), 2 is head.next

=============
// RECURSE down one level:
// newHead = 2 (head)
// if head.next (NO)
// 2.next = None
// return newHead (2)

===========
// newHead = 2 after returning from recurse
// original head (1) 's next (2 - which was returned as newHead) 's
// next is equal to head (which is 1, original head)
// original head's connection is cut when head.next = null
// newHead is returned as head
var reverseList = function(head) {
    if (!head) {
        return null
    }
    let newHead = head
    if (head.next) {
        newHead = reverseList(head.next)
        head.next.next = head
    }
    head.next = null
    return newHead
};  