import React, { Component } from 'react';
import logo from '../assets/woolball.png';
import NewPattern from './NewPattern'

class Nav extends Component {
  state = {
    newPatternOpen: false
  }

  render() {
    return (
      <nav className='navbar is-warning' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img className='App-logo' src={logo} alt='Knittr logo' />
            <p className='App-title'>Knittr</p>
          </a>
          <div className='navbar-menu is-active'>
            <div className='navbar-start'>
              <a className='navbar-item' onClick={() => { this.setState({ newPatternOpen: true }) }}>New Pattern</a>
              <NewPattern newPatternOpen={this.state.newPatternOpen} cancelNewPattern={this.cancelNewPattern}></NewPattern>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  cancelNewPattern = () => {
    this.setState({ newPatternOpen: false });
  }
}


export default Nav;
