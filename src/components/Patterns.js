import React, { Component } from 'react';
import Row from './Row';

class Patterns extends Component {
  state = {
    patternLoading: true
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
          return <Row row={row} index={i} key={i} updateStitch={this.updateStitch} />;
        })}
      </div>
    );
  }

  updateStitch = (row, col) => {
    const newPattern = Object.assign([], this.state.pattern);
    newPattern[row][col] = { stitchType: 'k', colour: '#ffff00' };
    this.setState({pattern: newPattern});
  }
}


export default Patterns;
