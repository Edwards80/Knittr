import React, { Component } from 'react';
import Stitch from './Stitch';

class Row extends Component {
  render() {
    return (
      <div>
        <div className="wrapper" style={{ gridTemplateColumns: `repeat(${this.props.row.length + 1}, 30px)` }}>{this.props.index + 1}
          {this.props.row.map((stitch, i) => {
            return <Stitch stitch={stitch} stitchLocation={[this.props.index, i]} updateStitch={this.props.updateStitch} key={i}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Row;