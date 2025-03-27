
// Non-Cyclical Number (Happy Number Problem)

// A non-cyclical number is an integer defined by the following algorithm:

// Given a positive integer, replace it with the sum of the squares of its digits.
// Repeat the above step until the number equals 1, or it loops infinitely in a cycle which does not include 1.
// If it stops at 1, then the number is a non-cyclical number.
// Given a positive integer n, return true if it is a non-cyclical number, otherwise return false.

    // Time Complexity: O(log n)
    // Space Complexity: O(1)

// Source: neetcode.io 

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n;
        let fast = this.sumOfSquares(n);

        while (slow !== fast) {
            fast = this.sumOfSquares(fast);
            fast = this.sumOfSquares(fast);
            slow = this.sumOfSquares(slow);
        }

        return fast === 1;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    sumOfSquares(n) {
        let output = 0;
        while (n !== 0) {
            output += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        return output;
    }
}