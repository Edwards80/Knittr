import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar is-warning' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <p className='App-title'>Knittr</p>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;