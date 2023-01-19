// 599. Minimum Index Sum of Two Lists
// Easy

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

 

// Constraints:

//     1 <= list1.length, list2.length <= 1000
//     1 <= list1[i].length, list2[i].length <= 30
//     list1[i] and list2[i] consist of spaces ' ' and English letters.
//     All the strings of list1 are unique.
//     All the strings of list2 are unique.

var findRestaurant = function(list1, list2) {
  let minStrings = []
  let minIndex;
  for (let i = 0; i < list1.length; i++) {
    const list2Index = list2.indexOf(list1[i])
    if (list2Index >= 0 && minIndex === undefined) {
      minIndex = i + list2Index
    }
    if (list2Index >= 0 && i + list2Index < minIndex ) {
      minStrings = []
      minIndex = i + list2Index
      minStrings.push(list1[i])
    } else if (list2Index >= 0 && i + list2Index === minIndex ) {
      minStrings.push(list1[i])
    }
  }
  return minStrings
};

list1 = ["Shogun","Piatti","Tapioca Express","Burger King","KFC"] ,list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
console.log(findRestaurant(list1, list2))

list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
console.log(findRestaurant(list1, list2)) // ["Shogun"]


list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["KFC", "Shogun", "Burger King"]
console.log(findRestaurant(list1, list2)) // ["Shogun"]

list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
console.log(findRestaurant(list1, list2)) // ["sad","happy"]

list1 = ["vacag","KFC"] ,list2 = ["fvo","xrljq","jrl","KFC"]
console.log(findRestaurant(list1, list2)) // ["KFC"]