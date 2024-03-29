// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

//     void push(int x) Pushes element x to the back of the queue.
//     int pop() Removes the element from the front of the queue and returns it.
//     int peek() Returns the element at the front of the queue.
//     boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:

//     You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
//     Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

 

// Constraints:

//     1 <= x <= 9
//     At most 100 calls will be made to push, pop, peek, and empty.
//     All the calls to pop and peek are valid.

 

// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

// Pseudo Code:
// Initialize two stacks
// Stack1 is the in stack, where order is kept
// Stack2 is the out stack, used to maintain order
// New Arrivals go into stack1

// Push operation:
// If stack1 is not empty
// Move items to stack2, pushing into empty stack2
// Push new item to empty stack1
// If stack2 is not empty: begin restack items into stack1
// old items go on top of new item
// push to maintain stack2 emptiness

// Pop:
// pop() the last item of the stack1 array, which is top of stack

// Peek:
// return last item of the stack1 array, which is top of stack

// isEmpty:
// return boolean if stack1 is empty

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

MyQueue.prototype.push = function(x) {
    if (this.s1) {
       this.s2.push(...this.s1.splice(0,this.s1.length))
    }
    this.s1.push(x)
    if (this.s2) {
        this.s1.push(...this.s2.splice(0,this.s2.length))
    }
};

MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

MyQueue.prototype.peek = function() {
    return this.s1.at(-1)
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0
};


//  longer time
var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

MyQueue.prototype.push = function(x) {
    while (this.s1.length) {
       this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    while (this.s2.length) {
        this.s1.push(this.s2.pop())
    }
};

MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

MyQueue.prototype.peek = function() {
    return this.s1.at(-1)
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0
};
