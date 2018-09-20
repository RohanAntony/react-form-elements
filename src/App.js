import React, { Component } from 'react';
import ShortAnswerQuestion from './components/ShortAnswerQuestions/ShortAnswerQuestions.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShortAnswerQuestion question="What is your name?"/>
      </div>
    );
  }
}

export default App;
