// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

const firstMissingPositive = (nums: number[]): number => {
  
  // :type nums: List[int]
  // :rtype: int
  //  Basic idea:
  // 1. for any array whose length is l, the first missing positive must be in range [1,...,l+1], 
  //     so we only have to care about those elements in this range and remove the rest.
  // 2. we can use the array index as the hash to restore the frequency of each number within 
  //      the range [1,...,l+1] 

  nums.push(0)
  const n = nums.length
  // delete the unnecessary elements
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0 || nums[i] >= n) nums[i] = 0
  }
  // use the index as the hash to record the frequency of each number
  for (let i = 0; i < n; i++) {
    nums[nums[i] % n] += n
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] / n == 0) return i
  }
  return n
}