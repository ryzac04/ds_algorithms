
// URLify
// Replace spaces with '%20'.

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 90, problem 1.3

function URLify(str, length) {
    // Use the "true length" of the string
    const trimmedStr = str.slice(0, length);
    return trimmedStr.replace(/\s/g, '%20');
}