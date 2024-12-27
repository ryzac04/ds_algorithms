
// Buy and Sell Crypto
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

    // Time Complexity: O(n) for length of prices array
    // Space Complexity: O(1) d/t use of two pointers - no data structure
    
// Source: neetcode.io

class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxPrice = 0;

        while(r <= prices.length - 1){
            if(prices[l] < prices[r]){
                const profit = prices[r] - prices[l];
                maxPrice = Math.max(maxPrice, profit)
            } else{ 
                l = r;
            }
            r++;
        }
        return maxPrice;
    }

    diffMaxProfit(prices) {
        let l = 0; 
        let r = 1;
        let maxPrice = 0;

        while(r <= prices.length - 1){
            const profit = prices[r] - prices[l];
            if(profit < 0){
                l=r;
            }
            r++;
            maxPrice = Math.max(maxPrice, profit); 
        }
        return maxPrice; 
    }
}

// Longest Substring w/out Duplicates
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
// Source: neetcode.io

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

// Longest Repeating Substring With Replacement
// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

    // Time Complexity: O(n)
    // Space Complexity: O(m)
    // Where n is the length of the string and m is the total number of unique characters in the string.

// Source: neetcode.io

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let l = 0; 
        let maxf = 0; 

        let res = 0;

        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, count.get(s[r]));

            while ((r - l + 1) - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

// Permutation String
// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        // Set up count arrays for both strings - stringCount[i] will be how many times the letter appears in each respective string at position i for the length of s1 only, not the entire respective strings. 
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }
        // Create matches variable and increase it for each match found using strict equality between s1Count[i] and s2Count[i]. 
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }
        // Create the sliding window. 
        // l is the left boundary starting at 0.
        // r is the right boundary at position s1.length.
        // Continue the loop by moving r for the length of s2, non-inclusive. 
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            // if matches reaches 26, then that means the count of letters in the string s1 are equal to the count of letters in the sliding window we're currently working with in s2. A permutation is present so we can stop the loop and return true. 
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}