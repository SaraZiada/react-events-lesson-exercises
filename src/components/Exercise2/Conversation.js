import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"
  displayConvo = () => {
    this.props.displayConvo(null)
  }

  render() {
    return (
      <div>
        <button className="back" onClick={this.displayConvo}>Back</button>
        {this.props.convo.map(c => 
        {
          return (
            <div><span className="sender">
            {c.sender ==="self" ? "Me" : this.props.sender}</span> : "{c.text}"
            </div>
          )
        })}
      </div>
    );
  }
}

export default Conversation;
