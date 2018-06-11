import React, { Component } from 'react';
import './App.css';
import ModuleList from './ModuleList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Inputbox from './Inputbox';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CounterApp from "./CounterApp";

class App extends Component {

  render() {
    return (
      <div className="App">
        <ModuleList/>
        <CounterApp vala={0}/>
      </div>
    );
  }
}

export default App;
