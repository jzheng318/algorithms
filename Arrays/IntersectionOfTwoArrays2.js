/*

LEETCODE:
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

 */

const intersect = function(nums1, nums2) {
  if (nums1 === nums2) {
    return nums1;
  }

  //first, find shorter array
  let long = nums1.join('');
  let short = nums2.join('');
  if (long.length < short.length) {
    long = nums2.join('');
    short = nums1.join('');
  }

  let comp = {};
  for (let i = 0; i < short.length; i++) {
    if (long.includes(short[i])) {
      comp[i] = short[i];
      for (let j = i + 1; j < short.length; j++) {
        if (!long.includes(short.slice(i, j))) {
          break;
        } else {
          comp[i] = short.slice(i, j);
        }
      }
    }
  }
  let longestWord = 0;
  let longestIdx = 0;
  for (let key in comp) {
    if(comp[key].length> longestWord) {
        longestWord = comp[key].length;
        longestIdx = key;
    }
  }

  return comp[longestIdx];
};
