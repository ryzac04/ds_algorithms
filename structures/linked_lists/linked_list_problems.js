
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
        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        let prev = (slow.next = null);
        while (second !== null) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        let first = head;
        second = prev;
        while (second !== null) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
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
        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        while (n > 0) {
            right = right.next;
            n--;
        }

        while (right !== null) {
            left = left.next;
            right = right.next;
        }

        left.next = left.next.next;
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

    // Time Complexity: O(n + m) where n and m are the lengths of the two lists.
    // Space Complexity: O(1) d/t no data structure used
    // Two Pointers

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