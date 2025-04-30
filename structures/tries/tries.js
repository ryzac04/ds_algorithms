// Implement Trie (Prefix Tree)
// A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

// Implement the PrefixTree class:

// PrefixTree() Initializes the prefix tree object.
// void insert(String word) Inserts the string word into the prefix tree.
// boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Source: neetcode.io 

// Prefix Tree - Array

    // Time Complexity: O(n) for each function call
    // Space Complexity: O(t) for the total number of TrieNodes created in the Trie 

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                cur.children[i] = new TrieNode();
            }
            cur = cur.children[i];
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            let i = c.charCodeAt(0) - 97;
            if (cur.children[i] === null) {
                return false;
            }
            cur = cur.children[i];
        }
        return true;
    }
}

// Prefix Trie - Hash Map

    // Time Complexity: O(n) for each function call
    // Space Complexity: O(t) for the total number of TrieNodes created in the Trie
    
    class TrieNode {
        constructor() {
            this.children = new Map();
            this.endOfWord = false;
        }
    }
    
    class PrefixTree {
        constructor() {
            this.root = new TrieNode();
        }
        
        /**
         * @param {string} word
         * @return {void}
         */
        insert(word) {
            let cur = this.root;
            for (let c of word) {
                if (!cur.children.has(c)) {
                    cur.children.set(c, new TrieNode());
                }
                cur = cur.children.get(c);
            }
            cur.endOfWord = true;
        }
    
        /**
         * @param {string} word
         * @return {boolean}
         */
        search(word) {
            let cur = this.root;
            for (let c of word) {
                if (!cur.children.has(c)) {
                    return false;
                }
                cur = cur.children.get(c);
            }
            return cur.endOfWord;
        }
    
        /**
         * @param {string} prefix
         * @return {boolean}
         */
        startsWith(prefix) {
            let cur = this.root;
            for (let c of prefix) {
                if (!cur.children.has(c)) {
                    return false;
                }
                cur = cur.children.get(c);
            }
            return true;
        }
    }