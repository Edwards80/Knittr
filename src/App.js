import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Patterns from './components/Patterns';
import NewPattern from './components/NewPattern';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/patterns/:pattern_id' component={Patterns} />
            <Route path='/NewPattern' component={NewPattern} />
          </Switch>
        </div>
      </Router>      
    );
  }
}

export default App;
