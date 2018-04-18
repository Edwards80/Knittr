import React, { Component } from 'react';
import PatternCard from './PatternCard';

class Home extends Component {
  state = {
    patternsLoading: true
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/patterns').then(res => {
      if (res.status === 404) return Promise.reject(new Error('Patterns not found'))
      return res.json();
    }).then(body => {
      this.setState({ patternsLoading: false, patterns: body });
    });
  }
  
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
          {this.state.patternsLoading ? <p>Loading</p>  : this.state.patterns.map((pattern, i) => {
            return <PatternCard key={i} pattern={pattern} />;
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
        {/* <div className='columns' >
          {[1, 2, 3, 4].map((i) => {
            return <PatternCard key={i} />;
          })}
        </div> */}
        <button className='button'>More</button>
        {/* Beginner patterns section */}
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Intermediate Patterns</h1>
            </div>
          </div>
        </section>
        {/* <div className='columns' >
          {[1, 2, 3, 4].map((i) => {
            return <PatternCard key={i} />;
          })}
        </div> */}
        <button className='button'>More</button>        
      </div>
    );
  }
}

export default Home;
