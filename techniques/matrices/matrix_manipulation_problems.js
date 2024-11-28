
// Rotate a matrix 90 degrees clockwise

    // Time Complexity: O(n^2)
    // Space Complexity: O(1)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.7

function rotateMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let row of matrix) row.reverse();
    return matrix;
}

// Zero Matrix (CTCI Ch. 1 pg 91, 1.8)
// Set rows and columns to 0 if an element is 0. 

    // Time Complexity: O(m * n)
    // Space Complexity: O(m + n)

// Source: Cracking the Coding Interview, 6th ed. - Ch1, pg 91, problem 1.8

function zeroMatrix(matrix) {
    const rows = new Set(), cols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let i of rows) matrix[i].fill(0);
    for (let j of cols) for (let i = 0; i < matrix.length; i++) matrix[i][j] = 0;
    return matrix;
}