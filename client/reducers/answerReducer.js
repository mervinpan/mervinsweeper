import {answerGenerator} from './template/answerGenerator.js'

var answerBoard = answerGenerator(10)

var answerReducer = (state = answerBoard, action) => {
  switch (action.type) {
    case 'LEFT_CLICK':
      return state;
    case 'NEW_GAME':
      return answerGenerator(10);
    case 'DOUBLE_CLICK':
      return state - 1;
    default:
      return state;
  }
}

export default answerReducer;