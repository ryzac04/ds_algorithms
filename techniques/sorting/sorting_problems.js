
// Bubble Sort
// A simple sorting algorithm where the largest values bubble up to the top. 

    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    
function bubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        let swapped = false; 
        for (let j = 0; j < arr.length - 1; j++){
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

// Selection Sort
// Simple but inefficient. Find the smallest element using a linear scan and move it to the front, swapping it w/ the front element. Continue doing this until all the elements are in place. 

    // Time Complexity: O(n^2)
    // Space Complexity: O(1)

// Merge Sort
    
    // Time Complexity: O(n + m)
    // Space Complexity: O(n)

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
 
    // Time Complexity: O(n log n)
    // Space Complexity: O(n)

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

// Quick Sort

/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

    // Time Complexity: O(n)
    // Space Complexity: O(1)

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivotValue = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if (pivotValue > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

    // Time Complexity: O(n log n)
    // Space Complexity: O(log n)

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

// Radix

// Time Complexity: O(k * n)
// Space Complexity: O(n + k)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
 
// Comparator Functions: used to define custom sorting behavior for arrays when using the Array.prototype.sort() method. It determines the order of elements by comparing two elements at a time and returning a value based on their relative order. 

// Takes 2 arguments, usually `a` and `b` and returns:
// a negative number if `a` should come before `b`
// Zero if `a` and `b` are considered equal in the sorting order
// a positive number if `a` should come after `b`

array.sort((a, b) => {
    // Comparison logic
    return a - b; // Example: ascending order for numbers
});

const numbersAsc = [40, 100, 1, 5, 25, 10];
numbersAsc.sort((a, b) => a - b);
console.log(numbersAsc); // Output: [1, 5, 10, 25, 40, 100]

const numbersDesc = [40, 100, 1, 5, 25, 10];
numbersDesc.sort((a, b) => b - a);
console.log(numbersDesc); // Output: [100, 40, 25, 10, 5, 1]

const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

// Sorting by age in ascending order
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// Sorting by name in alphabetical order
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }]

const words = ['banana', 'apple', 'kiwi', 'cherry', 'date'];
words.sort((a, b) => a.length - b.length);
console.log(words); // Output: ['kiwi', 'date', 'apple', 'banana', 'cherry']

// Is Unique - No Data Structure (CTCI Ch 1 pg 90, 1.1 part 2)
// Determine if a string has all unique characters - do not use a data structure. 
    // Time Complexity: O(n log n) where n is the length of the array and log n for the sorting step
    // Space Complexity: O(1) d/t in-place sorting through JS's .sort() method 

function isUniqueNoDataStructure(str) {
    // Convert the string to an array of characters, sort it, and join back to a string
    const sortedStr = str.split('').sort().join(''); 

    // Check for consecutive identical characters
    for (let i = 0; i < sortedStr.length - 1; i++){
        if (sortedStr[i] === sortedStr[i + 1]) {
            return false; // Found a duplicate
        }
    }
    return true; // No duplicates found 
}