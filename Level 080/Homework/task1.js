// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript
// Matrix Transpose

function transpose(matrix) {
    const result = [];

    for (let col = 0; col < matrix[0].length; col++) {
        const newRow = [];
        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }

    return result;
}