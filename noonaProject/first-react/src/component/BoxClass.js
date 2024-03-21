import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
        
      <div>Box{this.props.num}</div>//함수에 this주의
    )
  }
}
