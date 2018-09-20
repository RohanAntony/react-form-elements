import React, { Component } from 'react';
import Button from '../BaseComponents/Button/Button.js';

class ShortAnswerQuestion extends Component{
  constructor(props){
    super(props)
    this.question = props.question;
  }

  render(){
    return (
      <div>
        <p>{this.question}</p>
        <Button innerHTML="Submit" csStyle="primary"/>
      </div>
    )
  }
}

export default ShortAnswerQuestion
