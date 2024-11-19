
// Is Anagram 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    // Time Complexity: O(s + t) - for length of s and t
    // Space Complexity: O(s + t) - for space of each hash map 
    // 2 Hash Maps compared 
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

// String Encode and Decode

// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

    // Time Complexity: O(n) for the total number of characters in the list of words
    // Space Complexity: O(n) 
    
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""; 
        for(let s of strs){
            res += `${s.length}#${s}`; 
        }
        return res; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []; 
        let i = 0; 
        while(i < str.length){
            let j = i; 
            while(str[j] !== "#"){
                j++; 
            }
            let length = parseInt(str.substring(i, j), 10); 
            i = j + 1; 
            j = i + length; 
            res.push(str.substring(i, j)); 
            i = j; 
        }
        return res; 
    }
}

// Is Unique (CTCI Ch 1 pg 90, 1.1)
// Determine if a string has all unique characters. 

    // Time Complexity: O(n)
    // Space Complexity: O(n)

function isUnique(str) {
    if (str.length > 128) return false; // Assuming ASCII characters
    const charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

// Check Permutation (CTCI Ch 1 pg 90, 1.2)
// Check if one string is a permutation of the other. 
    // Time Complexity: O(n)
    // Space Complexity: O(n)

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

// Palindrome Permutation (CTCI ch 1 pg 91, 1.4)
// Check if a string can be rearranged into a palindrome. 
    // Time Complexity: O(n)
    // Space Complexity: O(1) - constant space for ASCII

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

// Zero Matrix (CTCI Ch. 1 pg 91, 1.8)
// Set rows and columns to 0 if an element is 0. 
    // Time Complexity: O(m * n)
    // Space Complexity: O(m + n)

function zeroMatrix(matrix) {
    const rows = new Set(), cols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let i of rows) matrix[i].fill(0);
    for (let j of cols) for (let i = 0; i < matrix.length; i++) matrix[i][j] = 0;
    return matrix;
}