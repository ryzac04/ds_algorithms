
// Buy and Sell Crypto
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

    // Time Complexity: O(n) for length of prices array 
    // Space Complexity: O(1) d/t use of two pointers - no data structure 
    // Two Pointers
    
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