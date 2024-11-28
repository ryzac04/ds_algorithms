
// Reverse a singly-linked list (iteratively):

    // Time Complexity: O(n) for length of linked list
    // Space Complexity: O(1) d/t use of pointers - no data structure
    // Pointers

// Source: neetcode

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
        let [prev, curr, next] = [null, head, null];
        while (curr) {
            next = curr.next; //save the next node in temporary variable
            curr.next = prev; //reverse current node's pointer 

            prev = curr; //move prev and curr one step forward 
            curr = next;
        }
        return prev; //return new head 
    }
}

// Merge Two Sorted Linked Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

    // Space Complexity: O(n + m) for the length of each list - linear 
    // Time Complexity: O(1) b/c it remains constant d/t size of m + n, there is no additional space used. 

// Source: neetcode

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
        let dummy = {val: 0, next: null}
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

// Linked List Cycle Detection 
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

// There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // Two pointers

// Source: neetcode 

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