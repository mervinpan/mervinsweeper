var _ = require('lodash');

var answerGenerator = function (size) {
  var board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    board.push(row)
  }
  board = setMines(board, size);
  board = zeroBoard(board)
  board = setNumbers(board)
  return board;
}

var setMines = function (board, number) {
  let newBoard = _.clone(board)
  let mines = new Set();
  let indexes = [];
  while (mines.size < number) {
    mines.add(Math.floor(Math.random() * 100))
  }
  mines.forEach(each => {
    let row = 0;
    let col = 0;
    while (each > 10) {
      each -= 10;
      row++;
    }
    col = each % 10;
    indexes.push([row, col])
  })
  indexes.forEach(each => {
    newBoard[each[0]][each[1]] = "*"
  })
  return newBoard;
}

var zeroBoard = function(board) {
  let newBoard = _.clone(board)
  let nullArray = [];
  for (let i = 0; i < newBoard.length; i++) {nullArray.push(null)}
  newBoard.unshift(nullArray.slice());
  newBoard.push(nullArray.slice());
  newBoard = newBoard.map(each => {
    each = each.slice();
    each.unshift(null);
    each.push(null);
    return each;
  })
  return newBoard;
}

var setNumbers = function(board) {
  let newBoard = _.clone(board);
  for (let i = 1; i < newBoard.length - 1; i++) {
    for (let j = 1; j < newBoard.length - 1; j++) {
      var surroundCells = [];
      if (board[i][j] !== '*') {
        let sum = 0;
        surroundCells.push(board[i-1][j-1]);
        surroundCells.push(board[i-1][j]);
        surroundCells.push(board[i-1][j+1]);
        surroundCells.push(board[i][j-1]);
        surroundCells.push(board[i][j+1]);
        surroundCells.push(board[i+1][j-1]);
        surroundCells.push(board[i+1][j]);
        surroundCells.push(board[i+1][j+1]);
        surroundCells.forEach(each => {
          if (each === '*') {
            sum += 1;
          }
        })
        newBoard[i][j] = sum;
      }
    }
  }
  return newBoard;
}

module.exports = {
  answerGenerator
}
