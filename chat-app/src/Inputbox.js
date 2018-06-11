import React, {Component} from 'react';
import './App.css';

class Inputbox extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.inchange = this.inchange.bind(this);
    this.unClick = this.unClick.bind(this);
  }

  inchange(event) {
    this.state = {
      titel: event.target.value
    }
  }

  unClick() {
    this.props.uponClick(this.state.titel)
  }

  render() {
    return (
      <div>
        <input onChange={this.inchange}/>
        <button onClick={this.unClick}>Save</button>
      </div>

    );
  }
}

export default Inputbox;
