// 1071. Greatest Common Divisor of Strings
// Easy

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

//     1 <= str1.length, str2.length <= 1000
//     str1 and str2 consist of English uppercase letters.

function gcdOfStrings(str1: string, str2: string): string {
  let min = str2.length > str1.length ? str1 : str2;
  let max = str2.length > str1.length ? str2 : str1;
  let gcd = "";
  for (let i = min.length; i > 0; i--) {
    if (max.length % i === 0) {
      const split1 = str1.split(min.slice(0, i));
      const split2 = str2.split(min.slice(0, i));
      if (split1.every((e) => e === "") && split2.every((e) => e === "")) {
        return min.slice(0, i);
      }
    }
  }
  return gcd;
}
