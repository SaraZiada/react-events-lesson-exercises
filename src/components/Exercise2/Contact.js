import React, { Component } from 'react';

class Contact extends Component {

  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div >
        <div onClick={this.displayConvo}>{this.props.name}</div>
      </div>
    );
  }
}

export default Contact;
