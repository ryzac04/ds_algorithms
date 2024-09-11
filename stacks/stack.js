
// Validate Parenthesis
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

    // Space Complexity: O(n) for length of s
    // Time Complexity: O(n) for length of the stack. Hash map is O(1) b/c it is fixed 
    // Stack and Hash Map 

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            '(' : ')',
            '{' : '}',
            '[' : ']',
        };

        for(let char of s){
            if(char in pairs){
                stack.push(char); 
            }else{
                if(stack.length === 0 || pairs[stack.pop()] !== char) return false; 
            }
        }
        return true; 
    }
}