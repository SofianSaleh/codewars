function maxProduct(nums: number[]): number {
    let product: number = nums[0]
    let prevMin: number = nums[0]
    let prevMax: number = nums[0]

    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i])
        let minimum: number = prevMin * nums[i]
        let maximum: number = prevMax * nums[i]
        prevMin = Math.min(nums[i], minimum, maximum)
        prevMax = Math.max(nums[i], minimum, maximum)
        product = Math.max(product, prevMax)
    }

    return product
};

console.log(maxProduct([2, 3, -2, 4]))
