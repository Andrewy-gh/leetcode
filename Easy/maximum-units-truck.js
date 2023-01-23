// 1710. Maximum Units on a Truck

// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

//     numberOfBoxesi is the number of boxes of type i.
//     numberOfUnitsPerBoxi is the number of units in each box of the type i.

// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

 

// Example 1:

// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

// Example 2:

// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// Output: 91


var maximumUnits = function(boxTypes, truckSize) {
  let units = 0
  const sortedBoxes = boxTypes.sort((a, b) => a[1] - b[1])
  while (truckSize > 0) {
    if (!sortedBoxes.length) {
      return units
    }
    const box = sortedBoxes.pop()
    while (box[0] > 0) {
      units += box[1]
      box[0]--
      truckSize--
      if (truckSize === 0) {
        return units
      }
    }
  }
  return units
};    

var maximumUnits = function(boxTypes, truckSize) {
  let units = 0
  const sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1])
  for (const box of sortedBoxes) {
    if (truckSize >= box[0]) {
      units += box[0] * box[1]
      truckSize -= box[0]
    } else {
      // number of boxes > truckSize, fill up rest of truck
      units += box[1] * truckSize
      return units
    }
  }
  // if we run out of box types and still room in truck
  return units
};

boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4
console.log(maximumUnits(boxTypes, truckSize))// 8
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10
console.log(maximumUnits(boxTypes, truckSize))// 91

boxTypes = [[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], truckSize = 35
console.log(maximumUnits(boxTypes, truckSize)) // 76