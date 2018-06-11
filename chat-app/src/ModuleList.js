import React, {Component} from 'react';
import './App.css';
import Module from './Module';
import Inputbox from './Inputbox';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class ModuleList extends Component {

  constructor() {
    super();
    this.state = {
      new: "yep",
      modules: [
        {titlex: "name1", idx: 1},
        {titlex: "2name", idx: 2},
        {titlex: "na3me", idx: 3}
      ]
    }
    this.addToList = this.addToList.bind(this);
  }

  renderList() {
    let modules = this.state.modules.map(function (module) {
      return <Module titler={module.titlex} idr={module.idx}/>
    });
    return modules;
  }

  addToList(tital) {
    this.setState(prevoState => ({
      modules: [...prevoState.modules, {titlex: tital, idx: this.state.modules.length + 1}]
    }));
    console.log(this.state.modules[3]);
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <Inputbox uponClick={this.addToList}/>
      </div>
    );
  }
}

export default ModuleList;
