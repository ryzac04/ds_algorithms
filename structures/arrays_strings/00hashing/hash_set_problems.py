# Contains Duplicate and Return Boolean 
# Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

    # Time Complexity: O(n) - length of nums array
    # Space Complexity: O(n) - d/t using Set data structure

# Source: neetcode.io

from typing import List


class Solution:
    def hasDuplicate(nums):
        numsSet = set()
        for num in nums:
            if num in numsSet:
                return True
            numsSet.add(num)
        return False

# Longest Consecutive Sequence
# Given an array of integers nums, return the length of the longest consecutive sequence of elements.

# A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

# You must write an algorithm that runs in O(n) time.

#     Time Complexity: O(n)
#     Space Complexity: O(n)
    
# Source: neetcode.io

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for num in numSet:
            if (num - 1) not in numSet:
                length = 1
                while (num + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest