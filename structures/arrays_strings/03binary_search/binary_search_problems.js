
// Binary Search
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in O(logn) time.

    // Time Complexity: O(log n)
    // Space Complexity:

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length -1;

        while(l <= r){
            const m = l + Math.floor((r-l)/2);
            if(nums[m] > target){
                r = m - 1;
            }else if(nums[m] < target){
                l = m + 1;
            }else{
                return m;
            }
        }
        return -1;
    }
}