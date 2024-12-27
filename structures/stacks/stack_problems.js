
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

// Source: neetcode.io

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
        return stack.length === 0; 
    }
}

// Minimum Stack

// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in O(1) time.

    // Space Complexity: O(n) for length of the stack
    // Time Complexity: O(1)

// Source: neetcode.io

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val); 
        val = Math.min(
            val,
            this.minStack.length === 0 
                ? val
                : this.minStack[this.minStack.length - 1], 
        );
        this.minStack.push(val); 
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop(); 
        this.minStack.pop(); 
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]; 
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]; 
    }
}

// Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

    // Space Complexity: O(n) for the number of tokens
    // Time Complexity: O(n)

// Source: neetcode.io

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []; 
        for(const c of tokens){
            if (c === "+"){
                stack.push(stack.pop() + stack.pop())
            }else if (c === "-"){
                const a = stack.pop();
                const b = stack.pop(); 
                stack.push(b - a); 
            }else if (c === "*"){
                stack.push(stack.pop() * stack.pop()); 
            }else if (c === "/"){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            }else{
                stack.push(parseInt(c)); 
            }
        }
        return stack.pop(); 
    }
}

// Generate Parentheses

// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// You may return the answer in any order. 

    // Space complexity: O(n)
    // Time complexity: O(n)

// Thought-process: 
// only add open parentheses if open < n
// only add closing parentheses if closed < open
// valid if open === closed === n

// Source: neetcode.io

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backtrack(n, 0, 0, '', res);
        return res;
    }

    /**
     * @param {number} n
     * @param {number} openN
     * @param {number} closedN
     * @param {string} current
     * @param {string[]}
     * @return {void}
     */
    backtrack(n, openN, closedN, current, res) {
        if (openN === closedN && openN === n) {
            res.push(current);
            return;
        }

        if (openN < n) {
            this.backtrack(n, openN + 1, closedN, current + '(', res);
        }
        if (closedN < openN) {
            this.backtrack(n, openN, closedN + 1, current + ')', res);
        }
    }
}

// Daily Temperatures

// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

    // Space Complexity: O(n)
    // Time Complexity: O(n)

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; 

        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const prevDay = stack.pop(); 
                result[prevDay] = i - prevDay; 
            }
            stack.push(i); 
        }
        return result; 
    }
}

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0); // Initialize the result array with 0s
    const stack = []; // Monotonic stack to store indices of temperatures

    for (let i = 0; i < n; i++) {
        // While stack is not empty and the current temperature is greater than the temperature at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevDay = stack.pop(); // Get the index of the previous day
            result[prevDay] = i - prevDay; // Calculate how many days until the warmer temperature
        }
        // Push the current index onto the stack
        stack.push(i);
    }

    return result; // Return the result array
}

// Car Fleet

// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

    // Space Complexity: O(n)
    // Time Complexity: O(n log n)

// Source: neetcode.io

function carFleet(target, position, speed) {
    const n = position.length;
    let cars = [];

    // Combine position and speed for each car and sort by position descending
    for (let i = 0; i < n; i++) {
        cars.push([position[i], speed[i]]);
    }
    
    // Sort cars by position in descending order (closer to the destination first)
    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    // Iterate through cars and compute time to reach destination
    for (let i = 0; i < n; i++) {
        let [pos, spd] = cars[i];
        let timeToTarget = (target - pos) / spd;
        
        // If the stack is empty or the current car takes more time than the car in front
        if (stack.length === 0 || timeToTarget > stack[stack.length - 1]) {
            stack.push(timeToTarget);  // New fleet
        }
        // Otherwise, the current car joins the fleet in front, so no push to stack
    }

    return stack.length;  // Number of distinct fleets
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for(let i = 0; i < position.length; i++){
            cars.push([position[i], speed[i]]); 
        }

        cars.sort((a, b) => b[0] - a[0]); 

        let stack = []; 
        for(let i = 0; i < position.length; i++){
            const timeToTarget = (target - position[i]) / speed[i]; 
            if(stack.length === 0 || timeToTarget > stack[stack.length - 1]){
                stack.push(timeToTarget); 
            }
        }
        return stack.length; 
    }
}

// Largest Rectangle in Histogram

// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

// Return the area of the largest rectangle that can be formed among the bars.

// Note: This chart is known as a histogram.

    // Space Complexity: O(n) - in the worst case, the stack contain all the indices of the bars, which means the space complexity is also linear.
    // Time Complexity: O(n) - each bar is pushed and popped from the stack at most once, so the time complexity is linear in the number of bars.

// Source: neetcode.io

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;
        heights.push(0);  // Adding a zero height at the end to flush out all the bars
       
        for (let i = 0; i < heights.length; i++) {
            // While the current bar is shorter than the bar on the top of the stack
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];  // The height of the bar we are considering
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;  // Calculate the width
                maxArea = Math.max(maxArea, height * width);  // Update maxArea
            }
            stack.push(i);  // Push current index to stack
        }
        
        return maxArea;
    }
}
