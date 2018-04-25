import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    let { title, style, author, description, created_at, preview,  _id} = this.props.pattern;
    return (
      <div className='column'>
        <div className="card">
          <div className="card-image">
            <a href={`/patterns/${_id}`}>
              <figure className="image is-4by3">
                <img src={preview} alt="Pattern Preview" />
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
            <p>Created: {new Date(created_at).toDateString()}</p> 
          </div>
        </div>
      </div>
    );
  }
}

export default PatternCard;
