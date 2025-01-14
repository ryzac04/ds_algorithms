
// Reverse Singly-linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning ofthe list. 

    // Time Complexity: O(n) for length of linked list
    // Space Complexity: O(1) d/t use of pointers - no data structure
    // Pointers

// Source: neetcode.io

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution{
    reverseList(head) {
        let [prev, curr] = [null, head];
        while (curr) {
            let temp = curr.next; // save the next node in temporary variable
            curr.next = prev; // reverse current node's pointer 

            prev = curr; // move prev and curr one step forward 
            curr = temp;
        }
        return prev; // return new head 
    }
}

// Merge Two Sorted Linked Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

    // Space Complexity: O(n + m) for the length of each list - linear 
    // Time Complexity: O(1) b/c it remains constant d/t size of m + n, there is no additional space used. 

// Source: neetcode.io

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(); 
        let current = dummy;

        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                current.next = list1;
                list1 = list1.next;
            }else{
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next
        }
        if(list1 !== null){
            current.next = list1;
        }else {
            current.next = list2;
        }
        return dummy.next;
    }
}

// Reorder Linked List 

// You are given the head of a singly linked-list.

// The positions of a linked list of length = 7 for example, can intially be represented as:

// [0, 1, 2, 3, 4, 5, 6]

// Reorder the nodes of the linked list to be in the following order:

// [0, 6, 1, 5, 2, 4, 3]

// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

// [0, n-1, 1, n-2, 2, n-3, ...]

// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

    // Space Complexity: O(1)
    // Time Complexity: O(n) 

// Source: neetcode.io

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // If the list is empty or has only one element, no reordering is needed
        if (!head || !head.next) return; 

        // Step 1: Find the middle of the linked list
        let slow = head; // Slow pointer will traverse one step at a time
        let fast = head; // Fast pointer will traverse two steps at a time 

        // Move slow by 1 and fast by 2 - this will bring fast to the end of the list and slow will now be at the middle position 
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the list 
        let second = slow.next; // 'second' will point to the second half of the list 
        slow.next = null; // Split the list into two parts by cutting off the second half from the first half 

        let prev = null; // This will keep track of the previous node as we reverse the second half 
        let curr = second; // 'curr' is the current node in the second half that we're trying to reverse 

        // Reverse the second half of the list by iterating through it and reversing the next pointers 
        while (curr) {
            let temp = curr.next; // Save the next node temporarily, since we're about to modify the 'next' pointer 
            curr.next = prev; // Reverse the 'next' pointer of the current node 
            prev = curr; // Move 'prev' to the current node 
            curr = temp; // Move 'curr' to the next node (which was saved in 'nextTemp')
        }

        // After the loop, 'prev' points to the new head of the reversed second half of the list 
        second = prev; // Now, 'second' points to the reversed second half of the list 

        // Step 3: Merge the two halves
        let first = head; // 'first' points to the head of the first half of the list 

        // Merge the two havles by alternating nodes from each half 
        while (second) {
            let temp1 = first.next; // Save the next node of the first half temporarily 
            let temp2 = second.next; // Save the next node of the second half temporarily 

            first.next = second; // Link the current node from the first half to the current node from the second half 
            second.next = temp1; // Link the current node from the second half to the next node from the first half 

            first = temp1; // Move 'first' to the next node in the first half 
            second = temp2; // Move 'second' to the next node in the second half 
        }
    }
}

// Remove Nth Node From End of List

// You are given the beginning of a linked list head, and an integer n.

// Remove the nth node from the end of the list and return the beginning of the list.

// Source: neetcode.io

// Iteration (Two Pass)
    // Space Complexity: O(1)
    // Time Complexity: O(n)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let N = 0;
        let cur = head;
        while (cur) {
            N++;
            cur = cur.next;
        }

        const removeIndex = N - n;
        if (removeIndex === 0) {
            return head.next;
        }

        cur = head;
        for (let i = 0; i < N - 1; i++) {
            if (i + 1 === removeIndex) {
                cur.next = cur.next.next;
                break;
            }
            cur = cur.next;
        }
        return head;
    }
}

