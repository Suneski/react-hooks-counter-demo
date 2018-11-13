import React, { Component } from 'react';

export default class KeepItClassy extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  nukeCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <main className="wrapper">
        <section className="count">
          {this.state.count}
        </section>
        <section>
          <button onClick={this.decreaseCount}>Decrease</button>
          <button onClick={this.nukeCount}>Nuke It</button>
          <button onClick={this.increaseCount}>Increase</button>
        </section>
      </main>
    )
  }
}
