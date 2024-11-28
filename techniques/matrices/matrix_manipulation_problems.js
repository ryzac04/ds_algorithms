
// Rotate a matrix 90 degrees clockwise
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)

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