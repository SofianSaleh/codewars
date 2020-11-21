// Given an array of digits, you can write numbers using each digits[i] as many times as we want.  For example, if digits = ['1','3','5'], we may write numbers such as '13', '551', and '1351315'.

// Return the number of positive integers that can be generated that are less than or equal to a given integer n.

// Example 1:

// Input: digits = ["1","3","5","7"], n = 100
// Output: 20
// Explanation:
// The 20 numbers that can be written are:
// 1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
// Example 2:

// Input: digits = ["1","4","9"], n = 1000000000
// Output: 29523
// Explanation:
// We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
// 81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
// 2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
// In total, this is 29523 integers that can be written using the digits array.
// Example 3:

// Input: digits = ["7"], n = 8
// Output: 1

// Constraints:

// 1 <= digits.length <= 9
// digits[i].length == 1
// digits[i] is a digit from '1' to '9'.
// All the values in digits are unique.
// 1 <= n <= 109

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  let ans = 0;
  let num = `${n}`;

  for (let i = 1; i < num.length; i++) {
    ans += digits.length ** i;
  }
  for (const [i, c] of num.split('').entries()) {
    let dHasSameNum = false;

    for (const d of digits) {
      if (d < c) {
        ans += digits.length ** (num.length - i - 1);
      } else if (d === c) {
        dHasSameNum = true;
      }
    }
    if (!dHasSameNum) return ans;
  }
  return ans + 1;
};

console.log(atMostNGivenDigitSet(['1', '3', '5', '7'], 100));

// class Solution:
//     def atMostNGivenDigitSet(self, D: List[str], N: int) -> int:
//         ans = 0
//         num = str(N)

//         for i in range(1, len(num)):
//             ans += len(D)**i

//         for i, c in enumerate(num):
//             dHasSameNum = False
//             for digit in D:
//                 if digit < c:
//                     ans += len(D)**(len(num) - i - 1)
//                 elif digit == c:
//                     dHasSameNum = True
//             if not dHasSameNum:
//                 return ans

//         return ans + 1
