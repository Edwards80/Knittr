import React, { Component } from 'react';

class Stitch extends Component {
  render() {
    const row = this.props.stitchLocation[0];
    const col = this.props.stitchLocation[1];    
    return (
      <div className="stitch" style={{backgroundColor:`${this.props.stitch.colour}`}} onClick={() => {this.props.updateStitch(row, col);} }>
        {this.props.stitch.stitchType}
      </div>
    );
  }

}

export default Stitch;