// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example 1:

// Input: arr = [85], pieces = [[85]]
// Output: true
// Example 2:

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]
// Example 3:

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].
// Example 4:

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]
// Example 5:

// Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
// Output: false

// Constraints:

// 1 <= pieces.length <= arr.length <= 100
// sum(pieces[i].length) == arr.length
// 1 <= pieces[i].length <= arr.length
// 1 <= arr[i], pieces[i][j] <= 100
// The integers in arr are distinct.
// The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = i + 1;
  }
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length === 1 && m[pieces[i][0]] !== 0) {
      continue;
    } else if (pieces[i].length > 1 && m[pieces[i][0]] !== 0) {
      let idx = m[pieces[i][0]] - 1;
      idx += 1;
    }
    if (idx >= arr.length) {
      return false;
    }
  }
};

// def check(arr, pieces):

//     # Traverse over the list pieces
//     for i in range(0, len(pieces)):

//             # If end of the array
//             if idx >= len(arr):
//                 return False

//             # Check the order of elements
//             for j in range(1, len(pieces[i])):

//                 # If order is same as
//                 # the array elements
//                 if arr[idx] == pieces[i][j]:
//                     # Increment idx
//                     idx = idx+1

//                     # If order breaks
//                     if (idx >= len(arr) and
//                            j < len(pieces[i]) - 1):
//                         return False

//                 # Otherwise
//                 else:
//                     return False

//         # Return false if the first
//         # element doesn't exist in m
//         else:
//             return False

//     # Return true
//     return True

// # Driver Code
// if __name__ == "__main__":

//     arr = [ 1, 2, 4, 3 ]

//     # Given array of list
//     pieces = [ [ 1 ], [ 4, 3 ], [ 2 ] ]

//     # Function call
//     if check(arr, pieces) == True:
//         print("Yes")
//     else:
//         print("No")

// # This code is contributed by akhilsaini
