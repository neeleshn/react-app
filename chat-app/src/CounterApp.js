import React, {Component} from 'react';
import './App.css';

class CounterApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={event => {this.props.dispatch({type: 'minus'})}}>-</button>
        <span>{this.props.vala}</span>
        <button onClick={event => {this.props.dispatch({type: 'plus'})}}>+</button>
      </div>
    );
  }
}

export default CounterApp;
