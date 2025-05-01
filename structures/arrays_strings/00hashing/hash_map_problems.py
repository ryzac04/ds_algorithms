# Is Anagram 
# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

#     Time Complexity: O(s + t) - for length of s and t
#     Space Complexity: O(1) - there are at most 26 characters 
    
# Source: neetcode.io

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT
    
# Two Sum 
# Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

# You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

# Return the answer with the smaller index first.

#     Time Complexity: O(n) - for length of nums
#     Space Complexity: O(n) - d/t use of hash map DS (Map in JS)

# Source: neetcode.io

class Solution:
    def twoSum(self, nums: int, target: int) -> int:
        prevMap = {}  # val -> index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i