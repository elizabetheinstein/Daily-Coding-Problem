// Given an array of integers, return a new array such that each element at index i of the new array
// is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], 
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// O(n) time
// O(1) space excluding result array
// Follow-up: what if you can't use division?

const productExceptSelf = (nums: number[]): number[] => {
    let result = Array(nums.length).fill(1)

    let prefix = 1
    let postfix = 1

    for (let l = 0, r = nums.length - 1; l < nums.length; l++, r--) {
        result[l] *= prefix
        result[r] *= postfix

        prefix *= nums[l]
        postfix *= nums[r]
    }

    return result
}

const originalList1 = [1, 2, 3, 4, 5]
const originalList2 = [3, 2, 1]
const originalList3 = [3, 2, 2]
const originalList4 = [3, 2, 0]

console.log(productExceptSelf(originalList1))
console.log(productExceptSelf(originalList2))
console.log(productExceptSelf(originalList3))
console.log(productExceptSelf(originalList4))