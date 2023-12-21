// 83. Remove Duplicates from Sorted List
// Easy

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr) {
    while (curr.next && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return head;
};

head = [1, 1, 2];
console.log(deleteDuplicates(head)); //[1,2]

head = [1, 1, 2, 3, 3];
console.log(deleteDuplicates(head)); //[1,2,3]
