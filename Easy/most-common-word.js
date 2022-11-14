// 819. Most Common Word
// Easy

// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"

 

// Constraints:

//     1 <= paragraph.length <= 1000
//     paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
//     0 <= banned.length <= 100
//     1 <= banned[i].length <= 10
//     banned[i] consists of only lowercase English letters.

var mostCommonWord = function(paragraph, banned) {
  const s = paragraph.replace(/([^\w]+|\s+)/g, ' ').split(' ').reduce((acc, curr) => {
  if (!banned.includes(curr.toLowerCase()) && curr.length) {
    return [...acc, curr.toLowerCase()]
  }
  return acc
},[])
  let cache = {}
  for (const e of s) {
    if (cache[e]) {
      cache[e]++
    } else {
      cache[e] = 1
    }
  }
  return Object.keys(cache).find((key) => cache[key] === Math.max(...Object.values(cache)))    
};

var mostCommonWord = function(paragraph, banned) {
  const cache = paragraph.replace(/([^\w]+|\s+)/g, ' ').split(' ').reduce((acc, curr) => {
    curr = curr.toLowerCase()
    if (!banned.includes(curr) && curr.length) {
      if (!acc[curr]) {
        acc[curr] = 0
      }
      acc[curr]++
      return acc
    }
    return acc
  },{})
  return Object.keys(cache).find((key) => cache[key] === Math.max(...Object.values(cache)))
};

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
console.log(mostCommoneWord(paragraph, banned)) //"ball"

paragraph = "a.", banned = []
console.log(mostCommoneWord(paragraph, banned)) //"a"