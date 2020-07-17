import mineGenerator from './template/mineGenerator.js';

var mineReducer = (state = 10, action) => {
  switch (action.type) {
    case 'RIGHT_CLICK':
      return mineGenerator(action.display)
    case 'NEW_GAME':
      return 10
    default:
      return state;
  }
};

export default mineReducer;