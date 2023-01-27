// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  const obj = { ')': '(', '}': '{', ']': '[' }
  const stack = []
  for (p of s) {
    if (Object.values(obj).includes(p)) {
      stack.push(p)
    } else if (p in obj && obj[p] === stack.at(-1)) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

var isValid = function(s) {
  const stack = []
  for (const c of s) {
    if (c === '(') {
      stack.push(')');
    } else if (c === '{') {
      stack.push('}');
    } else if (c === '[') {
      stack.push(']');
    } else if (!stack.length || stack.pop() !== c) {
      return false;
    }
  }
  return !stack.length;
};

var isValid = function(s) {
  const stack = []
  for (const c of s) {
    if (c === '(' ||c === '{'|| c === '[' ) {
      stack.push(c);
    } else {
      if (!stack.length || (stack.at(-1) === '(' && c !== ')') || (stack.at(-1) === '{' && c !== '}') || (stack.at(-1) === '[' && c !== ']')) {
        return false
      }
      stack.pop()
    }
  }
  return !stack.length;
}

var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  const obj = { '(': ')', '{': '}', '[': ']' }
  const stack = []
  for (p of s) {
    if (p in obj) {
      stack.push(obj[p])
    } else if (p === stack.at(-1)) {
      stack.pop()
    } else {
      return false
    }
  }
  return !stack.length
};


s = "()"
console.log(isValid(s))//true

 s = "()[]{}"
console.log(isValid(s))//true

 s = "(]"
console.log(isValid(s))//false

s = "]"
console.log(isValid(s))//false

s = "([}}])"
console.log(isValid(s))//false


