import React, { Component } from 'react';
import Row from './Row';
import ToolBar from './ToolBar';
import Instructions from './Instructions'

const stitchTypes = {
  'knit': 'k',
  'purl': 'p'
}

class Patterns extends Component {
  state = {
    patternLoading: true,
    stitchType: 'knit',
    stitchColor: '#ff44336'
  }

  componentDidMount() {
    const patternId = this.props.match.params.pattern_id;

    fetch(`http://localhost:5000/api/patterns/${patternId}`).then(res => {
      if (res.status === 404) return Promise.reject(new Error('Pattern not found'));
      return res.json();
    }).then(body => {
      this.setState({ patternLoading: false, pattern: body.pattern });
    });
  }

  render() {
    return (
      <div>
        {this.state.patternLoading ? <p>Loading</p> : this.state.pattern.map((row, i) => {
          return <Row row={row} index={i} key={i} updateStitch={this.updateStitch} stitchType={this.state.stitchType} />;
        })}
        <ToolBar handleStitchSelect={this.handleStitchSelect} handleColorSelect={this.handleColorSelect} stitchColor={this.state.stitchColor} handleSavePattern={this.handleSavePattern}/>
        <p className="title">Instructions</p>
        {this.state.patternLoading ? <p>Loading</p> : this.state.pattern.map((row, i) => {
          return <Instructions row={row} key={i} rowNum={i + 1} />;
        })}
      </div>
    );
  }

  updateStitch = (row, col) => {
    const newPattern = Object.assign([], this.state.pattern);

    newPattern[row][col] = { stitchType: stitchTypes[this.state.stitchType], colour: this.state.stitchColor };
    
    this.setState({ pattern: newPattern });
  }

  handleStitchSelect = (event) => {
    this.setState({ stitchType: event.target.value })
  }

  handleColorSelect = (color) => {
    this.setState({ stitchColor: color.hex });
  }

  handleSavePattern = () => {
    const patternId = this.props.match.params.pattern_id;
    fetch(`http://localhost:5000/api/patterns/${patternId}`, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        pattern: this.state.pattern
      })
    }).then((something) => {
      console.log(something)
    })
  }
}


export default Patterns;
