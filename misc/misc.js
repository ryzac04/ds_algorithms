
// FizzBuzz
// Print numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz".For numbers which are multiples of both 3 and 5, print "FizzBuzz". 

    //  Time Complexity: O(n)
    // Space Complexity: O(n)

let nums = [1,2,3,4,5,6,7,8,9,10,15,25,30]

function fizzBuzz(nums) {
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}

console.log(fizzBuzz(nums));

// Or:
    
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
function fizzBuzz2(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

/////////////////////////////////VARIABLE MANIPULATION///////////////////////////////////////

// Variable Manipulation - declare two variables and swap their values w/out using a temporary variable.

    // Time Complexity: O(1)
    // Space Complexity: O(1)
    

let a = -10;
let b = 23;

console.log(`Before swap: a = ${a}, b = ${b}`);

a = a + b; 
b = a - b;
a = a - b;

console.log(`After swap: a = ${a}, b = ${b}`);

////////////////////////////////////WORD PROBLEMS////////////////////////////////////////////

// write a function to compute the Nth Fibonacci number.

// write a function that takes the current position of a knight on a chessboard, and returns a preliminary list of possible moves the knight could make - the current positions of other pieces are not provided - can't check against capturing pieces on the knight's own side nor making their king vulnerable to capture. 