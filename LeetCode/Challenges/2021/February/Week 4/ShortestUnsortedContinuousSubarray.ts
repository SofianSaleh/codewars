function findUnsortedSubarray(nums: number[]): number {
  let n = nums.length;
  let mini = Infinity;
  let max = -Infinity;
  let flagDecrease = false;
  let flagIncrease = false;

  return 1;
}
// public int findUnsortedSubarray(int[] nums) {
//     for (int i = 1; i < n; ++i) {
//       if (nums[i] < nums[i - 1])
//         meetDecrease = true;
//       if (meetDecrease)
//         min = Math.min(min, nums[i]);
//     }

//     for (int i = n - 2; i >= 0; --i) {
//       if (nums[i] > nums[i + 1])
//         meetIncrease = true;
//       if (meetIncrease)
//         max = Math.max(max, nums[i]);
//     }

//     int l = 0;
//     for (l = 0; l < n; ++l)
//       if (nums[l] > min)
//         break;

//     int r = 0;
//     for (r = n - 1; r >= 0; --r)
//       if (nums[r] < max)
//         break;

//     return l > r ? 0 : r - l + 1;
//   }
