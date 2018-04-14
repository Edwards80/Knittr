import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar is-warning' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img className='App-logo' src='./woolball.png' alt='Knittr logo'/>
            <p className='App-title'>Knittr</p>
          </a>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='/' >Home</a>
            <a className='navbar-item' href="/patterns">Patterns</a>
            <a className='navbar-item' href="/editor">Editor</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
