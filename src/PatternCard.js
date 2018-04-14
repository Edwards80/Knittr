import React, { Component } from 'react';

class PatternCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/480x480.png" alt="Pattern Preview" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media-content">
            <p class="title is-4">Pattern Title</p>
            <p class="subtitle is-6">Style</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
          <br />
          <a href="link to pattern">LINK TO PATTERN</a>
        </div>
      </div>
    );
  }
}

export default PatternCard;