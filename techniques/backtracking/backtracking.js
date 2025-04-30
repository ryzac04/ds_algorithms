// Subsets
// Given an array nums of unique integers, return all possible subsets of nums.

// The solution set must not contain duplicate subsets. You may return the solution in any order.

// Source: neetcode.io

    // Time Complexity: O(n * 2^n)
    // Space Complexity: O(n) extra space; O(2^n) for the output list

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subset = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }

    /**
     * @param {number[]} nums
     * @param {number} i
     * @param {number[]} subset
     * @param {number[][]} res
     * @return {void}
     */
    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop();
        this.dfs(nums, i + 1, subset, res);
    }
}

// Combination Sum
// You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.

// The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Source: neetcode.io

    // Time Complexity: O(t/(2m))
    // Space Complexity: O(t/m)

    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} target
         * @returns {number[][]}
         */
        combinationSum(nums, target) {
            const res = [];
            nums.sort((a, b) => a - b);
            
            const dfs = (i, cur, total) => {
                if (total === target) {
                    res.push([...cur]);
                    return;
                }
                
                for (let j = i; j < nums.length; j++) {
                    if (total + nums[j] > target) {
                        return;
                    }
                    cur.push(nums[j]);
                    dfs(j, cur, total + nums[j]);
                    cur.pop();
                }
            };
            
            dfs(0, [], 0);
            return res;
        }
    }

// Combination Sum II
// You are given an array of integers candidates, which may contain duplicates, and a target integer target. Your task is to return a list of all unique combinations of candidates where the chosen numbers sum to target.
    
// Each element from candidates may be chosen at most once within a combination. The solution set must not contain duplicate combinations.
    
// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Source: neetcode.io

    // Time Complexity: O(n * 2^n)
    // Space Complexity: O(n)

class Solution {
    constructor() {
        this.res = [];
    }

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.res = [];
        candidates.sort((a, b) => a - b);

        const dfs = (idx, path, cur) => {
            if (cur === target) {
                this.res.push([...path]);
                return;
            }
            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                if (cur + candidates[i] > target) {
                    break;
                }

                path.push(candidates[i]);
                dfs(i + 1, path, cur + candidates[i]);
                path.pop();
            }
        };

        dfs(0, [], 0);
        return this.res;
    }
}