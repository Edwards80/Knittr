import React, { Component } from 'react';
import PatternCard from './PatternCard';

class PatternSearch extends Component {
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
      <div className='columns is-multiline'>
        {this.props.patternsLoading ? <p>Loading</p> : this.props.patterns.slice().map((pattern, i) => {
          return (
            <div key={i} className="column is-one-quarter">
              <PatternCard pattern={pattern}/>
            </div>);
        })}
      </div>
    );
  }
}

export default PatternSearch;