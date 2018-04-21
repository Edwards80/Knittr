import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <div>
        <div className='box'>
          ToolBar
          <div className="field">
            <p className="control">
              <span className="select" name="stitchType" onChange={this.props.handleStitchSelect}>
                <select>
                  <option >Stitch Type</option>
                  <option defaultValue value="knit">knit</option>
                  <option value="perl">perl</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;