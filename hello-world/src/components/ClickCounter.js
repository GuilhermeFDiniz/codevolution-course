import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

  render() {
    const {count, incrementCount} = this.props
     console.log(this.props.name)
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} Click {count} Times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 2)
