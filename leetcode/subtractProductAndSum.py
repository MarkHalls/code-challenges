# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        sums = 0
        product = 1
        
        num = str(n)
        digits = [int(value) for value in num]
        
        for digit in digits:
            sums += digit
            product *= digit
            
        return product - sums