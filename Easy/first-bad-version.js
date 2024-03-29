// 278. First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:

// Input: n = 1, bad = 1
// Output: 1

 

// Constraints:

//     1 <= bad <= n <= 231 - 1



// PSEUDO CODE:
// Binary search
// initialize low as 1
// initialize high as n
// initialize mid 
// initialize result (known bad version) as n 
// while low <= high (all unique versions)
// if (isBadVersion(mid) // true equals version is bad
// result is equal to mid as it is a bad version
// high is equal to mid minus one, cut off the top half
// else low is equal to min plus one, cut off bottom half
// searching until all values are accounted for
// return result

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1
        let high = n 
        let mid
        let result = n 
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (isBadVersion(mid)) {
                result = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return result
    };
};