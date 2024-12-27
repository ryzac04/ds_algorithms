
// Climbing Stairs
// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

// Return the number of distinct ways to climb to the top of the staircase.

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // Two pointers

// Source: neetcode.io

function climbStairs(n) {
    if (n <= 1) return 1;

    let first = 1;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
}

// Example usage:
console.log(climbStairs(5)); // Output: 8

// Min Cost Climbing Stairs
// You are given an array of integers cost where cost[i] is the cost of taking a step from the ith floor of a staircase. After paying the cost, you can step to either the (i + 1)th floor or the (i + 2)th floor.

// You may choose to start at the index 0 or the index 1 floor.

// Return the minimum cost to reach the top of the staircase, i.e. just past the last index in cost.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

function minCostClimbingStairs(cost) {
    const n = cost.length;
    if (n === 0) return 0;
    if (n === 1) return cost[0];

    // Initialize the base cases
    let prev2 = 0;
    let prev1 = 0;

    // Compute the minimum cost to reach each step
    for (let i = 2; i <= n; i++) {
        let current = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = current;
    }

    // The answer is the minimum cost to reach the top (just past the last step)
    return prev1;
}

// Maximum Subarray (Kadane's Algorithm)
// Given an array of integers nums, find the subarray with the largest sum and return the sum.

// A subarray is a contiguous non-empty sequence of elements within an array.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length === 0) return 0;

        let currentSum = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}