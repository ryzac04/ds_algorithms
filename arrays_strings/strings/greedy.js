
// String Compression (CTCI Ch. 1 pg 91, 1.6)
// Compress strings using counts of repeated characters. 
    // Time Complexity: O(n)
    // Space Complexity: O(n)

function stringCompression(str) {
    let compressed = '', count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            compressed += str[i] + count;
            count = 0;
        }
    }
    return compressed.length < str.length ? compressed : str;
}