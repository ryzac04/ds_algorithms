# Linked Lists
Linked lists are data structures that represent a sequence of nodes. May be singly linked or doubly linked. 
## Singly Linked List
### Description
A linear collection of elements where each element points to the next one in the sequence, forming a chain. Supports operations such as insertion, deletion, and traversal. 
### Characteristics: 
* Unique Characteristics: efficient insertion/deletion at beginning or end 
* Creation and Flexibility: 
  * Dynamic or Static: dynamic
  * Size Flexibility: can dynamically grow or shrink as elements are added or removed
  * Mutable or Not Mutable: mutable 
* Data Organization: 
  * Ordering: maintains the order of elements as they are inserted 
  * Sorted or Unsorted: not typically applicable 
* Data Properties: 
  * Data Type Flexibility: typically homogeneous
  * Duplicate Data: allowed 
* Data Access: 
  * Indexing: typically does not support direct access by index 
* Capabilities: 
  * Directly Sortable: no
  * Directly Iterable: yes
  * Hashable: no 
* Efficiency and Time Complexities: 
  * Memory Efficiency: O(n) for storing n elements 
  * Time Complexity: 
    * Access: O(n) for accessing by index
    * Search: O(n) for searching by element
    * Insertion: 
      * O(1) for inserting at the beginning or end
      * O(n) for inserting elsewhere 
    * Deletion:
      * O(1) for deleting at the beginning or end
      * O(n) for deleting elsewhere 
### Common Applications
  * Implementing dynamic data structures 
  * Representing sequences with efficient insertion 
  * Representing sequenes with efficient deletion
### Common Examples 
  * Dynamic cache where the least recently used items can be easily removed 
  * Symbol table in compilers where identifiers are stored and managed 
## Doubly Linked Lists
### Description
A linear collection of elements where each element contains a reference to both the next and previous elements. Supports operations such as insertion, deleting, and traversal in both forward and backward directions. 
### Characteristics
* Unique Characteristics:
  * Bi-directional Traversal: doubly linked lists support traversal in both forward and backward directions 
  * Efficient Deletion: doubly linked lists offer efficient deletion operations by directly modifying pointers 
  * Efficient Insertion: doubly linked lists offer efficient insertion at the beginning or end 
* Creation and Flexibility:
  * Dynamic or Static: dynamic
  * Size Felxibility: can dynamically grow or shrink as elements are added or removed 
  * Mutable or Not Mutable: mutable 
* Data Organization:
  * Ordering: maintains the order of elements as they are inserted 
  * Sorted or Unsorted: not typically applicable 
* Data Properties: 
  * Data Type Flexibility: typically homogeneous 
  * Duplicate Data: allowed 
* Data Access: 
  * Indexing: typically does not support direct access by index 
* Capabilities: 
  * Directly Sortable: no
  * Directly Iterable: yes 
  * Hashable: no 
* Efficiency and Time Complexities: 
  * Memory Efficiency: O(n) for storing n elements 
  * Time Complexity: 
    * Access: O(n) for accessing by index 
    * Search: O(n) for searching by element
    * Insertion: 
      * O(1) for inserting at the beginning or end
      * O(n) for inserting elsewhere
    * Deletion: 
      * O(1) for deleting at the beginning or end
      * O(n) for deleting elsewhere
### Common Applications
* Undo functionality
* Text editors
* Browser history
* Music playlist
### Common Examples 
* Managing undo functionality in text editors where each edit is stored as a node in the list
* Implementing browser history where each visited webpage is stored in a doubly linked list 
## Thought Process
* Typically, two classes will be needed:
  * The node class with the constructor that defines each node instance
    * Typically has a val(the data) and next (the pointer to the next node)
    * Default values are usually val = 0 (or another sensible default) and next = null (because the node is by default not linked to anything else)
```JavaScript 
class Node {
  constructor(val = 0; next = null){
    this.val = val;
    this.next = next; 
  }
}
```
  * The solution class for the specific problem 
    * Manipulate the List: insert, delete, or reverse nodes by updating the next pointers 
    * For every defined variable, there will be a property assigned to it as defined in the node class constructor - for each problem, define variables that will be needed in order for the desired manipulation to occur. 
    * Test edge cases: handle cases like empty lists and single-node lists where next is null 
## The "Runner" Technique (Two-Pointer Technique)
### Description
A common pattern used to traverse a linked list efficiently. This approach involves iterating through the list at different speeds or with different purposes. 
### Key Concepts: 
  * Two Pointers: the two pointers are typically called slow and fast (or similar names), each traversing the linked list in a unique manner. 
    * Slow Pointer: moves one node at a time
    * Fast pointer: moves several nodes at a time but most commonly two nodes at a time 
  * Linked List Structure: each node in the list has a value and a pointer to the next node (or null/None if it's the end of the list)
### Common Use Cases 
* Finding the Middle of a Linked List: 
  * The fast pointer moves twice as fast as the slow pointer. When the fast pointer reaches the end, the slow pointer will be at the middle.
* Detecting a Cycle: 
  * The fast pointer moves two steps while the slow pointer moves one step. If the list has a cycle, the two pointers will eventually meet. 
* Removing the N-th Node from the End: 
  * Use the past pointer to get a head start (N steps ahead). Then move both pointers one step at a time until the fast pointer reaches the end. The slow pointer will now be just before the N-th node from the end. 
## Recursive Problems 
### Description
A powerful technique for solving problems related to linked lists, as the natural recursive structure of a linked list (where each node points to the next node) aligns well with recursive function calls. 
### Key Concepts
* Base Case and Recursive Case
  * Base Case: this handles the simplest scenario (e.g., when the current node is null/None or there's only one node left)
  * Recursive Case: this processes the current node and calls the function recursively on the rest of the list
  * Each recursive call reduces the size of the problem, working towards the base case. 
* Recursive Nature of Linked Lists
  * A linked list can be thought of as: 
    * A head node containing data
    * A smaller linked list starting from the next node 
* Function Call Stack 
  * Recursive calls use the stack to hold the function calls, making recursion memory-intensive for large lists.
  * This results in a space complexity of O(n) due to the function call stack, where n is the number of nodes in the list. 
### Common Use Cases 
* Reversing a Linked List
* Finding the Length of a Linked List
* Printing a Linked List in Reverse
* Merging Two Sorted Linked Lists 
* Checking Palindromes 