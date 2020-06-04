# https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/

class Solution:
    def numberOfSteps (self, num: int) -> int:
        # num will always be positive
        # counter to count steps to zero
        # while loop for num approaching zero
            # if our current is even we should divide by 2
                #increment our counter
            # if our current number is odd, subtract
                #increment our counter
            
        # return counter
        
        
        counter = 0
        
        while num > 0: 
            if num % 2 == 0:
                num = num // 2
            else: 
                num = num - 1
            
            counter += 1
        
        return counter