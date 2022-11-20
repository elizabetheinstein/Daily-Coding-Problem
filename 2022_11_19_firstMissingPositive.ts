// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

const firstMissingPositive = (nums: number[]): number => {
  
  // First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.
    // We will position every positive integer in the array at its corresponding index
    // ex) 1 at index 0, 2 at index 1, 3 at index 2
    // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
    // Therefore, we can find the first missing positive integer by scanning through the array.

  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1
    if (i == idx || nums[i] == nums[idx]) continue // already positioned or nums[i] is a duplicate
    if (idx >= 0 && idx <= nums.length - 1) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]]
      i-- // check the swapped number
    }
  }
  // use the index as the hash to record the frequency of each number
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 == nums[i]) continue
    else return i + 1
  }
  return nums.length + 1
}
