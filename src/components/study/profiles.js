import React, { Component } from 'react'

export class profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    Increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
  render() {
    return (
      <div>
        {`count ${this.state.count}`}
        <button onClick={() => this.Increment()}>Inc</button>
        <button onClick={() => this.Decrement()}>Dec</button>
      </div>
    )
  }
}

export default profiles
