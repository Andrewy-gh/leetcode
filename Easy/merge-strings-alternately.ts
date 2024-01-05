// 1768. Merge Strings Alternately
// Easy

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:

//     1 <= word1.length, word2.length <= 100
//     word1 and word2 consist of lowercase English letters.

function mergeAlternately(word1: string, word2: string): string {
  let res = "";
  let i1 = 0;
  let i2 = 0;
  while (i1 < word1.length && i2 < word2.length) {
    res += word1[i1];
    i1++;
    res += word2[i2];
    i2++;
  }
  if (i1 < word1.length) {
    res += word1.slice(i1);
  }
  if (i2 < word2.length) {
    res += word2.slice(i2);
  }
  return res;
}

function mergeAlternately2(word1: string, word2: string): string {
  let res = "";
  const n1 = word1.length;
  const n2 = word2.length;
  const n = Math.min(n1, n2);
  for (let i = 0; i < n; i++) {
    res += `${word1[i]}${word2[i]}`;
  }
  if (n1 === n2) {
    return res;
  } else if (n1 > n2) {
    return (res += word1.slice(n));
  } else {
    return (res += word2.slice(n));
  }
}
