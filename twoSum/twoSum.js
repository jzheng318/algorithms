/* 
LeetCode:
Given an array of integers, return indices of the two numbers such that they add up to a specific target
You may assume that each input would have exactly one solution, and you may not use the same element twice
*/

// https://medium.com/codewithcorgis/leetcode-with-corgis-and-kittens-solving-the-two-sum-problem-75b8591d2bbb

/* O(n^2) */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let second = nums[j];
      if (first + second === target) {
        return [first, second];
      }
    }
  }
};

/* Hash Table Solution */
const twoSums = (nums, target) => {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    table[element] = i;
  }

  for (let idx = 0; idx < nums.length; idx++) {
    let complement = target - nums[idx];
    if (complement in table) {
      return [idx, table[complement]];
    }
  }
};
