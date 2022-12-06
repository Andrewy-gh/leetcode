// 771. Jewels and Stones
// Easy

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".



//   Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0



// Constraints:

// 1 <= jewels.length, stones.length <= 50
//     jewels and stones consist of only English letters.
//     All the characters of jewels are unique.

var numJewelsInStones = function(jewels, stones) {
  let counter = 0
  for (const stone of stones) {
    if ([...jewels].includes(stone)) {
      counter++
    }
  }
  return counter
};

var numJewelsInStones = function(jewels, stones) {
  const map = {}
  const count = 0;
  for (const jewel of jewels) {
    map[jewel] = true
  }
  for(const stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count 
}

var numJewelsInStones = function(jewels, stones) {
  let counter = 0
  for (const stone of stones) {
    if (jewels.includes(stone)) {
      counter++
    }
  }
  return counter
};


jewels = "aA", stones = "aAAbbbb"
console.log(numJewelsInStones(jewels, stones)) // 3


jewels = "z", stones = "ZZ"
console.log(numJewelsInStones(jewels, stones)) // 0
