
// Is Palindrome: determine if a given string is a palindrome.
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    // Time Complexity: O(n) for length of str in cleanStr and methods in reversedStr
    // Space Complexity: O(n) for space to store cleanStr and reversedStr

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse('').join('');
    return cleanStr === reversedStr;
}

    // Time Complexity: O(n) for length of s
    // Space Complexity: O(n) for cleanS storage
    // Two Pointers
    
function diffIsPalindrome(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let l = 0;
    let r = cleanS.length - 1;

    while(l <= r){
        if (cleanS[l] !== cleanS[r]) return false;
        l++;
        r--;
    };
    return true;
}

// Reverse a String  
    // Time Complexity: O(n)
    // Space Complexity: O(n) 

function reverseString(str) {
    return str.split('').reverse('').join('').toLowerCase();
}

console.log(reverseString('Hello'));
console.log(reverseString('Racecar'));

    // Time Complexity: O(n)
    // Space Complexity: O(n)

function stringReverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr.toLowerCase();
}

console.log(stringReverse('Hello'));
console.log(stringReverse('Racecar'));

// One Away (CTCI Ch. 1 pg 91, 1.5)
// Check if two strings are one edit away.
    // Time Complexity: O(n)
    // Space Complexity: O(1)

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;

    let [shorter, longer] = str1.length < str2.length ? [str1, str2] : [str2, str1];
    let index1 = 0, index2 = 0, foundDifference = false;

    while (index1 < shorter.length && index2 < longer.length) {
        if (shorter[index1] !== longer[index2]) {
            if (foundDifference) return false;
            foundDifference = true;
            if (shorter.length === longer.length) index1++;
        } else {
            index1++;
        }
        index2++;
    }
    return true;
}