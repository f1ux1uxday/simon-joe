import React, { Component } from 'react'

class Options extends Component {
  handleClick() {
    this.props.start()
    console.log(this.props.gameOn)
  }

  render() {
    return (
      <div id='optionContainer'>
        <button onClick={this.handleClick.bind(this)}> start </button>
      </div>
    )
  }
}

export default Options
