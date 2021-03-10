function coinChange(coins, amount) {
  let dp = [];

  dp.fill(amount + 1, 1, amount + 1);
  dp[0] = 0;
  console.log(dp);
  for (const coin of coins) {
    for (let i = coin; i <= amount; ++i) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] == amount + 1 ? -1 : dp[amount];
}

// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5, 10], 18));
// console.log(coinChange([2], 3));
