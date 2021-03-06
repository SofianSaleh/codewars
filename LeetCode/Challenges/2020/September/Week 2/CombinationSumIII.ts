// ######################## TYPESCRIPT ########################

function combinationSum3(k: number, n: number): number[][] {
    if (k > n) return [[]]
    function dfs(k: number, n: number, count: number, path: any): void {
        if (k == 0 && n == 0) {
            let temp: number[] = []
            for (let j = 0; j < path.length; j++) {
                temp.push(parseInt(path[j]))
            }
            answer.push(temp)
            return
        }
        if (k === 0 || n < 0) {
            return
        }
        for (let i = count; i < 10; i++) {
            dfs(k - 1, n - i, i + 1, path + [i])
        }
    }

    let answer = []

    dfs(k, n, 1, [])

    return answer
};
console.log(combinationSum3(3, 7))
console.log(combinationSum3(10, 7))

// ######################## JAVASCRIPT ########################
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// var combinationSum3 = function (k, n) {
    // var dfs = function (k, n, count, path) {
    //     if (k == 0 && n == 0) {
    //         let y = []
    //         for (const x of path) {
    //             y.push(parseInt(x))
    //         }
    //         answer.push(y)
    //         return
    //     }
    //     if (k === 0 || n < 0) {
    //         return
    //     }
    //     for (let i = count; i < 10; i++) {
    //         dfs(k - 1, n - i, i + 1, path + [i])
    //     }
    // }

    // let answer = []

    // dfs(k, n, 1, [])
    // console.log(answer)
    // return answer
// }
// console.log(combinationSum3(3, 7))


// #########################    PYTHON  #########################
// class Solution:
//     def combinationSum3(self, k: int, n: int) -> List[List[int]]:
//         def dfs(k: int, n: int, count: int, path: List[int]) -> None:
//             if k == 0 and n == 0:
//                 answer.append(path)
//                 return
//             if k == 0 or n < 0:
//                 return

//             for i in range(count, 10):
//                 dfs(k - 1, n - i, i + 1, path + [i])

//         answer = []

//         dfs(k, n, 1, [])

//         return answer




