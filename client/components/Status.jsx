import React from 'react';

class Status extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    setInterval(() => this.props.time(), 1000)
  }

  render () {
    return (
      <div className="status-container">
        <div className="status-bar">
          <div className="mines-remaining"><div className="mine-count">{this.props.mine}</div></div>
          <div className="emoji" onClick={()=> this.props.newGame()}><div className="icon">🙂</div></div>
          <div className="time-spent"><div className="timer">{this.props.timer}</div></div>
        </div>
      </div>
    )
  }
}

export default Status;
