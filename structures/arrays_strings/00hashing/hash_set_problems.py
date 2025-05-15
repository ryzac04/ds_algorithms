# Contains Duplicate and Return Boolean 
# Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

    # Time Complexity: O(n) - length of nums array
    # Space Complexity: O(n) - d/t using Set data structure

# Source: neetcode.io

class Solution:
    def hasDuplicate(nums):
        numsSet = set()
        for num in nums:
            if num in numsSet:
                return True
            numsSet.add(num)
        return False