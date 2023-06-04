function matrix(N) {
    // Create an empty matrix
    const matrix = Array(N).fill().map(() => Array(N));
  
    let startRow = 0;
    let endRow = N - 1;
    let startCol = 0;
    let endCol = N - 1;
    let counter = 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Fill the top row from left to right
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter++;
      }
      startRow++;
  
      // Fill the right column from top to bottom
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endCol] = counter++;
      }
      endCol--;
  
      // Fill the bottom row from right to left
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;
  
      // Fill the left column from bottom to top
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }
  
    return matrix;
  }
  