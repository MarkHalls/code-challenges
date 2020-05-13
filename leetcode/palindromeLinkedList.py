class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        def palindrome(slow, fast):
            if fast is None or fast.next is None: 
                return slow
            
            
            second_half = palindrome(slow.next, fast.next.next)
            
            if second_half is None or second_half.val  slow.val: 
                return True
            
            if second_half is False or slow.val is not second_half.val:
                return False
            return second_half.next

        if head is None or head.next is None: 
            return True
        
        if palindrome(head, head):
            return True
        else: 
            return False