// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) {
    return;
  }

  // ensure our lists are the same length
  if (l1.next && !l2.next) {
    l2.next = new ListNode();
  }
  if (!l1.next && l2.next) {
    l1.next = new ListNode();
  }

  let added = l1.val + l2.val;

  if (added > 9) {
    if (!l1.next) {
      // if next is null, create new nodes
      l1.next = new ListNode(1);
      l2.next = new ListNode();
    } else {
      l1.next.val = l1.next.val + 1;
    }
    added -= 10; // added should be our remainder
  }

  l1.val = added; // update current node value
  addTwoNumbers(l1.next, l2.next);
  return l1;
};
