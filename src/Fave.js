import React, { Component } from 'react';

class Fave extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      isFave: false
    }
  }
  handleClick(e){
    console.log('handling the handle click')
    let prevState = this.state.isFave;
    this.setState ({
      isFave: !prevState
    })
    e.stopPropagation(e)
  }
  render() {
    let classToggle = this.state.isFave ? "remove_from_queue" : "add_to_queue"

     
    return (
      <div className={`film-row-fave ${classToggle}`} onClick={this.handleClick}>
        <p className="material-icons">{`${classToggle}`}</p>
      </div>
    )
  }
}

export default Fave;

