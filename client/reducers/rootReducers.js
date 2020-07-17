import displayReducer from './displayReducer.js';
import answerReducer from './answerReducer.js';
import timerReducer from './timerReducer.js';
import mineReducer from './mineReducer.js';

import {combineReducers} from 'redux';


var rootReducers = combineReducers({
  display: displayReducer,
  answer: answerReducer,
  timer: timerReducer,
  mine: mineReducer
})

export default rootReducers;