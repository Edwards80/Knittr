import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Patterns from './components/Patterns';
import NewPattern from './components/NewPattern';

class App extends Component {
  state = {
    patternsLoading: true,
    patterns: []
  }

  render() {
    return (
      <Router>
        <div>
          <Nav setPatterns={this.setPatterns} getPatterns={this.getPatterns}/>
          <Switch>
            <Route exact path='/' render={() => {
              return <Home setPatterns={this.setPatterns} patternsLoading={this.state.patternsLoading} patterns={this.state.patterns}/>;
            }} />
            <Route path='/patterns/:pattern_id' component={Patterns} />
            <Route path='/NewPattern' component={NewPattern} />
          </Switch>
        </div>
      </Router>      
    );
  }

  setPatterns = body => {
    this.setState({ patternsLoading: false, patterns: body.sort((a, b) => {
      return b.created_at - a.created_at;
    }) });
  }

  getPatterns = () => {
    return fetch('https://knittr-be.herokuapp.com/api/patterns');
  }
}

export default App;
