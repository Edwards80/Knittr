import React, { Component } from 'react';

class Stitch extends Component {
  render() {
    return (
      <div className="stitch">
        {this.props.stitch}
      </div>
    );
  }
}

export default Stitch;