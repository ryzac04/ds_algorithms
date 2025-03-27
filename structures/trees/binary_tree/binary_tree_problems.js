
// Invert Binary Tree
// You are given the root of a binary tree root. Invert the binary tree and return its root.

// Source: neetcode.io

// DFS with In-Place Recursion 

    // Time Complexity: O(n)
    // Space Complexity: O(h) (which is O(log n) for a balanced tree, O(n) for a skewed tree)
    
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
        if (!root) return null;

        [root.left, root.right] = [root.right, root.left];
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
    
// New TreeNode Instantiation with Recursion 

    // Time Complexity: O(n)
    // Space Complexity: O(n) - O(h) for recursive call stack space and also O(n) space for new nodes

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
        if (!root) return null;

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

// Recursive DFS
    // Time Complexity: O(n)
    // Space Complexity: O(h)
        // Best Case (balanced tree): O(log n))
        // Worst case (degenerate tree): O(n)
        // Where n is the number of nodes and h is the height of the tree 

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
    maxDepth(root) {
        if (!root) return 0;

        return (
            1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        );
    }
}

// Iterative DFS (Stack)
    // Time Complexity: O(n)
    // Space Complexity: O(n) 
    
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
    maxDepth(root) {
        const stack = [[root, 1]];
        let res = 0;

        while (stack.length > 0) {
            const current = stack.pop();
            const node = current[0];
            const depth = current[1];

            if (node !== null) {
                res = Math.max(res, depth);
                stack.push([node.left, depth + 1]);
                stack.push([node.right, depth + 1]);
            }
        }
        return res;
    }
}

// BFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)

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
    maxDepth(root) {
        const q = new Queue();
        if (root !== null) {
            q.push(root);
        }

        let level = 0;
        while (q.size() > 0) {
            const size = q.size();
            for (let i = 0; i < size; i++) {
                const node = q.pop();
                if (node.left !== null) {
                    q.push(node.left);
                }
                if (node.right !== null) {
                    q.push(node.right);
                }
            }
            level++;
        }
        return level;
    }
}

// Diameter of Binary Tree
// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

// The length of a path between two nodes in a binary tree is the number of edges between the nodes.

// Given the root of a binary tree root, return the diameter of the tree.

// Source: neetcode.io

// DFS 
    // Time Complexity: O(n)
    // Space Complexity: O(h)
        // Best Case (balanced tree): O(log n))
        // Worst case (degenerate tree): O(n)
        // Where n is the number of nodes and h is the height of the tree 

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

// Lowest Common Ancestor in Binary Search Tree
// Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.

// The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.

// Source: neetcode.io

// Iteration
    // Time Complexity: O(h) where h is the height of the BST
    // Space Complexity: O(1)
    
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let cur = root;

        while (cur) {
            if (p.val > cur.val && q.val > cur.val) {
                cur = cur.right;
            } else if (p.val < cur.val && q.val < cur.val) {
                cur = cur.left;
            } else {
                return cur;
            }
        }
        return null;
    }
}

// Binary Tree Level Order Traversal

// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

// Source: neetcode.io 

// DFS
    // Time Complexity: O(n) where n is the number of nodes
    // Space Complexity: O(n) where n is the number of nodes 
    
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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        
        /**
         * @param {TreeNode} node
         * @param {number} depth
         */
        function dfs(node, depth) {
            if (!node) return;

            if (res.length === depth) {
                res.push([]);
            }

            res[depth].push(node.val);
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }

        dfs(root, 0);
        return res;
    }
}

// Binary Tree Right Side View
// You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

// Source: neetcode.io 

// DFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)

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
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];

        function dfs(node, depth) {
            if (!node) return;

            if (res.length === depth) {
                res.push(node.val);
            }

            dfs(node.right, depth + 1);
            dfs(node.left, depth + 1);
        }

        dfs(root, 0);
        return res;
    }
}

// Count Good Nodes in Binary Tree
// Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x

// Given the root of a binary tree root, return the number of good nodes within the tree.

// Source: neetcode.io 

// DFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
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
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    /**
     * @param {TreeNode} node
     * @param {number} maxVal
     * @return {number}
     */
    dfs(node, maxVal) {
        if (!node) {
            return 0;
        }

        let res = node.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal, node.val);
        res += this.dfs(node.left, maxVal);
        res += this.dfs(node.right, maxVal);
        return res;
    }
}

// Valid Binary Search Tree
// Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

// A valid binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.

// Source: neetcode.io

// DFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
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
    isValidBST(root) {
        return this.valid(root, -Infinity, Infinity);
    }

    /**
     * @param {TreeNode} node
     * @param {number} left
     * @param {number} right
     */
    valid(node, left, right) {
        if (node === null) {
            return true;
        }
        if (!(left < node.val && node.val < right)) {
            return false;
        }
        return this.valid(node.left, left, node.val) &&
               this.valid(node.right, node.val, right);
    }
}

// Kth Smallest Integer in BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.

// Source: neetcode.io

// Morris Traversal
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    
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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let curr = root;
    
        while (curr) {
            if (!curr.left) {
                k--;
                if (k === 0) return curr.val;
                curr = curr.right;
            } else {
                let pred = curr.left;
                while (pred.right && pred.right !== curr) 
                    pred = pred.right;
                
                if (!pred.right) {
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    pred.right = null;
                    k--;
                    if (k === 0) return curr.val;
                    curr = curr.right;
                }
            }
        }
        return -1;
    }
}

// Construct Binary Tree from Preorder and Inorder Traversal
// You are given two integer arrays preorder and inorder.

// preorder is the preorder traversal of a binary tree
// inorder is the inorder traversal of the same tree
// Both arrays are of the same size and consist of unique values.
// Rebuild the binary tree from the preorder and inorder traversals and return its root.

// Source: neetcode.io

// Hash Map & DFS
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pre_idx = 0;
        let indices = new Map();
        
        inorder.forEach((val, i) => indices.set(val, i));
        
        function dfs(l, r) {
            if (l > r) return null;
            let root_val = preorder[pre_idx++];
            let root = new TreeNode(root_val);
            let mid = indices.get(root_val);
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);
            return root;
        }
        
        return dfs(0, inorder.length - 1);
    }
}