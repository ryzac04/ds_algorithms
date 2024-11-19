
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

// Two Sum 
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

    // Time Complexity: O(n) - for length of nums
    // Space Complexity: O(n) - d/t use of hash map DS (Map in JS)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map(); 

        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i]; 
            if(numsMap.has(complement)){
                return [numsMap.get(complement), i]
            }
            numsMap.set(nums[i], i);
        }
        return []; 
    }
}

    // Time Complexity: O(n + n) for each for loop - simplifies to O(n) 
    // Space Complexity: O(n) d/t mapOfNumbers hash map 
    
const diffTwoSum = (array, goal) => {
    let mapOfNumbers = {};
    let twoIndices = [];

    for (let i = 0; i < array.length; i++){
        mapOfNumbers[array[i]] = i;
    }

    for (let i = 0; i < array.length; i++){
        let target = goal - array[i];
        if (mapOfNumbers[target] !== undefined && mapOfNumbers[target] !== i) {
            twoIndices.push(i);
            twoIndices.push(mapOfNumbers[target]);
            break;
        }
    }
    return twoIndices;
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

// Top K Elements in List

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

    // Time Complexity: O(n)
    // Space Complexity: O(n)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}

// Valid Sudoku

// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

    // Space Complexity: O(1); O(9 ** e)
    // Time Complexity: O(1); 

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map(); // key = (r / 3) * 3 + c / 3

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                if (cell === '.') {
                    continue;
                }
                if (
                    rows.get(r)?.has(cell) ||
                    cols.get(c)?.has(cell) ||
                    squares
                        .get(Math.floor(r / 3) * 3 + Math.floor(c / 3))
                        ?.has(cell)
                ) {
                    return false;
                }
                cols.set(c, new Set(cols.get(c)).add(cell));
                rows.set(r, new Set(rows.get(r)).add(cell));
                squares.set(
                    Math.floor(r / 3) * 3 + Math.floor(c / 3),
                    new Set(
                        squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3)),
                    ).add(cell),
                );
            }
        }
        return true;
    }
}