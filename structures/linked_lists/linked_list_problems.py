
# Reverse Singly-linked List
# Given the beginning of a singly linked list head, reverse the list, and return the new beginning ofthe list. 

#     Time Complexity: O(n) for length of linked list
#     Space Complexity: O(1) d/t use of pointers - no data structure
#     Pointers

# Source: neetcode.io

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head):
        prev, curr = None, head

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
    
# Merge Two Sorted Linked Lists
# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

# The new list should be made up of nodes from list1 and list2.

#     Space Complexity: O(n + m) for the length of each list - linear 
#     Time Complexity: O(1) b/c it remains constant d/t size of m + n, there is no additional space used. 

# Source: neetcode.io

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        dummy = node = ListNode()

        while list1 and list2:
            if list1.val < list2.val:
                node.next = list1
                list1 = list1.next
            else:
                node.next = list2
                list2 = list2.next
            node = node.next

        node.next = list1 or list2

        return dummy.next