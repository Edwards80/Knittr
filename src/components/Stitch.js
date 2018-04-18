import React, { Component } from 'react';

class Stitch extends Component {
  render() {
    return (
      <div className="stitch" style={{backgroundColor:`${this.props.stitch.colour}`}} onClick={() => {console.log(this.props.location);}}>
        {this.props.stitch.stitchType}
      </div>
    );
  }
}

export default Stitch;