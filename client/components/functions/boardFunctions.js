var display = (index, board) => {
  if (board[index.row][index.col] === 1) {
    return 1;
  } else if (board[index.row][index.col] === 2) {
    return 2;
  } else {
    return 0;
  }
}
var showAnswer = (index, board) => board[index.row][index.col];

var index = function(number) {
  var row = 0, col = 0;
  while (number >= 12) {
    number -= 12;
    row++;
  }
  col = number % 12;
  return {row, col}
}

module.exports = {
  display,
  showAnswer,
  index,
}