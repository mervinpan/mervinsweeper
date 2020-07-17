import { connect } from 'react-redux';
import Status from '../components/Status.jsx';
import time from '../actions/time.js';
import newGame from '../actions/newGame.js';

var mapStateToProps = (state) => ({
  timer: state.timer,
  mine: state.mine
});

var mapDispatchToProps = (dispatch) => ({
  time: () => {
    dispatch(time());
  },
  newGame: () => {
    dispatch(newGame());
  }
});

var StatusContainer = connect(mapStateToProps, mapDispatchToProps)(Status);

export default StatusContainer;
