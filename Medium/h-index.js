// 274. H-Index
// Medium

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:

// Input: citations = [1,3,1]
// Output: 1

// Constraints:

//     n == citations.length
//     1 <= n <= 5000
//     0 <= citations[i] <= 1000

var hIndex = function (citations) {
  const sorted = citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > h) {
      h++;
    }
  }
  return h;
};

var citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations)); // 3

citations = [1, 3, 1];
console.log(hIndex(citations)); // 1

citations = [10, 8, 5, 4, 3];
console.log(hIndex(citations)); //4

citations = [25, 8, 5, 3, 3];
console.log(hIndex(citations)); // 3
