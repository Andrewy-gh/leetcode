// 205. Isomorphic Strings
// Easy

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

//     1 <= s.length <= 5 * 104
//     t.length == s.length
//     s and t consist of any valid ascii character.

var isIsomorphic = function (s, t) {
  const mapST = new Map();
  const mapTS = new Map();
  for (let i = 0; i < s.length; i++) {
    const cS = s[i];
    const cT = t[i];
    if (
      (mapST.has(cS) && mapST.get(cS) !== cT) ||
      (mapTS.has(cT) && mapTS.get(cT) !== cS)
    ) {
      return false;
    }
    mapST.set(cS, cT);
    mapTS.set(cT, cS);
  }
  return true;
};

(s = "egg"), (t = "add");
console.log(isIsomorphic(s, t)); //true

(s = "foo"), (t = "bar");
console.log(isIsomorphic(s, t)); //false

(s = "paper"), (t = "title");
console.log(isIsomorphic(s, t)); //true
