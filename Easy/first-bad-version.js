

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