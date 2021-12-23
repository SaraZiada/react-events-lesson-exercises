import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  render() {
    return (
      <div >
        {this.props.contacts.map(c => <Contact key={c.name} displayConvo={this.props.displayConvo} name={c.name}/>)}
      </div>
    );
  }
}

export default List;
