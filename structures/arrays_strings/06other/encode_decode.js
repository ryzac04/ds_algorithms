
// String Encode and Decode

// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

    // Time Complexity: O(n) for the total number of characters in the list of words
    // Space Complexity: O(n)
    
// Source: neetcode.io

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