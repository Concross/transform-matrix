'use strict';

let testMatrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5], [6, 6, 6, 6]];

const rotateMatrix = (matrix) => {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[matrix.length - (j + 1)][i];
    }
  }
  return result;
}

rotateMatrix(testMatrix);