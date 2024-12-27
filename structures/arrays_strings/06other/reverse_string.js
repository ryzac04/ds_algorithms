
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