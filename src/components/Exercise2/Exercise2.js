import React, { Component } from 'react';
import Conversation from './Conversation';
import List from './List';

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = (name) => {
    this.setState({displayConversation : name})
  }
  render() {
    let contacts = this.state.conversations.map(s => {return {"name":s.with}})
    let convo = this.state.conversations.filter(s => s.with===this.state.displayConversation).map(s =>  s.convo)
    return (
      <div >
        {this.state.displayConversation != null 
        ? <Conversation displayConvo={this.displayConvo} convo={convo[0]} sender={this.state.displayConversation}/> 
        : <List displayConvo={this.displayConvo} contacts={contacts} />}
      </div>
    );
  }
}

export default Exercise2;
