import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Patterns from './components/Patterns';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/patterns' component={Patterns} />
            <Route path='/editor' component={Editor} />
          </Switch>
        </div>
      </Router>      
    );
  }
}

export default App;
