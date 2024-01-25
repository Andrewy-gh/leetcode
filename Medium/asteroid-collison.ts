// 735. Asteroid Collision
// Medium

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Constraints:

//     2 <= asteroids.length <= 104
//     -1000 <= asteroids[i] <= 1000
//     asteroids[i] != 0

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let asteroid of asteroids) {
    // condition for collision is negative asteroid and positive top of stack
    while (stack && asteroid < 0 && stack[stack.length - 1] > 0) {
      const diff = asteroid + stack[stack.length - 1];
      // negative asteroid won collision
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        // our exit condition, top is bigger and stays
        // prevents asteroid from being added to stack
        asteroid = 0;
      } else {
        // both asteroids are same and destroy each other
        asteroid = 0;
        stack.pop();
      }
    }
    if (asteroid !== 0) {
      // negative or positive android can be added to stack
      stack.push(asteroid);
    }
  }
  return stack;
}

const asteroids1 = [8, -8]; // []
console.log(asteroidCollision(asteroids1));
const asteroids2 = [10, 2, -5]; // [10]
console.log(asteroidCollision(asteroids2));
const asteroids3 = [5, 10, -5]; // [5,10]
console.log(asteroidCollision(asteroids3));
const asteroids4 = [-2, -1, 1, 2]; // [-2,-1,1,2]
console.log(asteroidCollision(asteroids4));
const asteroids5 = [-2, -2, 1, -2]; // [-2,-2,-2]
console.log(asteroidCollision(asteroids5));
