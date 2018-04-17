import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Patterns from './Patterns';
import Editor from './Editor';

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
