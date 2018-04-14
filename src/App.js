import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>
      </Router>      
    );
  }
}

export default App;
