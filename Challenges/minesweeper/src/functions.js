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
    if (board[row][col] !== '💣') {
      board[row][col] = '💣';
      board = countNeighbors(board, row, col, '💣');
      numBombs--;
    }
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

export function borders(board, row, col) {
  console.log(row, col);
  let startRow = row - 1 >= 0 ? row - 1 : 0;
  let startCol = col - 1 >= 0 ? col - 1 : 0;
  let length = board.length;
  //   debugger;
  if (startRow < length && startCol < length) {
    let val = board[startRow][startCol];
    if (val !== 0 && val !== '💣') {
      return updateGrid(board, startRow, startCol, val);
    } else {
      board = borders(board, startRow, startCol + 1);
      board = borders(board, startRow + 1, startCol);
      return board;
    }
  } else {
    return board;
  }
}

export function updateGrid(board, row, col, val) {
  if (status !== 'won') {
    board[row][col] = val;
  } else {
  }
  return board;
}

export function status(board, status) {
  if (status === 'lost') {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        row[j] = '☠︎';
      }
    }
  } else {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      for (let j = 0; j < row.length; j++) {
        row[j] = '🥳';
      }
    }
  }
  console.log(board);
  return board;
}

export function checkStatus(startBoard, endBoard) {
  for (let i = 0; i < startBoard.length; i++) {
    let row = startBoard[i];
    for (let j = 0; j < row.length; j++) {
      let startEl = startBoard[i][j];
      let endEl = endBoard[i][j];
      if (endEl !== '💣') {
        if (startEl !== endEl) {
          return false;
        }
      }
    }
  }
  return true;
}

/* TEST */
// const board = createBoard(10);
// plantBombs(board, 7);
// console.log(board);
