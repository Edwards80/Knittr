import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        {parseRow(this.props.row, this.props.rowNum)}
      </div>
    );
  }

}

const parseRow = (row, rowNum) => {

  const parseRow = (row, rowNum) => {
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

  return <p>{`Row ${rowNum}: `}{parseRow(row)}</p>;
};

export default Instructions;