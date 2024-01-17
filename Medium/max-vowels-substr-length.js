// 1456. Maximum Number of Vowels in a Substring of Given Length
// Medium

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:

//     1 <= s.length <= 105
//     s consists of lowercase English letters.
//     1 <= k <= s.length

function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let sum = s
    .slice(0, k)
    .split("")
    .filter((e) => vowels.includes(e)).length;
  let max = sum;
  if (max === k) return k;
  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.includes(s[i - 1])) {
      sum--;
    }
    if (vowels.includes(s[i + k - 1])) {
      sum++;
    }
    max = Math.max(max, sum);
    if (max === k) return k;
  }
  return max;
}
