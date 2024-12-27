
// Invert Binary Tree
// You are given the root of a binary tree root. Invert the binary tree and return its root.

    // Time Complexity: O(n)
    // Space Complexity: O(h) for height of tree. For unbalanced tree, O(h). For balanced   tree, O(log n).

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return null;

        const node = new TreeNode(root.val);

        node.right = this.invertTree(root.left);
        node.left = this.invertTree(root.right);

        return node;
    }
}

// Depth of Binary Tree
// Given the root of a binary tree, return its depth.

// The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// RECURSIVE DFS
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        return (
            1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        );
    }
}

// ITERATIVE DFS
// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {number}
//      */
    // maxDepth(root) {
    //     if (root === null) {
    //         return 0;
    //     }

    //     let stack = [{ node: root, depth: 1 }];
    //     let maxDepth = 0;

    //     while (stack.length > 0) {
    //         let { node, depth } = stack.pop();
    //         if (node !== null) {
    //             maxDepth = Math.max(maxDepth, depth);
    //             stack.push({ node: node.left, depth: depth + 1 });
    //             stack.push({ node: node.right, depth: depth + 1 });
    //         }
    //     }

    //     return maxDepth;
    // };

// BFS
// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {number}
//      */
//     maxDepth(root) {
//         const q = [];
//         if (root !== null) {
//             q.push(root);
//         }

//         let level = 0;

//         while (q.length > 0) {
//             const size = q.length;

//             for (let i = 0; i < size; i++) {
//                 const node = q.shift();
//                 if (node.left !== null) {
//                     q.push(node.left);
//                 }
//                 if (node.right !== null) {
//                     q.push(node.right);
//                 }
//             }
//             level++;
//         }
//         return level;
//     }
// }

// Diameter of Binary Tree
// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

// The length of a path between two nodes in a binary tree is the number of edges between the nodes.

// Given the root of a binary tree root, return the diameter of the tree.

    // Time Complexity: O(n)
    // Space Complexity: O(n) if unbalanced or O(log n) for balanced

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0; 

        function height(node){
            if(!node) return 0; 

            const leftHeight = height(node.left); 
            const rightHeight = height(node.right); 

            const diameterThroughNode = leftHeight + rightHeight; 
            maxDiameter = Math.max(maxDiameter, diameterThroughNode); 

            return 1 + Math.max(leftHeight, rightHeight); 
        }
        height(root); 
        return maxDiameter; 
    }
}

// Balanced Binary Tree
// Given a binary tree, return true if it is height-balanced and false otherwise.

// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // Helper function to check if a subtree is balanced and to calculate its height
        const checkBalanced = (node) => {
            // Base case: an empty tree is balanced and has height 0
            if (!node) {
                return {height: 0, balanced: true};
            }

            // Recursively check the left and right subtrees
            const left = checkBalanced(node.left);
            const right = checkBalanced(node.right);

            // Determine if the current node is balanced
            const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;

            // Calculate the height of the current node
            const height = Math.max(left.height, right.height) + 1;

            // Return the height and balanced status of the current subtree
            return {height, balanced};
        };

        // Start the recursive check from the root
        return checkBalanced(root).balanced;
    }
}

// Same Binary Tree
// Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

// Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

    // Time Complexity: O(p + q)
    // Space Complexity: O(h) where h is the height of the tree.
    // Worst case (completely unbalanced tree), h is O(n).
    // Best case (completely balanced trees), h is O(log n).

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q) return true; 

        if(p && q && p.val === q.val){
            return (
                this.isSameTree(p.left, q.left) &&
                this.isSameTree(p.right, q.right) 
            )
        }else return false; 
    }
}

// Subtree of a Binary Tree
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

    // Time Complexity: O(n*m) where n is the number of nodes in the root tree and m is the number of nodes in the subRoot tree.
    // Space Complexity: O(h) where h is the height of the tree.
    // Worst case (completely unbalanced tree), h is O(n).
    // Best case (completely balanced trees), h is O(log n).

// Source: neetcode.io

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false; 

        const isSameTree = (node1, node2) => {
            if(!node1 && !node2) return true;
            if(!node1 || !node2) return false; 
            if(node1.val !== node2.val) return false; 

            return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
        };
        if(isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot) 
    }
}