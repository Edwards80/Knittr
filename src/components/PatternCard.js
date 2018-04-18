import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    let { title, style, author, description, _id} = this.props.pattern;
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
              <a href={`/patterns/${_id}`}><p className="title is-4">{title}</p></a>
              <a href="Link to styles"><div className="tag is-primary is-rounded">{style}</div></a>
            </div>
          </div>
          <div className="content">
            <p>{description}</p>
            <p>Pattern by: <a href={`/designer/${author}`}>{author}</a></p>            
          </div>
        </div>
      </div>
    );
  }
}

export default PatternCard;
