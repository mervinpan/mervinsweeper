var timerReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TIME':
      return state +1
    case 'NEW_GAME':
      return 0
    default:
      return state;
  }
};

export default timerReducer;