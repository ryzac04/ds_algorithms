
// Contains Duplicate and Return Boolean 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

    // Time Complexity: O(n) - length of nums array
    // Space Complexity: O(n) - d/t using Set data structure

// Source: neetcode.io

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

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
// Source: neetcode.io

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

// Is Unique
// Determine if a string has all unique characters. Write a solution with an additional data structure, then write another solution without the use of a data structure. 

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 90, problem 1.1

function isUnique(str) {
    if (str.length > 128) return false; // Assuming ASCII characters
    const charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

// No DS
    // Time Complexity:  O(n^2) for use of nested loops
    // Space Complexity: O(1) - no DS 

function isUniqueWithoutDS(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++){
            if (str[i] === str[j]) return false; 
        }
    }
    return true; 
}