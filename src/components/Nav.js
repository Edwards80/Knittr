import React, { Component } from 'react';
import logo from '../assets/woolball.png';

class Nav extends Component {
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
              <a className='navbar-item' href="/patterns">Patterns</a>
              <a className='navbar-item' href="/editor">Editor</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
