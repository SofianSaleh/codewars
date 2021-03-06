// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let dup = {};
  let result = [];

  for (const [i, v] of s.split('').entries()) {
    dup[v] = i;
  }

  for (const [index, value] of s.split('').entries()) {
    if (result.indexOf(value) === -1) {
      while (
        result &&
        value < result[result.length - 1] &&
        index < dup[result[result.length - 1]]
      ) {
        result.pop();
      }
      result.push(value);
    }
  }

  return result.join('');
};

console.log(removeDuplicateLetters('bcabc'));
console.log(removeDuplicateLetters('cbacdcbc'));
console.log(removeDuplicateLetters('cbaa'));

// ##################### Python ########################### //

// class Solution:
//     def removeDuplicateLetters(self, s: str) -> str:
//         ans = []
//         count = collections.Counter(s)
//         used = [False] * 26

//         for c in s:
//             count[c] -= 1
//             if used[ord(c) - ord('a')]:
//                 continue
//             while ans and ans[-1] > c and count[ans[-1]] > 0:
//                 used[ord(ans[-1]) - ord('a')] = False
//                 ans.pop()
//             ans.append(c)
//             used[ord(ans[-1]) - ord('a')] = True

//         return ''.join(ans)
