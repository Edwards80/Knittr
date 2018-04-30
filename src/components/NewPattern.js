import React, { Component } from 'react';

class NewPattern extends Component {
  state = {
    patternTitle: '',
    style: '',
    description: '',
    rows: 0,
    columns: 0,
    difficulty: '',
    author: '',
    titleInvalid: true,
    styleInvalid: true,
    difficultyInvalid: true,
    authorInvalid: true,
    formInvalid: true
  }

  render() {
    return (
      <div className={this.props.newPatternOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create new pattern</p>
            <button className="delete" aria-label="close" onClick={this.props.closeNewPattern}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Pattern Title</label>
              <div className="control">
                <input className="input" name="patternTitle" value={this.state.patternTitle} type="text" placeholder="Name your pattern" onChange={this.handleNameInput} />
              </div>
              <div style={{ color: 'red' }}>{this.state.titleInvalid ? 'Title is not valid' : null}</div>
            </div>
            <div className="field">
              <label className="label">Pattern Style</label>
              <div className="control">
                <input className="input" name="patternStyle" value={this.state.style} onChange={this.handleStyleInput} type="text" placeholder="Knitting Style" />
              </div>
              <div style={{ color: 'red' }}>{this.state.styleInvalid ? 'Style is not valid' : null}</div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input className="input" name="description" value={this.state.description} onChange={this.handleDescriptionInput} type="text" placeholder="description" />
              </div>
            </div>
            <div className="field">
            <label className="label">Difficulty</label>              
              <p className="control">
                <span className="select" name="difficulty" onChange={this.handleDifficultySelect}>
                  <select>
                    <option defaultValue value="select">Select </option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <input className="input" name="author" value={this.state.author} onChange={this.handleAuthorInput} type="text" placeholder="author" />
              </div>
              <div style={{ color: 'red' }}>{this.state.authorInvalid ? 'Author is not valid' : null}</div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Size (in stitches)</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <label className="input">Height
                      <input type="number" name="height" onChange={this.handleRowInput} value={this.state.rows} />
                    </label>
                    <label className="input">Width
                      <input type="number" name="width" onChange={this.handleColumnsInput} value={this.state.columns} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" disabled={this.state.formInvalid} onClick={this.handlePatternSubmit}>Create New Pattern</button>
            <button className="button" onClick={this.props.closeNewPattern}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }

  handleNameInput = (event) => {
    this.setState({ patternTitle: event.target.value });
    this.checkFormValidity();

    if (event.target.value.length < 5) {
      this.setState({ titleInvalid: true });
    } else {
      this.setState({ titleInvalid: false });
    }
  }

  handleStyleInput = (event) => {
    this.setState({ style: event.target.value });
    this.checkFormValidity();

    if (event.target.value.length < 5) {
      this.setState({ styleInvalid: true });
    } else {
      this.setState({ styleInvalid: false });
    }
  }

  handleDescriptionInput = (event) => {
    this.setState({ description: event.target.value });
  }

  handleRowInput = (event) => {
    this.setState({ rows: event.target.value });
  }

  handleColumnsInput = (event) => {
    this.setState({ columns: event.target.value });
  }
  beiginner
  handleDifficultySelect = (event) => {
    this.setState({ difficulty: event.target.value });
    this.checkFormValidity();
    
    if (event.target.value === 'select') {
      this.setState({ difficultyInvalid: true });
    } else {
      this.setState({ difficultyInvalid: false });
    }
  }

  handleAuthorInput = (event) => {
    this.setState({ author: event.target.value });
    this.checkFormValidity();

    if (event.target.value.length < 5) {
      this.setState({ authorInvalid: true });
    } else {
      this.setState({ authorInvalid: false });
    }
  }

  handlePatternSubmit = () => {
    fetch('https://knittr-be.herokuapp.com/api/patterns', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title: this.state.patternTitle,
        difficulty: this.state.difficulty,
        style: this.state.style,
        author: this.state.author,
        description: this.state.description,
        pattern: this.createPattern(parseInt(this.state.rows, 10), parseInt(this.state.columns, 10))
      })
    })
      .then(res => {
        if (res.status === 404) return Promise.reject(new Error('Failed to post comment'));
        return this.props.getPatterns();
      })
      .then((res) => {
        return res.json()
      })
      .then(body => {
        this.props.setPatterns(body);
      })
      .then(this.props.closeNewPattern);
  }

  checkFormValidity = () => {
    if (this.state.titleInvalid || this.state.styleInvalid || this.state.difficultyInvalid || this.state.authorInvalid) {
      return this.setState({ formInvalid: true });
    } else {
      return this.setState({ formInvalid: false });
    }
  }

  createPattern = (rows, columns) => {
    let pattern = [];
    let rowBase = Array(rows).fill({ stitchType: 'k', colour: '#f44336' });

    for (let i = 0; i < columns; i++) {
      pattern.push(rowBase);
    }
    return pattern;
  }
}


export default NewPattern;
