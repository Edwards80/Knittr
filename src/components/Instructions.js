import React, { Component } from 'react';

const colours = {
  'f44336' : 'red',
  '#f44336' : 'red',
  '#e91e63' : 'pink',
  '#9c27b0' : 'fuscia',
  '#673ab7' : 'purple',
  '#3f51b5' : 'deep blue',
  '#2196f3' : 'mid blue',
  '#03a9f4' : 'turquoise',
  '#00bcd4' : 'sky blue',
  '#009688' : 'blue green',
  '#4caf50' : 'green',
  '#8bc34a' : 'light green',
  '#cddc39' : 'mustard',
  '#ffeb3b' : 'yellow',
  '#ffc107' : 'orange',
  '#ff9800' : 'burnt orange',
  '#ff5722' : 'deep orange',
  '#795548' : 'slate',
  '#607d8b' : 'denim'
};

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        {`Row ${this.props.rowNum}: ${parseRow(this.props.row, this.props.rowNum)}`}
      </div>
    );
  }

}

const parseRow = (row, rowNum) => {
  let rowCopy = row.slice();
  let reverseRow = false;
  let prevStitch = '';
  let prevColour = '';
  let count = 1;

  const reverseStitch = {
    p : 'k',
    k : 'p'
  };

  if (rowNum % 2 === 0) {
    rowCopy = rowCopy.slice().reverse();
    reverseRow = true;
  }

  return rowCopy.reduce((inst, stitch, i) => {
    let stitchType = stitch.stitchType;

    if (reverseRow) {
      stitchType = reverseStitch[stitch.stitchType]
    }

    if (i === 0) {
      prevStitch = stitchType;
      prevColour = stitch.colour;
    } else if (i === rowCopy.length - 1) {
      if (stitchType === prevStitch && stitch.colour === prevColour) {
        inst += `${stitchType}${count + 1} in ${colours[prevColour]}`;
      } else {
        inst += `${prevStitch}${count} in ${colours[prevColour]}, ${stitchType}${1} in ${colours[stitch.colour]}`;
      }
    } else if (stitchType === prevStitch && stitch.colour === prevColour) {
      count++;
    } else {
      inst += `${prevStitch}${count} in ${colours[prevColour]}, `;
      prevStitch = stitchType;
      prevColour = stitch.colour;
      count = 1;
    }

    return inst;
  }, '');
};


export default Instructions;