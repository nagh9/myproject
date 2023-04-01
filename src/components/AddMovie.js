import React, { Component } from 'react';
import './MovieCard';


export default class AddMovie extends Component {
  render() {
    return (
      <div>
        <button className="card" onClick={this.props.onAdd}>+</button>
      </div>
    )
  }
}
