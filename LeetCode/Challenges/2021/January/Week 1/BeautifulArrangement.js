// Suppose you have n integers from 1 to n. We define a beautiful arrangement as an array that is constructed by these n numbers successfully if one of the following is true for the ith position (1 <= i <= n) in this array:

// The number at the ith position is divisible by i.
// i is divisible by the number at the ith position.
// Given an integer n, return the number of the beautiful arrangements that you can construct.

// Example 1:

// Input: n = 2
// Output: 2
// Explanation:
// The first beautiful arrangement is [1, 2]:
// Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
// The second beautiful arrangement is [2, 1]:
// Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 15

/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  var dfs = function (N, num, sb, memo) {};
};

// class Solution {
//     public int countArrangement(int N) {
//       final String filled = new String(new char[N + 1]).replace('\0', 'x');
//       StringBuilder sb = new StringBuilder(filled);
//       Map<String, Integer> memo = new HashMap<>();

//       return dfs(N, 1, sb, memo);
//     }

//     private int dfs(int N, int num, StringBuilder sb, Map<String, Integer> memo) {
//       if (num == N + 1)
//         return 1;
//       final String filled = sb.toString();
//       if (memo.containsKey(filled))
//         return memo.get(filled);

//       int count = 0;

//       for (int i = 1; i <= N; ++i)
//         if (sb.charAt(i) == 'x' && (num % i == 0 || i % num == 0)) {
//           sb.setCharAt(i, 'o');
//           count += dfs(N, num + 1, sb, memo);
//           sb.setCharAt(i, 'x');
//         }

//       memo.put(filled, count);
//       return count;
//     }
//   }
