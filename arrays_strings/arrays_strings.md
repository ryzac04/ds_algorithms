
09/07/2024

# JS Array Methods:

 1) Adding and Removing Elements:
	* push(): adds one or more elements to the end of an array and returns the new length
	   * O(1)
	* pop(): removes the last element from an array and returns that element
	   * O(1)
	* shift(): removes the first element from an array and returns that element
	   * O(n): removing first element requires shifting all remaining elements to the left 
	* unshift(): adds one or more elements to the beginning of an array and returns the new length
	   * O(n): adding element to the beginning requires shifting all other elements to the right

2) Accessing Elements:
	* concat(): combines two or more arrays and returns a new array
	   * O(m + n)
	* slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end
	   * O(n)
    * join(): joins all elements of an array into a string, separated by a specified separator (if provided), and returns the resulting string. Does not modify the original array but returns a new string based on the array's elements
      * O(n)
	* indexOf(): returns the first index at which a given element can be found in the array, or -1 if not 
	  present 
	   * why -1?: this convention is used because array indices in JS are zero*based, meaning the first 
		  element of an array has an index of 0. If an index is found, it will return either 0 or a positive number. -1 is used as the return value and makes it easy to check the result using boolean logic. 
	   * O(n): searching for an element in an unsorted array requires inspecting each element sequentially or until the end of the array is reached. Worst case is O(n).
	* lastIndexOf(): returns the last index at which a given element can be found in the array, or *1 if not present
	   * O(n): searching for an element in an unsorted array requires inspecting each element sequentially or until the end of the array is reached. Worst case is O(n).

3) Modifying Arrays:
	* splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	   * O(n)
	* fill(): fills all the elements of an array from a start index to an end index w/ a static value
	   * O(n)
	* reverse(): reverses the order of the elements in an array
	   * O(n)
    * flat(): flattens nested arrays into a single-level array; creates a new array w/ all sub-array elements concatenated into it recursively up to the specified depth
      * O(n)

4) Iterating Over Arrays:
	* forEach(): executes a provided function once for each array element
	   * O(n)
	* map(): creates a new array populated w/ the results of calling a provided function on every element in the calling array
	   * O(n)
	* filter(): creates a new array w/ all elements that pass the test implemented by the provided function
	   * O(n)
	* reduce(): executes a reducer function on each element of the array, resulting in a single output value
	   * O(n)

5) Checking Array Content:
	* includes(): determines whether an array includes a certain element, returning true or false as appropriate
	   * O(n)
	* some(): tests whether at least one element in the array passes the test implemented by the provided function
	   * O(n)
	* every(): tests whether all elements in the array pass the test implemented by the provided function  
	   * O(n)

6) Sorting and Searching:
	* sort(): sorts the elements of an array in place and returns the sorted array
	   * O(n log n)
	* find(): returns the value of the first element in the array that stisfies the provided testing function
	   * O(n)
	* findIndex(): returns the index of the first element in the array that satisfies the provided testing function
	   * O(n)
  
# Techniques for solving different types of problems involving arrays or lists: 

