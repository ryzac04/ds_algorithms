# Binary Tree Search Techniques

## Depth-First Search (DFS)
DFS explores a tree as deep as possible before backtracking. There are three main DFS traversal orders: 

### DFS Traversal Orders: 
1. Preorder (Root -> Left -> Right)
   - Useful for copying a tree or evaluating expressions
   - Example use case: Prefix notation (Polish notation) in expressions
2. Inorder (Left -> Root ->  Right)
   - In a BST, this gives elements in a sorted order
   - Used for retrieving sorted data 
3. Postorder (Left -> Right -> Root)
   - Used for deleting a tree (since children are deleted before the root)
   - Example use case: Postfix notation (Reverse Polish notation) for evaluating expressions 

### DFS Implementation 
#### Recursive DFS
```JavaScript
function dfsRecursive(node) {
    if (node === null) return;
    
    // Preorder: process root first
    console.log(node.val);  
    
    dfsRecursive(node.left);
    dfsRecursive(node.right);
}
```
- Pros: 
  - Uses minimal extra space O(h) (recursive call stack)
  - Elegant and easy to write
- Cons
  - Can cause stack overflow for very deep trees (e.g., highly unbalanced trees).
  - May be less intuitive to modify compared to iterative versions

#### Iterative DFS (Using Stack)
```JavaScript
function dfsIterative(root) {
    if (root === null) return;
    
    const stack = [root];
    
    while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.val); 
        
        // Push right first so left is processed first (Preorder)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}
```
- Pros:
  - Avoids recursion stack overflow
  - More control over traversal order
- Cons:
  - Uses O(n) space in the worst case for the stack 

## Breadth-First Search (BFS)
BFS explores a tree level by level, visiting all nodes at each depth before moving deeper. 

### DFS Implementation (Using Queue)
```JavaScript
function bfs(root) {
    if (root === null) return;
    
    const queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val); 
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```
- Pros:
  - Guarantees shortest path in unweighted trees
  - Works well for finding nodes closer to the root
- Cons:
  - O(n) space complexity (storing nodes in a queue)
  - Less efficient in deep trees due to large queue storage 

## Key Takeaways
- DFS vs BFS: 
  - DFS is better for deep trees with limited branching
  - BFS is better when searching for nodes closer to the root
- Recursive vs Iterative
  - Recursive is easier to write and follows natural tree structure
  - Iterative avoids stack overflow and is more memory-efficient 
  - Scenarios:
    - Small tree, easy readability: recursive or iterative 
    - Large tree, risk of deep recursion: iterative, not recursive
    - Need explicit stack control: iterative, not recursive 
- For BSTs
  - Use Inorder DFS to get sorted order of elements
  - Use Iterative search if the tree is deep 