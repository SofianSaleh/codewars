// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there are n stones in a pile.  On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.

// Also, if a player cannot make a move, he/she loses the game.

// Given a positive integer n. Return True if and only if Alice wins the game otherwise return False, assuming both players play optimally.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.
// Example 2:

// Input: n = 2
// Output: false
// Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).
// Example 3:

// Input: n = 4
// Output: true
// Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).
// Example 4:

// Input: n = 7
// Output: false
// Explanation: Alice can't win the game if Bob plays optimally.
// If Alice starts removing 4 stones, Bob will remove 1 stone then Alice should remove only 1 stone and finally Bob removes the last one (7 -> 3 -> 2 -> 1 -> 0).
// If Alice starts removing 1 stone, Bob will remove 4 stones then Alice only can remove 1 stone and finally Bob removes the last one (7 -> 6 -> 2 -> 1 -> 0).
// Example 5:

// Input: n = 17
// Output: false
// Explanation: Alice can't win the game if Bob plays optimally.

// Constraints:

// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(null);
  }
  dp[0] = false;

  for (let j = 0; j < n; j++) {
    if (dp[j]) continue;
    for (let k = 0; k < n; k++) {
      if (j + k * k > n) break;
      dp[j + k * k] = true;
    }
  }
  console.log(dp);
  return dp[n];
  //   var helper = function () {
  //     if (n <= 0) return 0;
  //     for (let i = 0; i * i <= n; i++) {
  //       if (helper(n - i * i) == 0) {
  //         return 1;
  //       }
  //       return 0;
  //     }
  //   };
  //   return helper();
};

console.log(winnerSquareGame(1));

//   def winnerSquareGame(self, n: int) -> bool:
//     for i in range(0, n):
//       if dp[i]: continue
//       for j in range(1, n + 1):
//         if i + j * j > n: break
//         dp[i + j * j] = True
//     return dp[n]
