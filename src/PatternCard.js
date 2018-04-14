import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    return (
      <div className='column'>
        <a href="link to pattern">
          <div className="card">
            <div className="card-image">
              <a href="Expand preview">
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/480x480.png" alt="Pattern Preview" />
                </figure>
              </a>
            </div>
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4">Pattern Title</p>
                <a href="Link to styles"><div className="tag is-primary is-rounded">Style Tag</div></a>
              </div>
            </div>
            <div className="content">
              Here is a brief description of the knitting pattern
              <br />
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default PatternCard;
