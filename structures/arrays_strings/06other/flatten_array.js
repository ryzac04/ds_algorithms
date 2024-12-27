
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