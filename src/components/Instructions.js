import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        {`Row ${this.props.rowNum}: ${parseRow(this.props.row)}`}
      </div>
    );
  }

}

const parseRow = (row) => {
  let prevStitch = '';
  let count = 1;

  return row.reduce((inst, stitch, i) => {
    if (i === 0) {
      prevStitch = stitch.stitchType;
    } else if (i === row.length - 1) {
      if (stitch.stitchType === prevStitch) {
        inst += `${stitch.stitchType}${count + 1}`;
      } else {
        inst += `${prevStitch}${count}, ${stitch.stitchType}${1}`;
      }
    } else if (stitch.stitchType === prevStitch) {
      count++;
    } else {
      inst += `${prevStitch}${count}, `;
      prevStitch = stitch.stitchType;
      count = 1;
    }

    return inst;
  }, '');
};


export default Instructions;