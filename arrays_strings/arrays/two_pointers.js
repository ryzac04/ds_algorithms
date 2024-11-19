
// Two Interger Sum II

// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.
// Your solution must use O(1) additional space

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

// Flatten Array
// write a function to flatten a nested array and return a single-dimensional array containing all the elements. 

// Iterative Approach: 

    // Time Complexity: O(n) for length of the array
    // Space Complexity: O(n) d/t stack and result arrays
    // Stack to iteratively flatten the array - efficient in terms of time/space complexity and avoids potential stack overflow issues w/ deep nesting. Useful for deeply nested arrays or older environments. 

function flattenArray(arr) {
    const result = [];
    const stack = [...arr]; // Copy the input array to the stack

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            stack.push(...item); // Push array elements onto the stack
        } else {
            result.push(item); // Add non-array items to the result
        }
    }

    return result.reverse(); // Reverse to maintain original order
}

// Recursive Approach: 

    // Time Complexity: O(n) for length of the array 
    // Space Complexity: O(n) for result array; O(d) for recursion stack space where d is the maximum depth of the nesting 
    // Recursion and hash set 

function flattenArray(arr) {
    const result = [];

    function flatten(arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                flatten(item); // Recursive call for nested arrays
            } else {
                result.push(item); // Add non-array items to the result
            }
        }
    }

    flatten(arr);
    return result;
}

// JS's Array.prototype.flat()

// Time Complexity: 
// Space Complexity: 
// Most concise and built-in method for flattening arrays. Best used in environments that support ECMAScript 2019(ES10) or later. Most convenient and efficient method if depth of nesting is manageable. 

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flattened = nestedArray.flat(Infinity); // Flatten to any depth
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Remove Duplicates and Return Array 
// Given an array, remove all duplicate elements and return a new array w/out duplicates. 

    // Time Complexity: O(n^2)
    // Space Complexity: O(n)

let array = [0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 1, 3, 2]

function removeDuplicate(arr) {
    return arr.filter((value, index, array) => {
        return array.indexOf(value) === index;
    })
}

console.log(removeDuplicate(array))

    // Time Complexity: O(n) 
    // Space Complexity: O(m)
    
function duplicateRemove(arr) {
    let uniqueArr = Array.from(new Set(arr));
    return uniqueArr;
}

console.log(duplicateRemove(array));

// Maximum Subarray
// Given an array of integers nums, find the subarray with the largest sum and return the sum.

// A subarray is a contiguous non-empty sequence of elements within an array.

    // Time Complexity: O(n)
    // Space Complexity: O(1)

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

// Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[last] = nums1[i];
            i--;
        } else {
            nums1[last] = nums2[j];
            j--;
        }
        last--
    }
    while(j >= 0){
        nums1[last] = nums2[j];
        j--;
        last--;
    }
};

// Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
        k++
        }
    }
    return k; 
};

// Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let k = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k;
};

// Remove Duplicates from Sorted Array II
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;

    let k = 2;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // The candidate is the majority element
    return candidate;
}

// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for(const num of nums){
        if(!numSet.has(num-1)){
            let currentNum = num;
            let currentLength = 1;

            while(numSet.has(currentNum + 1)){
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};