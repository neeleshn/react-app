import React, {Component} from 'react';
import './App.css';

class Module extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.titler}-{this.props.idr}
      </li>
    );
  }
}

export default Module;
