// https://leetcode.com/problems/contains-duplicate/#
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const setNums = new Set();
  return nums.reduce((acc, num) => {
    if (acc) {
      //short circuit if we've already found a duplicate
      return acc;
    }
    if (setNums.has(num)) {
      // if num is already in the set num is a duplicate
      return true;
    } else {
      setNums.add(num);
      return acc;
    }
  }, false);
};
