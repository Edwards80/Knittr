import React, { Component } from 'react';

class Stitch extends Component {
  render() {
    return (
      <div className="stitch" onClick={() => {console.log(this.props.location)}}>
        {this.props.stitch}
      </div>
    );
  }
}

export default Stitch;