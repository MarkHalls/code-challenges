// https://leetcode.com/problems/contains-duplicate-ii/submissions/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numIndex = {};
  return nums.some((num, index) => {
    if (Math.abs(index - numIndex[num]) <= k) {
      return true;
    } else {
      numIndex[num] = index;
    }
  });
};
