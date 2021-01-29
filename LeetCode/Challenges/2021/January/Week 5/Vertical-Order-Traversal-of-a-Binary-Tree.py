# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

import collections


class Solution:
    def verticalTraversal(self, root):
        def dfs(node, lookup, x, y):
            if not node:
                return
            lookup[x][y].append(node)
            dfs(node.left, lookup, x-1, y+1)
            dfs(node.right, lookup, x+1, y+1)

        lookup = collections.defaultdict(lambda: collections.defaultdict(list))
        dfs(root, lookup, 0, 0)

        result = []

        for x in sorted(lookup):
            report = []

            for y in sorted(lookup[x]):
                report.extend(sorted(node.val for node in lookup[x][y]))
            result.append(report)
        return result
