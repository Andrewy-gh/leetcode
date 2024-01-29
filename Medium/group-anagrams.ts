// 49. Group Anagrams
// Medium

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

function groupAnagrams(strs: string[]): string[][] {
  const map = strs.reduce(
    (acc, s) => {
      const key = s
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("");
      acc[key] = (acc[key] || []).concat(s);
      return acc;
    },
    {} as { [key: string]: string[] },
  );
  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
