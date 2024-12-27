
// Remove Duplicates and Return Array 
// Given an array, remove all duplicate elements and return a new array w/out duplicates. 

    // Time Complexity: O(n^2)
    // Space Complexity: O(n)

let array = [0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 1, 3, 2]

function removeDuplicate(arr) {
    return arr.filter((value, index, array) => {
        return array.indexOf(value) === index;
    })
}

console.log(removeDuplicate(array))

    // Time Complexity: O(n) 
    // Space Complexity: O(m)
    
function duplicateRemove(arr) {
    let uniqueArr = Array.from(new Set(arr));
    return uniqueArr;
}

console.log(duplicateRemove(array));