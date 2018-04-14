import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/480x480.png" alt="Pattern Preview" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Pattern Title</p>
            <a href="Link to styles"><div className="tag is-primary">Style Tag</div></a>
          </div>
        </div>

        <div className="content">
          Here is a brief description of the knitting pattern
          <br />
          <a href="link to pattern">LINK TO PATTERN</a>
        </div>
      </div>
    );
  }
}

export default PatternCard;