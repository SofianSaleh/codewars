// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

function majorityElement(nums: number[]): number[] {
  let ans: number[] = [];
  let candidate1: number = 0;
  let candidate2: number = 1;

  let countSoFar1: number = 0;
  let countSoFar2: number = 0;

  for (const num of nums) {
    console.log(candidate1, candidate2, countSoFar1, countSoFar2);
    if (num === candidate1) {
      countSoFar1 += 1;
    } else if (num === candidate2) {
      countSoFar2 += 1;
    } else if (countSoFar1 === 0) {
      candidate1 = num;
      countSoFar1 += 1;
    } else if (countSoFar2 === 0) {
      candidate2 = num;
      countSoFar2 += 1;
    } else {
      countSoFar1 -= 1;
      countSoFar2 -= 1;
    }
  }

  let count1: number = 0;
  let count2: number = 0;

  for (const num of nums) {
    if (num == candidate1) ++count1;
    else if (num == candidate2) ++count2;
  }

  if (count1 > nums.length / 3) ans.push(candidate1);
  if (count2 > nums.length / 3) ans.push(candidate2);

  return ans;
}
console.log(majorityElement([-1, 100, 2, 100, 100, 4, 100]));
