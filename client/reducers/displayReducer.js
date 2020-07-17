import {displayGenerator, displayCells, markCells} from './template/displayGenerator.js'

var board = displayGenerator(10)

var displayReducer = (state = board, action) => {
  switch (action.type) {
    case 'LEFT_CLICK':
      return displayCells(state, action.cell, action.answer);
    case 'RIGHT_CLICK':
      return markCells(state, action.cell, action.display);
    case 'NEW_GAME':
      return displayGenerator(10);
    default:
      return state;
  }
};

export default displayReducer;