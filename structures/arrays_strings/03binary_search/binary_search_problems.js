
// Binary Search
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in O(logn) time.

// Iterative Approach
    // Time Complexity: O(log n)
    // Space Complexity: O(1)

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

// Search a 2D Matrix 
// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Binary Search: 
    // Time Complexity: O(log m + log n) - reduces to O(log(m * n)) - where m is the number of rows and n is the number of columns of the 2D matrix
    // Space Complexity: O(1)

// Source: neetcode.io 

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // Define the number of rows in the matrix 
        let ROWS = matrix.length; 
        // Define the number of columns in the matrix (based on the first row)
        let COLS = matrix[0].length; 

        // Initialize the left pointer for binary search
        let l = 0;
        // Initialize the right pointer to the last index in the 1D representation of the 2D matrix 
        let r = ROWS * COLS - 1; 

        // Perform binary search while the search space is valid 
        while (l <= r){
            // Calculate the middle index of the current search space 
            let m = l + Math.floor((r - l) / 2);
            // Convert the 1D index 'm' to its corresponding row index in the matrix 
            let row = Math.floor(m / COLS);
            // Convert the 1D index 'm' to its corresponding column index in the matrix 
            let col = m % COLS; 

            // Compare the target value with the current matrix element
            if (target > matrix[row][col]) {
                // If the target is greater, narrow the search to the right half 
                l = m + 1; 
            } else if (target < matrix[row][col]) {
                // If the target is smaller, narrow the search to the left half 
                r = m - 1; 
            } else {
                // If target is found, return true 
                return true; 
            }
        }
        // If the loope ends without finding the target, return false 
        return false; 
    }
}

// Koko Eating Bananas

// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.

// Binary Search:
    // Time Complexity: O(n * log m) where n is the length of the input array piles and m is the maximum number of bananas in a pile
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const k = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}

// Find Minimum in Rotated Sorted Array

// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.

// Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Binary Search (Lower Bound):
    // Time Complexity: O(log n)
    // Space Complexity: O(1) 

// Source: neetcode.io

    class Solution {
        /**
         * @param {number[]} nums
         * @return {number}
         */
        findMin(nums) {
            let l = 0, r = nums.length - 1;
            while (l < r) {
                let m = l + Math.floor((r - l) / 2);
                if (nums[m] < nums[r]) {
                    r = m;
                } else {
                    l = m + 1;
                }
            }
            return nums[l];
        }
    }

// Search in Rotated Sorted Array

// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

// [3,4,5,6,1,2] if it was rotated 4 times.
// [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

// You may assume all elements in the sorted rotated array nums are unique,

// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Binary Search (One Pass)
    // Time Complexity: O(log n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
    }
}

// Time Based Key-Value Store

// Implement a time-based key-value data structure that supports:
    // Storing multiple values for the same key at specified time stamps
    // Retrieving the key's value at a specified timestamp

// Implement the TimeMap class:
    // TimeMap() Initializes the object.
    // void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
    // String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".

// Note: For all calls to set, the timestamps are in strictly increasing order.

// Binary Search (Sorted Map)
    // Time Complexity: O(1) for set() and O(log n) for get()
    // Space Complexity O(m * n) 
    // Where n is the total number of values associated with a key and m is the total number of keys

// Source: neetcode.io

    class TimeMap {
        constructor() {
            this.keyStore = new Map();
        }
    
        /**
         * @param {string} key
         * @param {string} value
         * @param {number} timestamp
         * @return {void}
         */
        set(key, value, timestamp) {
            if (!this.keyStore.has(key)) {
                this.keyStore.set(key, []);
            }
            this.keyStore.get(key).push([timestamp, value]);
        }
    
        /**
         * @param {string} key
         * @param {number} timestamp
         * @return {string}
         */
        get(key, timestamp) {
            const values = this.keyStore.get(key) || [];
            let left = 0;
            let right = values.length - 1;
            let result = '';
    
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (values[mid][0] <= timestamp) {
                    result = values[mid][1];
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
    
            return result;
        }
    }

// Binary Search (Array)
    // Time Complexity: O(1) for set() and O(log n) for get()
    // Space Complexity: O(m * n)
    // Where n is the total number of values associated with a key and m is the total number of keys 

// Source: neetcode.io

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];
        let left = 0;
        let right = values.length - 1;
        let result = '';

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}