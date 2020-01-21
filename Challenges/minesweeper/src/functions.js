//board is always a square
export function createBoard(size) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([]);
    let row = board[i];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
  }
  return board;
}

export function plantBombs(board, numBombs) {
  //for difficulty, use difficulty instead of numBombs and have number increase or decrease depending on difficulty

  let length = board.length;

  while (numBombs > 0) {
    let row = Math.floor(Math.random() * (length - 0));
    let col = Math.floor(Math.random() * (length - 0));
    board[row][col] = '💣';
    board = countNeighbors(board, row, col, '💣');
    numBombs--;
  }
  return board;
}

export function countNeighbors(board, row, col, bomb) {
  //   console.log('countingNeighbors cell:', row, col);
  let aboveRow = row - 1 >= 0 ? row - 1 : 0;
  let belowRow = row + 1 < board.length ? row + 1 : board.length - 1;
  let leftCol = col - 1 >= 0 ? col - 1 : 0;
  let rightCol = col + 1 < board.length ? col + 1 : board.length - 1;

  for (let i = aboveRow; i <= belowRow; i++) {
    for (let j = leftCol; j <= rightCol; j++) {
      let cell = board[i][j];
      //   console.log('cell val:', cell);
      if (cell !== undefined && cell !== bomb) {
        board[i][j] += 1;
      }
      //   console.log('cell val:', cell);
    }
  }
  //   console.log(board);
  return board;
}

/* TEST */
// const board = createBoard(10);
// plantBombs(board, 7);
// console.log(board);
