import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  constructor(props){
    super(props)
    this.innerHTML = props.text
    this.csStyle = props.csStyle
    // this.onClick = call onclick defined by parent
  }

  render() {
    return (
      // className can be 'primary', 'warning' or 'danger'
      <Button className={this.csStyle}>
      </Button>
    )
  }
}

export default Button
