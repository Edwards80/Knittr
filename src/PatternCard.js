import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    return (
      <div className='column'>
        <div className="card">
          <div className="card-image">
            <a href="Expand preview">
              <figure className="image is-4by3">
                <img src="http://placeimg.com/480/480/any" alt="Pattern Preview" />
              </figure>
            </a>
          </div>
          <div className="card-content">
            <div className="media-content">
              <a href="Link to pattern"><p className="title is-4">Pattern Title</p></a>
              <a href="Link to styles"><div className="tag is-primary is-rounded">Style Tag</div></a>
            </div>
          </div>
          <div className="content">
            <p>Here is a brief description of the knitting pattern</p>
            <p>Pattern by: <a href="Link to designer">Someone</a></p>            
          </div>
        </div>
      </div>
    );
  }
}

export default PatternCard;
