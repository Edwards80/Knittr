import React, { Component } from 'react';
import PatternCard from './PatternCard';

class Home extends Component {
  state = {
    patternsLoading: true
  }

  componentDidMount() {
    fetch('https://knittr-be.herokuapp.com/api/patterns').then(res => {
      if (res.status === 404) return Promise.reject(new Error('Patterns not found'));
      return res.json();
    }).then(body => {
      this.props.setPatterns(body)
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
          {this.props.patternsLoading ? <p>Loading</p> : this.props.patterns.slice(0, 4).map((pattern, i) => {
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
          {this.props.patternsLoading ? <p>Loading</p> : this.props.patterns.slice()
            .filter((pattern) => {
              return pattern.difficulty.toLowerCase() === 'beginner';
            })
            .slice(0, 4)
            .map((pattern, i) => {
              return <PatternCard key={i} pattern={pattern} />;
            })}
        </div>
      </div>
    );
  }

}

export default Home;
