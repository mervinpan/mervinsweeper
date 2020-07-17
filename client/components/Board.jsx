import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {display, showAnswer, index} from './functions/boardFunctions.js'
import leftClick from '../actions/leftClick.js';

var _ = require('lodash');

// function createBoard (size) {
//   var dispatch = useDispatch();
//   var answerCell = useSelector(state => state.answer);
//   var displayCell = useSelector(state => state.display);
//   var board = [];
//   var counter = 0;
//   for (var i = 0; i < size*size; i++) {
//     if (display(index(counter), displayCell)) {
//       board.push(<div className="cell show" key={counter} data={counter} >{showAnswer(index(counter), answerCell)}</div>);
//     } else {
//       board.push(<div className="cell" key={counter} data={counter} onClick={(e) => {dispatch(leftClick(index(Number(e.target.attributes[1].value)), answerCell))}}></div>)
//     }
//     counter++;
//   }
//   return board;
// }

// function Board() {
//   return (
//     <div className="board-container">
//       <div className="board-canvas">
//         <div className="board">
//           {createBoard(10)}
//           {this.props.display}
//         </div>
//       </div>
//     </div>
//   )
// }

class Board extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="board-container">
        <div className="board-canvas" >
          <div className="board">
            {_.flattenDeep(this.props.display).map((each, i) => {
              if (i < 12 || i > 132) {return}
              if (i % 12 === 0 || i % 12 === 11) {return}
              if (display(index(i), this.props.display) === 1) {
                return (<div
                  className="cell show"
                  key={i}
                  data={i}
                  contextMenu="none"
                  onContextMenu={(e)=> e.preventDefault()}>
                  {showAnswer(index(i), this.props.answer)}
                </div>)
              } else if (display(index(i), this.props.display) === 2) {
                return (<div
                  className="cell"
                  key={i}
                  data={i}
                  contextMenu="none"
                  onContextMenu={(e)=> {e.preventDefault(); this.props.rightClick(index(Number(e.currentTarget.attributes[1].value)), this.props.display)}}
                  onClick={(e) => this.props.leftClick(index(Number(e.target.attributes[1].value)), this.props.answer)}>
                  <img className="flag" src="./icons/flag.png"></img>
                </div>)
              } else if (display(index(i), this.props.display) === 0) {
                return (<div
                  className="cell"
                  key={i}
                  data={i}
                  onDoubleClick={(e) => {e.preventDefault(); console.log('hellllo')}}
                  contextMenu="none"
                  onContextMenu={(e)=> {e.preventDefault(); this.props.rightClick(index(Number(e.target.attributes[1].value)), this.props.display)}}
                  onClick={(e) => this.props.leftClick(index(Number(e.target.attributes[1].value)), this.props.answer)}>
                </div>)
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Board;


console.shallowCloneLog = function(){
  var typeString = Function.prototype.call.bind(Object.prototype.toString)
  console.log.apply(console, Array.prototype.map.call(arguments, function(x){
    switch (typeString(x).slice(8, -1)) {
      case 'Number': case 'String': case 'Undefined': case 'Null': case 'Boolean': return x;
      case 'Array': return x.slice();
      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;
        for (var key in x) {
          out[key] = x[key];
        }
        Object.defineProperty(out, 'constructor', {value: x.constructor});
        return out;
    }
  }));
}