// Two Pointer
    // Space Complexity: O(1)
    // Time Complexity: O(n)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Create a dummy node to handle edge cases (e.g., removing the head)
        const dummy = new ListNode(0, head);
        // Initialize two pointers: 'left' at the dummy node and 'right' at the head of linked list
        let left = dummy;
        let right = head;

        // Move the 'right' pointer n steps forward
        while (n > 0) {
            right = right.next; // Advance 'right' to the next node 
            n--; // Decrement the step count
        }

        // Move both 'left' and 'right' pointers until 'right' reaches the end of the linked list
        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        // 'left.next' is now the node to be removed
        // Skip the node by pointing 'left.next' to 'left.next.next' 
        left.next = left.next.next;

        // Return the new head of the list, which is 'dummy.next'. 
        return dummy.next;
    }
}

// Copy List With Random Pointer

// You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.

// Create a deep copy of the list.

// The deep copy should consist of exactly n new nodes, each including:

// The original value val of the copied node
// A next pointer to the new node corresponding to the next pointer of the original node
// A random pointer to the new node corresponding to the random pointer of the original node
// Note: None of the pointers in the new list should point to nodes in the original list.

// Return the head of the copied linked list.

// Source: neetcode.io

// Space Optimized - I 
    // Space Complexity: O(1)
    // Time Complexity: O(n)

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return null;
        }
        
        let l1 = head;
        while (l1) {
            const l2 = new Node(l1.val);
            l2.next = l1.next;
            l1.next = l2;
            l1 = l2.next;
        }

        const newHead = head.next;

        l1 = head;
        while (l1) {
            if (l1.random) {
                l1.next.random = l1.random.next;
            }
            l1 = l1.next.next;
        }

        l1 = head;
        while (l1) {
            const l2 = l1.next;
            l1.next = l2.next;
            if (l2.next) {
                l2.next = l2.next.next;
            }
            l1 = l1.next;
        }

        return newHead;
    }
}

// Space Optimized - II 
    // Space Complexity: O(1) 
    // Time Complexity: O(n)

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) {
            return null;
        }

        let l1 = head;
        while (l1) {
            let l2 = new Node(l1.val);
            l2.next = l1.random;
            l1.random = l2;
            l1 = l1.next;
        }

        let newHead = head.random;

        l1 = head;
        while (l1) {
            let l2 = l1.random;
            l2.random = l2.next ? l2.next.random : null;
            l1 = l1.next;
        }

        l1 = head;
        while (l1) {
            let l2 = l1.random;
            l1.random = l2.next;
            l2.next = l1.next ? l1.next.random : null;
            l1 = l1.next;
        }

        return newHead;
    }
}

// Add Two Numbers

// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.

// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the sum of the two numbers as a linked list.

// Source: neetcode.io

// Iteration: 
    // Space Complexity: O(1) 
    // Time Complexity: O(m + n) where m is the length of l1 and n is the length of l2 

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;

        let carry = 0;
        while (l1 || l2 || carry) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;

            let val = v1 + v2 + carry;
            carry = Math.floor(val / 10);
            val = val % 10;
            cur.next = new ListNode(val);

            cur = cur.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}

// Linked List Cycle Detection 
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

// There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.

// Source: neetcode.io

// Fast and Slow Two Pointers
    // Space Complexity: O(1)
    // Time Complexity: O(n)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head; 

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next; 

            if(slow === fast) return true; 
        }
        return false; 
    }
}

// Find the Duplicate Number

// You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

// Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

// Source: neetcode.io 

// Fast and Slow Two Pointers
    // Space Complexity: O(1)
    // Time Complexity: O(n) 

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }

        let slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];
            if (slow === slow2) {
                return slow;
            }
        }
    }
}

// Find the Intersection of Two Linked Lists
// Given the heads of two singly linked lists, headA and headB, write a function to determine the node where the two linked lists intersect. If the linked lists do not intersect, return null.

// Assumptions:

// The linked lists may intersect at a node, meaning that from that node onwards, both linked lists share the same sequence of nodes.
// If there is no intersection, return null.

// Two Pointers 
    // Space Complexity: O(1) d/t no data structure used
    // Time Complexity: O(n + m) where n and m are the lengths of the two lists.

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null; 

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA; 
    }
    return pointerA; 
}

// Remove Duplicates 
// Write code to remove duplicates from an unsorted linked list. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 94, problem 2.1

// Set Data Structure 
    // Space Complexity: O(n)
    // Time Complexity: O(n)

function removeDuplicates(head) {
    let current = head;
    let seen = new Set();
    let prev = null;

    while (current) {
        if (seen.has(current.value)) {
            prev.next = current.next;
        } else {
            seen.add(current.value);
            prev = current;
        }
        current = current.next;
    }

    return head;
}

// Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 94, problem 2.2

// Fast and Slow Two Pointer
    // Space Complexity: O(1) 
    // Time Complexity: O(n)

function kthToLast(head, k) {
    let fast = head;
    let slow = head;

    // Move fast pointer k steps ahead
    for (let i = 0; i < k; i++) {
        if (!fast) return null;
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

// Delete Middle Node
// Implement a function to delete a node in the middle of a singly linked list, given only access to that node. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 94, problem 2.3

    // Space Complexity: O(1)
    // Time Complexity: O(1) 

function deleteMiddleNode(node) {
    if (!node || !node.next) return false;  // Can't delete middle if there's no next node
    
    node.value = node.next.value; // Copy the next node's value into the current node
    node.next = node.next.next;  // Bypass the next node
    return true;
}

// Partition
// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 94, problem 2.4

    // Space Complexity: O(1)
    // Time Complexity: O(n) 

function partition(head, x) {
    let smallerHead = null;
    let smallerTail = null;
    let greaterHead = null;
    let greaterTail = null;

    while (head) {
        if (head.value < x) {
            if (!smallerHead) {
                smallerHead = head;
                smallerTail = smallerHead;
            } else {
                smallerTail.next = head;
                smallerTail = head;
            }
        } else {
            if (!greaterHead) {
                greaterHead = head;
                greaterTail = greaterHead;
            } else {
                greaterTail.next = head;
                greaterTail = head;
            }
        }
        head = head.next;
    }

    if (smallerTail) smallerTail.next = greaterHead;
    if (greaterTail) greaterTail.next = null;

    return smallerHead || greaterHead;
}

// Sum Lists
// There are two numbers represented by a linked list where each node contains a single digit. The digits are stored in reverse order and we need to add the two numbers and return the sum as a linked list. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 95, problem 2.5

// Reverse Order
    // Space Complexity: O(n) result linked list) 
    // Time Complexity: O(n) 

function sumLists(list1, list2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    
    while (list1 || list2 || carry) {
        let sum = carry;
        
        if (list1) {
            sum += list1.value;
            list1 = list1.next;
        }
        
        if (list2) {
            sum += list2.value;
            list2 = list2.next;
        }
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummyHead.next;
}

// Palindrome
// Implement a function to check if a linked list is a palindrome. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 95, problem 2.6

    // Space Complexity: O(1)
    // Time Complexity: O(n) 

function isPalindrome(head) {
    let slow = head;
    let fast = head;
    
    // Find the middle of the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    
    // Compare both halves
    let left = head;
    let right = prev;
    while (right) {
        if (left.value !== right.value) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
}

// Intersection
// Given two singly linked lists, determine if the two lists intersect. Return the intersecting node. 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 95, problem 2.7

    // Space Complexity: O(1) 
    // Time Complexity: O(n + m) where n and m are the lengths of the two lists

    function getIntersectionNode(headA, headB) {
        let lenA = 0, lenB = 0;
        let currentA = headA;
        let currentB = headB;
        
        // Get the length of both lists
        while (currentA) {
            lenA++;
            currentA = currentA.next;
        }
        
        while (currentB) {
            lenB++;
            currentB = currentB.next;
        }
        
        // Align the pointers to the same distance from the intersection point
        currentA = headA;
        currentB = headB;
        if (lenA > lenB) {
            for (let i = 0; i < lenA - lenB; i++) currentA = currentA.next;
        } else {
            for (let i = 0; i < lenB - lenA; i++) currentB = currentB.next;
        }
        
        // Move both pointers in sync until they find the intersection node
        while (currentA !== currentB) {
            currentA = currentA.next;
            currentB = currentB.next;
        }
        
        return currentA;
    }

// Loop Detection
// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop 

// Source: Cracking the Coding Interview, 6th ed. - Ch2, pg 95, problem 2.8

    // Space Complexity: O(1)
    // Time Complexity: O(n) 

    function detectLoop(head) {
        let slow = head;
        let fast = head;
        
        // Detect if a loop exists using Floyd's cycle-finding algorithm
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow === fast) {
                // There is a loop, now find the entry point
                let entry = head;
                while (entry !== slow) {
                    entry = entry.next;
                    slow = slow.next;
                }
                return entry;
            }
        }
        
        return null;
    }