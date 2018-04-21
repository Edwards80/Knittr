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
  let rowInstruction = '';
  let previousInst = [];
  row.forEach((stitch, i) => {
    if (i === 0) previousInst = [stitch.stitchType, 1];
    else if (stitch.stitchType === previousInst[0]) previousInst[1]++;
    else if (i === row.length - 1) {
      if (stitch.stitchType === previousInst[0]) {
        previousInst[1]++;
        rowInstruction += previousInst.join('') + ' ';
      } else {
        rowInstruction += previousInst.join('') + ' ' + [stitch.stitchType, 1].join('');
      }
    }
    else {
      rowInstruction += previousInst.join('') + ' ';
      previousInst = [stitch.stitchType, 1];
    }
  });

  return <p>{`Row ${rowNum}: `}{rowInstruction}</p>
};

export default Instructions;
