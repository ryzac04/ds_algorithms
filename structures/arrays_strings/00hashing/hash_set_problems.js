
// Contains Duplicate and Return Boolean 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

    // Time Complexity: O(n) - length of nums array
    // Space Complexity: O(n) - d/t using Set data structure 
    // Hash Set
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set(); 

        for(let num of nums){
            if(numsSet.has(num)){
                return true; 
            }
            numsSet.add(num);
        }
        return false; 
    }
}

// Longest Consecutive Sequence
// Given an array of integers nums, return the length of the longest consecutive sequence of elements.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

// You must write an algorithm that runs in O(n) time.
    
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const n of numSet) {
            if (!numSet.has(n - 1)) {
                let length = 1;
                while (numSet.has(n + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}