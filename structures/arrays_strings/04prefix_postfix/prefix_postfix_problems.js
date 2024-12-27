
// Products of Array Discluding Self

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in O(n) time without using the division operation?

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []; 
        let prefix = 1; 
        let postfix = 1; 

        for(let i = 0; i < nums.length; i++){
            res[i] = prefix; 
            prefix *= nums[i]; 
        }
        for(let i = nums.length - 2; i >= 0; i--){
            postfix *= nums[i + 1];
            res[i] *= postfix; 
        }
        return res; 
    }
}  