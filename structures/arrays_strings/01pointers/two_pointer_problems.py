
#  Is Palindrome: determine if a given string is a palindrome.
#  Given a string s, return true if it is a palindrome, otherwise return false.

#  A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

#      Time Complexity: O(n) 
#      Space Complexity: O(1) 

#  Source: neetcode.io

from typing import List


class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1 

        while l < r:
            while l < r and not self.alphaNum(s[l]):
                l += 1 
            while r > l and not self.alphaNum(s[r]):
                r -= 1 
            if s[l].lower() != s[r].lower():
                return False 
            l, r = l + 1, r - 1

        return True 

    def alphaNum(self, c):
        return (
            ord('A') <= ord(c) <= ord('Z') or
            ord('a') <= ord(c) <= ord('z') or
            ord('0') <= ord(c) <= ord('9')
        )
    
# Two Integer Sum II

# Given an array of integers numbers that is sorted in non-decreasing order.
# Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

# There will always be exactly one valid solution.
# Your solution must use O(1) additional space

#     Time Complexity: O(n)
#     Space Complexity: O(1)

# Source: neetcode.io

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1

        while l < r:
            curSum = numbers[l] + numbers[r]

            if curSum > target:
                r -= 1
            elif curSum < target:
                l += 1
            else:
                return [l + 1, r + 1]
        return []
    
# 3Sum
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

# The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

#     Time Complexity: O(n^2)
#         Main Loop: O(n) for length of the nums array
#         Two-Pointer Search: O(n^2) for each iteration of the outer loop, the inner loop runs in linear time O(n). Since the two-pointer search runs O(n) times inside the O(n) times outer loop, the total time complexity is O(n^2)
#         O(n^2) + O(n log n) = O(n^2)
#     Space Complexity:
#         Aux space ignoring output storage is O(1)
#         O(k)(including the output storage, where k <= O(n ^ 2) in the worst case for number of triplets stored in the result)
    
# Source: neetcode.io

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if a > 0:
                break

            if i > 0 and a == nums[i - 1]:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
                        
        return res
    
# Max Water Container

# You are given an integer array heights where heights[i] represents the height of the 
# i^th bar.

# You may choose any two bars to form a container. Return the maximum amount of water a container can store.

#     Time Complexity: O(n);
#     Space Complexity: O(1)

# Source: neetcode.io

class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        res = 0

        while l < r:
            area = min(heights[l], heights[r]) * (r - l)
            res = max(res, area)
            if heights[l] <= heights[r]:
                l += 1
            else:
                r -= 1
        return res
    
# Trapping Rain Water

# You are given an array non-negative integers heights which represent an elevation map. Each value heights[i] represents the height of a bar, which has a width of 1.

# Return the maximum area of water that can be trapped between the bars.

#     Time Complexity: O(n)
#     Space Complexity: O(1)

# Source: neetcode.io

class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        l, r = 0, len(height) - 1
        leftMax, rightMax = height[l], height[r]
        res = 0
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                res += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                res += rightMax - height[r]
        return res