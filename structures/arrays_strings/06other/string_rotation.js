
// String Rotation
// Check if one string is a rotation of another. 

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    
// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.9

function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}