* Iteration
  * Description: the process of looping through each element of an array or list
  * Common Use: accessing or modifying elements, summing values, filtering, or searching
  * Types (JavaScript): 
    * for:
      * Purpose: loops a block of code a specific number of times; traditional loop in JS
      * Description: starts w/ an initialization, runs as long as the condition is true, and updates the loop control variable (increment) after each iteration
      * Use Case: when you know how many times you want to loop
      * Syntax: 
        ```javascript
        for(initialization; condition; increment){
            // code to be executed 
        }

        // forward:  
        for(let i = 0; i < arr.length; i++){}

        // backward: 
        for(let i = arr.length - 1; i >= 0; i--){}
    * while:
      * Purpose: loops through block of code as long as a specified condition is true
      * Description: the loop keeps executing as long as the condition remains true. The condition is checked before each iteration. 
      * Use Case: When you don't know the exact number of iterations but want to loop until a condition is met. 
      * Syntax:
        ```javascript
        while(condition){
            // code to be executed
        }

        let i = 0; 
        while (i < 5){
            console.log(i);
            i++
        }
    * do...while:
      * Purpose: executes the block of code once, then repeats the loop as long as the condition is true
      * Description: the block of code is executed at least once before the condition is checked 
      * Use Case: when you want to ensure that the loop runs at least once, regardless of the condition
      * Syntax: 
        ```javascript
        do{
            // code to be executed
        } while (condition);

        let i = 0; 
        do {
            console.log(i);
            i++;
        } while (i < 5);
    * for...in:
      * Purpose: loops through the properties (keys) of an object
      * Description: iterates over the enumerable properties of an object (or the index values of an array-like object)
      * Use Case: when you need to loop through an object's properties or an array*like structure 
      * Syntax: 
        ```javascript
        for(key in object) {
            // code to be executed
        }

        const obj = {a: 1, b: 2, c: 3}
        for(let key in obj){
            console.log(key, obj[key])
        }
    * for...of: iterates over the values of an iterable (arrays, strings, etc.)
      * Purpose: loops through the values of an iterable object (arrays, strings, maps, sets, etc.)
      * Description: iterates over the values (not the keys) of iterable objects like arrays or strings 
      * Use Case: when you need to loop through values of arrays, strings, or any iterable object 
      * Syntax: 
        ```javascript
        for(value of iterable){
            // code to be executed 
        }

        const arr = [1, 2, 3];
        for(let value of arr){
            console.log(value); 
        }
    * forEach: array-specific method that executes a function on each element
      * Purpose: executes a function for each element in an array 
      * Description: loops through array elements and applies a callback function to each element
      * Use Case: when you need to perform an action on each element in an array 
      * Syntax: 
        ```javascript
        array.forEach(function(element, index, array){
            // code to be executed 
        })

        const arr = [1, 2, 3];
        arr.forEach((value, index) => {
            console.log(index, value); 
        })
    * break: exits the loop; terminates the loop entirely
      * Syntax: 
        ```javascript
        for(let i = 0; i < 5; i++){
            if (i === 3) break; // stops the loop at i === 3
            console.log(i);
        }
    * continue: skips the current iteration and continues with the next one
      * Syntax: 
        ```javascript
        for (let i = 0; i < 5; i++){
            if (i === 3) continue; // skips the iteration when i === 3
            console.log(i); 
        }

* Hashing: 
  * Description: using a hash table (or object in JS) to store elements for constant-time lookups
  * Common Use: searching for elements, checking for duplicates, counting frequencies
* Two-Pointer: 
  * Description: using two pointers (indices) to solve problems in a single pass through the array
  * Common Use: sorting-related problems, finding pairs w/ a specific sum, reversing arrays, or finding the middle element
* Sliding Window:
  * Description: maintaining a "window" of elements in the array that moves from one end to the other to solve problems efficiently
  * Common Use: finding subarrays  with a specific sum, finding the max/min element in a subarray, or solving fixed-size window problems 
* Precomputations: 
  * Description: precomputing intermediate results (e.g., sums, products, or any cumulative property) to answer queries or solve problems efficiently.
  * Common Use:
    * Problems involving cumulative sums (Prefix Sum) or products (Prefix and Postfix Products).
    * Problems requiring multiple queries on ranges or elements.
    * Scenarios where preprocessing saves redundant computation
  * Sub-categories: 
    * Prefix Sum:
      * Description: precomputing the sum of elements up to each index to solve sum-related problems efficiently
      * Common Use: solving range sum queries, or subarray sum problems in constant time after preprocessing.
    * Prefix and Postfix Products
* Binary Search: 
  * Description: efficient search in sorted arrays by dividing the array in half with each step
  * Common Use: finding an element, searching for boundaries, or solving optimization problems 
* Sorting:
  * Description: rearranging elements of an array in increasing or decreasing order
  * Common Use: preprocessing for binary search, merging arrays, finding closest pairs, etc 
* Greedy: 
  * Description: making the locally optimal choice at each step in hopes of finding the global optimum
  * Common Use: interval problems, finding subarrays with constraints (like non-overlapping intervals), or optimization problems 
* Backtracking: 
  * Description: incrementally building candidates for solutions and abandoning (backtracking) when a candidate is not valid
  * Common Use: solving combinatorial problems like permutations, combinations, or solving constraint problems (e.g., Sudoku)
* Divide and Conquer: 
  * Description: breaking a problem into smaller subproblems, solving them recursively, and combining their results 
  * Common Use: sorting algorithms like merge sort, quick sort, or solving optimization problems 
* Dynamic Programming: 
  * Description: breaking problems into overlapping subproblems and solving each subproblem just once while storing the results 
  * Common Use: optimization problems like the knapsack problem, longest increasing subsequence, or matrix-related problems 
* Recursion:
  * Description: a function calling itself to break down the problem into simpler subproblems
  * Common Use: tree traversals, solving problems that can be broken into smaller instances of the same problem  