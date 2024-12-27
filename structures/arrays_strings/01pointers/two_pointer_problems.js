
// Is Palindrome: determine if a given string is a palindrome.
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    // Time Complexity: O(n) for length of str in cleanStr and methods in reversedStr
    // Space Complexity: O(n) for space to store cleanStr and reversedStr

// Source: neetcode.io

// (isPalindrome() is NOT an example of two-pointer - this is just an example of a different way to do it)
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse('').join('');
    return cleanStr === reversedStr;
}

    // Time Complexity: O(n) for length of s
    // Space Complexity: O(n) for cleanS storage
    
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

// Two Integer Sum II

// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.
// Your solution must use O(1) additional space

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const sum = numbers[left] + numbers[right];

            if(sum < target){
                left++;
            }else if(sum > target){
                right--;
            }else{
                return [left + 1, right + 1];
            }
        }
        return [];
    }
}

// 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    // Time Complexity: O(n^2)
        // Sorting Array: nums.sort((a, b) => a - b) takes O(n log n) where n is the length of the input array
        // Main Loop: O(n) for length of the nums array
        // Two-Pointer Search: O(n^2) for each iteration of the outer loop, the inner loop runs in linear time O(n). Since the two-pointer search runs O(n) times inside the O(n) times outer loop, the total time complexity is O(n^2)
        // O(n^2) + O(n log n) = O(n^2)
    // Space Complexity:
        // Aux space ignoring output storage is O(1)
        // O(k)(including the output storage, where k <= O(n ^ 2) in the worst case for number of triplets stored in the result)
    
// Source: neetcode.io

function threeSum(nums) {
    let results = [];
    nums.sort((a, b) => a - b);  // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            // Skip duplicates for the second and third elements
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return results;
}

// Max Water Container

// You are given an integer array heights where heights[i] represents the height of the 
// i^th bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    // Time Complexity: O(n);
    // Space Complexity: O(1)

// Source: neetcode.io
    
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1; 
        let maxWater = 0; 

        while(l < r){
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);
            const area = width * height; 

            maxWater = Math.max(maxWater, area); 

            if(heights[l] < heights[r]){
                l++; 
            }else{
                r--; 
            }
        }
        return maxWater; 
    }
}

// Trapping Rain Water

// You are given an array non-negative integers heights which represent an elevation map. Each value heights[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }
        return res;
    }
}

// One Away
// Check if two strings are one edit away.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.5

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;

    let [shorter, longer] = str1.length < str2.length ? [str1, str2] : [str2, str1];
    let index1 = 0, index2 = 0, foundDifference = false;

    while (index1 < shorter.length && index2 < longer.length) {
        if (shorter[index1] !== longer[index2]) {
            if (foundDifference) return false;
            foundDifference = true;
            if (shorter.length === longer.length) index1++;
        } else {
            index1++;
        }
        index2++;
    }
    return true;
}