import React, { Component } from 'react';

class Count extends Component {
  render() {
    return (
        <h3>Count: {this.props.count.number}</h3>
    );
  }
}


export default Count;