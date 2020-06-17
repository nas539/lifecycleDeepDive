import React, { Component } from 'react';
import Workflow from './workflow';
import Rules from './rules';
import Discussion from './discussion';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Discussion />
        <Rules />
        <Workflow />
      </div>
    );
  }
}
