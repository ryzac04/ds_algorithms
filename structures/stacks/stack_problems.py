
# Validate Parenthesis
# You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

# The input string s is valid if and only if:

# Every open bracket is closed by the same type of close bracket.
# Open brackets are closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
# Return true if s is a valid string, and false otherwise.

#     Space Complexity: O(n) for length of s
#     Time Complexity: O(n) for length of the stack. Hash map is O(1) b/c it is fixed
#     Stack and Hash Map

# Source: neetcode.io

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {
            '(':')',
            '[':']',
            '{':'}',
        }

        for c in s:
            if c in pairs:
                stack.append(c)
            else:
                if len(stack) == 0 or pairs[stack.pop()] != c:
                    return False
        
        return len(stack) == 0; 