
// Missing Number
// Given an array nums containing n integers in the range [0, n] without any duplicates, return the single number in the range that is missing from nums.

// Follow-up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = nums.length;

        for (let i = 0; i < nums.length; i++) {
            res += i - nums[i];
        }
        return res;
    }
}