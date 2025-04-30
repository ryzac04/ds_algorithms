
// Is Anagram 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    // Time Complexity: O(s + t) - for length of s and t
    // Space Complexity: O(1) - there are at most 26 characters 
    
// Source: neetcode.io

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false; 

        const countS = {};
        const countT = {};

        for(let i = 0; i < s.length; i++){
            countS[s[i]] = 1 + (countS[s[i]] || 0); 
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }

        for(let key in countS){
            if(countS[key] !== countT[key]) return false;
        }
        return true; 
    }
}

// Two Sum 
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

    // Time Complexity: O(n) - for length of nums
    // Space Complexity: O(n) - d/t use of hash map DS (Map in JS)

// Source: neetcode.io

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

// Anagram Groups
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    // Time Complexity: O(m * n)
        // Iterating through each string: m is length of string array (strs) and n is average length of each individual string (s)
        // technically O(m * n * 26) for creating the key using count.join('#') but because this is linear the overall time is constant
    // Space Complexity: O(m * n)
        // Storage for Hashmap: m unique keys and n for the average length of the strings
        // Character Frequency Count Array: O(1) d/t O(26) - fixed size for each letter of the alphabet
        // Key Strings: O(1) d/t O(26) - fixed d/t fixed size of Character Frequency Count Array

// Source: neetcode.io

class Solution {
    /**
     * @param {string[]} strs - Array of input strings
     * @return {string[][]} - Grouped list of anagrams
     */
    groupAnagrams(strs) {
        // Initialize an empty object (hashmap) to store grouped anagrams
        const ans = {};

        // Loop through each string in the input array 'strs'
        for (const s of strs) {
            // Create an array of size 26 (for each letter of the alphabet)
            // Each index represents a letter ('a' to 'z'), and it tracks the frequency of each character in the string
            const count = Array(26).fill(0);

            // Loop through each character of the current string 's'
            for (const c of s) {
                // Calculate the character's position in the alphabet by subtracting 'a'.charCodeAt(0)
                // This converts the character to an index between 0 and 25 (for 'a' to 'z')
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            // Convert the 'count' array into a unique key by joining the counts with a delimiter ('#')
            // This key represents the frequency of each letter in the string
            // Example: if count = [1, 0, 0, ..., 1], key = "1#0#0#...#1"
            const key = count.join('#');

            // If this key doesn't already exist in the hashmap 'ans', create a new array for this key
            if (!ans[key]) {
                ans[key] = [];
            }

            // Add the original string 's' to the list of anagrams for this key
            ans[key].push(s);
        }

        // Return all values (i.e., arrays of grouped anagrams) from the hashmap
        return Object.values(ans);
    }
}

// Top K Elements in List

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: neetcode.io

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

// You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

    // Space Complexity: O(1); O(9 ** e)
    // Time Complexity: O(1);

// Source: neetcode.io

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

// Check Permutation 
// Check if one string is a permutation of the other. 
    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 90, problem 1.2

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;

    // Create a frequency map for str1
    const charCount = {};

    // Count each character in str1
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrease the count for each character in str2
    for (let char of str2) {
        if (!charCount[char]) {
            return false; // Character mismatch or excess in str2
        }
        charCount[char]--;
    }

    // If all counts are zero, the strings are permutations
    return true;
}

// Palindrome Permutation
// Check if a string can be rearranged into a palindrome. 
    // Time Complexity: O(n)
    // Space Complexity: O(1) - constant space for ASCII

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.4

function palindromePermutation(str) {
    const charCounts = {};
    for (let char of str.replace(/\s+/g, '').toLowerCase()) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let count of Object.values(charCounts)) {
        if (count % 2 !== 0) oddCount++;
        if (oddCount > 1) return false;
    }
    return true;
}