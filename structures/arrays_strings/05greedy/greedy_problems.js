
// Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: leetcode     

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // The candidate is the majority element
    return candidate;
}

// String Compression
// Compress strings using counts of repeated characters. 

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.6

function stringCompression(str) {
    let compressed = '', count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            compressed += str[i] + count;
            count = 0;
        }
    }
    return compressed.length < str.length ? compressed : str;
}