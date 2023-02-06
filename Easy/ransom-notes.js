// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

 

// Constraints:

//     1 <= ransomNote.length, magazine.length <= 105
//     ransomNote and magazine consist of lowercase English letters.




// PSUEDO CODE:
// Methods
// Make a HashMap of both ransomNote and magazine
// Compare the letters of the ransomNote keys so that
// the letter and the amount is present and less than magazine's count
var canConstruct = function(ransomNote, magazine) {
  const charMap = (str) => [...str].reduce((obj, count) => {
      obj[count] = (obj[count] || 0) + 1
      return obj
    },{})
  const ransomMap = charMap(ransomNote)
  const magazineMap = charMap(magazine)
  return Object.keys(ransomMap).every(letter => letter in magazineMap && ransomMap[letter] <= magazineMap[letter])  
};

// PSEUDO CODE:
// Hash Map
// initialize empty object for a hashmap
// loop through magazine and create a letter count
// loop through ransomNote
// if ransomNote letter is in hashmap
// minus one from hashmap
// if letter is not in hashmap return false
// finally at the end of the loop return true
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(let letter of magazine) {
        if (!map[letter]) {
            map[letter] = 0;
        }
        map[letter]++;
    }
    
    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false;
        } 
        map[letter]--;
    }
    return true;
};

// FASTEST SOLUTION:
// Convert magazine string into array
// Loop through the ransomNote
// If letter in ransomNote is found in magazine array,
// splice the letter out of magazine array
// else if the ransomNote letter is not found,
// return false
// finally return true at the end of ransomNote loop
var canConstruct = function(ransomNote, magazine) {
    const arr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};

ransomNote = "a", magazine = "b"
console.log(canConstruct(ransomNote, magazine)) // false

ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine)) // false

ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine)) // true