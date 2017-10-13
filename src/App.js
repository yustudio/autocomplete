import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RANDWORDS } from './randWords';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      randWords: RANDWORDS.split(" "),
      matched: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onClickMatched = this.onClickMatched.bind(this);
  }

  onChange(e) {
    const input = e.target.value;
    const inputArray = input.split(" ");
    const targetWord = inputArray[inputArray.length-1];
    const matched = this.state.randWords.filter(
      (item) => (item.includes(targetWord))
    );
    this.setState({userInput: input, matched});
  }

  onClickMatched(word) {
    const inputArray = this.state.userInput.split(" ");
    inputArray.splice(inputArray.length-1, 1, word);
    this.setState({userInput: inputArray.join(' ')});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
         Autocomplete
        </div>
        <textarea
          cols="100"
          rows="5"
          type="text"
          onChange={this.onChange.bind(this)}
          value={this.state.userInput}
          className="App-text"
        />
        {
          this.state.matched.map((word, i) => 
            <div class="App-words" onClick={() => this.onClickMatched(word)}>
              {word}
            </div>
          )
        }        
      </div>
    );
  }
}

export default App;
