
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