import React, { Component } from 'react';
import Row from './Row';

class Editor extends Component {
  state = {
    dummyPattern: [
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'k', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'k', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'k', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'k', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'k', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['k', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
    ]
  }

  render() {
    return (
      <div>
        {this.state.dummyPattern.map((row, i) => {
          return <Row row={row} index={i} key={i}/>;
        })}
      </div>
    );
  }
}

export default Editor;
