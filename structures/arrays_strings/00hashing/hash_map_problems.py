# Is Anagram 
# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

#     Time Complexity: O(s + t) - for length of s and t
#     Space Complexity: O(1) - there are at most 26 characters 
    
# Source: neetcode.io

from collections import defaultdict
from typing import List


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

# Anagram Groups
# Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

#     Time Complexity: O(m * n)
#         Iterating through each string: m is length of string array (strs) and n is average length of each individual string (s)
#         technically O(m * n * 26) for creating the key using count.join('#') but because this is linear the overall time is constant
#     Space Complexity: O(m * n) for output list 
#         Storage for Hashmap: m unique keys and n for the average length of the strings
#         Character Frequency Count Array: O(1) d/t O(26) - fixed size for each letter of the alphabet
#         Key Strings: O(1) d/t O(26) - fixed d/t fixed size of Character Frequency Count Array

# Source: neetcode.io

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            res[tuple(count)].append(s)
        return list(res.values())
    
# Top K Elements in List

# Given an integer array nums and an integer k, return the k most frequent elements within the array.

# The test cases are generated such that the answer is always unique.

# You may return the output in any order.

#     Time Complexity: O(n)
#     Space Complexity: O(n)

# Source: neetcode.io

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for num in nums:
            count[num] = 1 + count.get(num, 0)
        for num, cnt in count.items():
            freq[cnt].append(num)
        
        res = []
        for i in range(len(freq) - 1, 0, -1):
            for num in freq[i]:
                res.append(num)
                if len(res) == k:
                    return res
                
# Valid Sudoku

# You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

# Each row must contain the digits 1-9 without duplicates.
# Each column must contain the digits 1-9 without duplicates.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
# Return true if the Sudoku board is valid, otherwise return false

# Note: A board does not need to be full or be solvable to be valid.

#     Time Complexity: O(n^2)
#     Space Complexity: O(n)

# Source: neetcode.io

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [0] * 9
        cols = [0] * 9
        squares = [0] * 9

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                
                val = int(board[r][c]) - 1
                if (1 << val) & rows[r]:
                    return False
                if (1 << val) & cols[c]:
                    return False
                if (1 << val) & squares[(r // 3) * 3 + (c // 3)]:
                    return False
                    
                rows[r] |= (1 << val)
                cols[c] |= (1 << val)
                squares[(r // 3) * 3 + (c // 3)] |= (1 << val)

        return True