import React, { Component } from 'react';
import PatternCard from './PatternCard';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Recently added patterns
              </h1>
            </div>
          </div>
        </section>
        <div className='columns'>
          <div className='column'>
            <PatternCard />
          </div>
          <div className='column'>
            <PatternCard />
          </div>
          <div className='column'>
            <PatternCard />
          </div>
          <div className='column'>
            <PatternCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;