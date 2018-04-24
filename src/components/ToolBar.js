import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

class ToolBar extends Component {
  render() {
    return (
      <div>
        <div className='box'>
          <div className="subtitle">ToolBar</div>
          <div className="button" onClick={this.props.handleSavePattern}>Save Changes</div>
          <div className="field">
            <p className="control">
              <span className="select" name="stitchType" onChange={this.props.handleStitchSelect}>
                <select>
                  <option >Stitch Type</option>
                  <option defaultValue value="knit">Knit</option>
                  <option value="purl">Purl</option>
                </select>
              </span>
            </p>
          </div>
          <CirclePicker circleSize={28} color={this.props.stitchColor} onChange={this.props.handleColorSelect}  width={'100%'} />
        </div>
      </div>
    );
  }
}

export default ToolBar;
