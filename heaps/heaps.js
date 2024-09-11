
// Kth Largest Integer in a Stream
// Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

// Implement the following methods:

// constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
// int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.




// Given an integer array, reduce the array to a single element. In each operation, pick two indices i and j (where i does not equal j) and append the value of a[i] + a[j] to the array and delete a[i] and a[j] from the array. The cost of each operation is a[i] + a[j]. Find the minimum cost to reduce the array. 

// consider array [25, 10, 20]
// pick 10 and 20, cost = 10 + 20 = 30, arra'; = [25, 30]
// pick 25 and 30, cost = 25 + 30 = 55, array" = [55]

// The cost is 30 + 55 = 85. This is the minimum possible cost

// In Python: 
// import heapq

// def minimizeCost(arr):
//     # Create a min-heap from the array
//     heapq.heapify(arr)
    
//     total_cost = 0
    
//     # Keep merging until one element remains
//     while len(arr) > 1:
//         # Extract the two smallest elements
//         first = heapq.heappop(arr)
//         second = heapq.heappop(arr)
        
//         # Compute the cost of merging them
//         merge_cost = first + second
//         total_cost += merge_cost
        
//         # Add the merged element back to the heap
//         heapq.heappush(arr, merge_cost)
    
//     return total_cost


// An array of size n represents a set of available resources. Identify a subarray that optimally utilizes these resources under the following constraints: 

// the subarray must have a specific length, denoted as k
// all elements in the subarray must be unique, representing distinct resource allocations.

// The ultimate goal is to find the subarray that maximizes the sum of the allocated resources. Return the sum for that subarray. If it is not possible to allocate resources per the constraints, return -1.

// A subararray is a contiguous segment of an array. 

// Example:
// n = 5
// k = 3
// arr = [1, 2, 3, 4, 5]

// Following are the subarrays of length k = 3 and all elements are distinct: 
// [1, 2, 3] and 1 + 2 + 3 = 6
// [2, 3, 7], sum = 12
// [7, 3, 5], sum = 15

// Return the maximum sum, 15

// In Python: 

// def findOptimalResources(arr, k):
//     n = len(arr)
    
//     if k > n:
//         return -1  # If k is larger than the array size, it's not possible.
    
//     max_sum = -1  # Start with -1 to handle the case where no valid subarray is found
//     current_sum = 0
//     window_set = set()
//     start = 0
    
//     for end in range(n):
//         # If the element is already in the set, remove elements from the start until it's unique
//         while arr[end] in window_set:
//             window_set.remove(arr[start])
//             current_sum -= arr[start]
//             start += 1
        
//         # Add the new element to the window
//         window_set.add(arr[end])
//         current_sum += arr[end]
        
//         # If we have a window of size k, check if it's a valid candidate
//         if end - start + 1 == k:
//             max_sum = max(max_sum, current_sum)
//             # Slide the window by removing the start element
//             window_set.remove(arr[start])
//             current_sum -= arr[start]
//             start += 1
    
//     return max_sum if max_sum != -1 else -1
