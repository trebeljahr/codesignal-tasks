function matrixElementsSum(matrix) {
    let sum = 0
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!ghostRoomAboveExists(matrix, i, j)) {
                sum += matrix[i][j]   
            }
        }
    }
    return sum
}

function ghostRoomAboveExists(matrix, upperI, j) {
    for (let i = 0; i < upperI; i++) {
        if (matrix[i][j] === 0) return true
    }
    return false
}