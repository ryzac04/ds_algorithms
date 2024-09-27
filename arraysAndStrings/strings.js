
//////////////////////////////HASHING///////////////////////////////////////

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

//////////////////////////////TWO POINTERS//////////////////////////////////////////////

// Is Palindrome: determine if a given string is a palindrome.
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    // Time Complexity: O(n) for length of str in cleanStr and methods in reversedStr
    // Space Complexity: O(n) for space to store cleanStr and reversedStr

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse('').join('');
    return cleanStr === reversedStr;
}

    // Time Complexity: O(n) for length of s
    // Space Complexity: O(n) for cleanS storage
    // Two Pointers
    
function diffIsPalindrome(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let l = 0;
    let r = cleanS.length - 1;

    while(l <= r){
        if (cleanS[l] !== cleanS[r]) return false;
        l++;
        r--;
    };
    return true;
}

//////////////////////////////SLIDING WINDOW////////////////////////////////////////////

// Longest Substring w/out Duplicates
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}

// Reverse a String  
    // Time Complexity: O(n)
    // Space Complexity: O(n) 

function reverseString(str) {
    return str.split('').reverse('').join('').toLowerCase();
}

console.log(reverseString('Hello'));
console.log(reverseString('Racecar'));

    // Time Complexity: O(n)
    // Space Complexity: O(n)

function stringReverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr.toLowerCase();
}

console.log(stringReverse('Hello'));
console.log(stringReverse('Racecar'));