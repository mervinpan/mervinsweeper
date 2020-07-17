import React from 'react';
import StatusContainer from '../containers/statusContainer.js';
import BoardContainer from '../containers/boardContainer.js';
// import NewGameContainer from '../containers/newGameContainer.js';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="app-container">
        <StatusContainer/>
        <BoardContainer/>

      </div>
    )
  }
}

export default App;


