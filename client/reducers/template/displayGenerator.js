var _ = require('lodash');

var displayGenerator = function (size) {
  var board = [];
  for (var i = 0; i < size; i++) {
    var row = [];
    for (var j = 0; j < size; j++) {
      row.push(0);
    }
    board.push(row)
  }
  board = zeroBoard(board)
  return board;
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
var displayCells = function(state, location, answer) {
  var newState = state.slice();
  if (answer[location.row][location.col] === 0) {
    var list = connectedZeros(location, answer)
    newState[location.row][location.col] = 1;
    newState = openAll(newState, location, answer);
    list.forEach(each => {
      openAll(newState, each, answer)
    })
  } else if (answer[location.row][location.col] > 0) {
    newState[location.row][location.col] = 1;
  } else {
    newState[location.row][location.col] = 1;
    alert('GAME OVER')
  }
  if (checkComplete(newState, answer)) {
    alert('WINNER')
  }
  return newState;
}
var openAll = function(state, location) {
  state[location.row-1][location.col-1] = 1;
  state[location.row-1][location.col] = 1;
  state[location.row-1][location.col+1] = 1;
  state[location.row][location.col-1] = 1;
  state[location.row][location.col] = 1;
  state[location.row][location.col+1] = 1;
  state[location.row+1][location.col-1] = 1;
  state[location.row+1][location.col] = 1;
  state[location.row+1][location.col+1] = 1;
  return state;
}
var connectedZeros = function(location, answer) {
  var bucket = new Set();
  var setup = _.cloneDeep(answer);
  var addZeros = function(location, answer) {
    answer[location.row][location.col] = 'X';
    if (answer[location.row-1][location.col-1] === 0) {
      bucket.add({row: location.row-1, col: location.col-1});
      addZeros({row: location.row-1, col: location.col-1}, answer)
    }
    if (answer[location.row-1][location.col] === 0) {
      bucket.add({row: location.row-1, col: location.col});
      addZeros({row: location.row-1, col: location.col}, answer)
    }
    if (answer[location.row-1][location.col+1] === 0) {
      bucket.add({row: location.row-1, col: location.col+1});
      addZeros({row: location.row-1, col: location.col+1}, answer)
    }
    if (answer[location.row][location.col-1] === 0) {
      bucket.add({row: location.row, col: location.col-1});
      addZeros({row: location.row, col: location.col-1}, answer)
    }
    if (answer[location.row][location.col+1] === 0) {
      bucket.add({row: location.row, col: location.col+1});
      addZeros({row: location.row, col: location.col+1}, answer)
    }
    if (answer[location.row+1][location.col-1] === 0) {
      bucket.add({row: location.row+1, col: location.col-1});
      addZeros({row: location.row+1, col: location.col-1}, answer)
    }
    if (answer[location.row+1][location.col] === 0) {
      bucket.add({row: location.row+1, col: location.col});
      addZeros({row: location.row+1, col: location.col}, answer)
    }
    if (answer[location.row+1][location.col+1] === 0) {
      bucket.add({row: location.row+1, col: location.col+1});
      addZeros({row: location.row+1, col: location.col+1}, answer)
    }
  }
  addZeros(location, setup);
  return bucket;
}

var markCells = function(state, location, answer) {
  console.log(location)
  var newState = state.slice();
  if (newState[location.row][location.col] === 0) {
    newState[location.row][location.col] = 2;
  } else if (newState[location.row][location.col] === 2) {
    newState[location.row][location.col] = 0;
  }
  return newState;
}

var checkComplete = function(state, answer) {
  var newState = _.flattenDeep(state);
  var newAnswer = _.flattenDeep(answer);
  var complete = true;
  newState.forEach((each, index) => {
    if (each === 0 && newAnswer[index] !== '*') {
      complete = false;
    }
  })
  return complete;

}

module.exports ={
  displayGenerator,
  displayCells,
  markCells,
}


