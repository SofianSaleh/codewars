
# A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

# Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.


# Example 1:


# Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
# Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]


# Constraints:

# m == mat.length
# n == mat[i].length
# 1 <= m, n <= 100
# 1 <= mat[i][j] <= 100


class Solution:
    def diagonalSort(self, mat):
        m = len(mat)
        n = len(mat[0])
        count = defaultdict(list)

        for i in range(m):
            for j in range(n):
                count[i - j].append(mat[i][j])

        for value in count.values():
            value.sort(reverse=1)

        for i in range(len(m)):
            for j in range(len(n)):
                mat[i][j] = value.count[i - j].pop()

        return mat
