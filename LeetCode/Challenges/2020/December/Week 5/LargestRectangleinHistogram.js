// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let ans = 0;
  let stack = [];

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack != [] &&
      (i == heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      let h = heights[stack.pop()];
      let w = stack == [] ? i : i - stack[stack.length - 1] - 1;
      ans = Math.max(ans, h * w);
    }
    stack.push(i);
  }
  return ans;
};

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
