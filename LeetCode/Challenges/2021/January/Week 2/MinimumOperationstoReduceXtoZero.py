# You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

# Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.


# Example 1:

# Input: nums = [1,1,4,2,3], x = 5
# Output: 2
# Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
# Example 2:

# Input: nums = [5,6,7,8,9], x = 4
# Output: -1
# Example 3:

# Input: nums = [3,2,20,1,1,3], x = 10
# Output: 5
# Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.


# Constraints:

# 1 <= nums.length <= 105
# 1 <= nums[i] <= 104
# 1 <= x <= 109


class Solution:
    def minOperations(self, nums, x):
        target = sum(nums)-x
        n = len(nums)

        if target < 0:
            return - 1
        if target == 0:
            return - n
        left = 0
        cur_sum = 0
        n_target = -1

        # for i in range(n):
        #     if cur_sum < target:
        #         cur_sum += nums[i]
        #     while cur_sum >= target:
        #         if cur_sum == target:
        #             n_target = max(n_target, i-left + 1)
        #         cur_sum -= nums[left]
        #         left += 1
        return n-n_target if n_target != -1 else -1
