// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// Design an algorithm to find the maximum profit. You may complete at most k transactions.

// Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

// Constraints: 0 <= k <= 109;
// 0 <= prices.length <= 104;
// 0 <= prices[i] <= 1000;

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let sell;
  let hold;
  if (k >= prices.length / 2) {
    sell = 0;
    hold = -Infinity;

    for (let i = 0; i < prices.length; i++) {
      sell = Math.max(sell, hold + prices[i]);
      hold = Math.max(sell, hold - prices[i]);
    }
    return sell;
  }
  sell = [];
  hold = [];
  for (let i = 0; i < k + 1; i++) {
    sell.push(0);
    hold.push(-Infinity);
  }
  console.log(sell, hold);
};

// console.log(maxProfit(5, [3, 2, 6, 5, 0, 3, 2, 6, 5, 0, 3, 2, 6, 5, 0, 3]));
