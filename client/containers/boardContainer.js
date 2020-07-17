import { connect } from 'react-redux';
import Board from '../components/Board.jsx';
import leftClick from '../actions/leftClick.js';
import rightClick from '../actions/rightClick.js';



var mapDispatchToProps = (dispatch) => ({
  leftClick: (index, answer) => {
    dispatch(leftClick(index, answer));
  },
  rightClick: (index, display) => {
    dispatch(rightClick(index, display));
  },
  doubleClick: () => {
    //FIXME
    // dispatch(leftClick());
  }
});

var mapStateToProps = (state) => ({
  display: state.display,
  answer: state.answer
});

var BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
