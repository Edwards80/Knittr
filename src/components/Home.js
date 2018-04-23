import React, { Component } from 'react';
import PatternCard from './PatternCard';

class Home extends Component {
  state = {
    patternsLoading: true
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/patterns').then(res => {
      if (res.status === 404) return Promise.reject(new Error('Patterns not found'));
      return res.json();
    }).then(body => {
      this.setState({ patternsLoading: false, patterns: body.sort((a, b) => {
        return b.created_at - a.created_at;
      }) });
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
          {this.state.patternsLoading ? <p>Loading</p>  : this.state.patterns.slice(0, 4).map((pattern, i) => {
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
        <div className='columns' >
          {this.state.patternsLoading ? <p>Loading</p>  : this.state.patterns.slice(0, 4).map((pattern, i) => {
            return pattern.difficulty.toLowerCase() === 'easy' ? <PatternCard key={i} pattern={pattern} /> : null;
          })}
        </div>
        <button className='button'>More</button>     
      </div>
    );
  }
}

export default Home;
