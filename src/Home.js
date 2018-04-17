import React, { Component } from 'react';
import PatternCard from './PatternCard';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Recently added section */}
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Recently added patterns
              </h1>
            </div>
          </div>
        </section>
        <div className='columns' >
          {[1, 2, 3, 4].map((i) => {
            return <PatternCard key={i} />;
          })}
        </div>
        {/* Beginner patterns section */}
        <section className='hero is-warning'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Starter Patterns</h1>
            </div>
          </div>
        </section>
        <div className='columns' >
          {[1, 2, 3, 4].map((i) => {
            return <PatternCard key={i} />;
          })}
        </div>
        <button className='button'>More</button>
        {/* Beginner patterns section */}
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Intermediate Patterns</h1>
            </div>
          </div>
        </section>
        <div className='columns' >
          {[1, 2, 3, 4].map((i) => {
            return <PatternCard key={i} />;
          })}
        </div>
        <button className='button'>More</button>        
      </div>
    );
  }
}

export default Home;
