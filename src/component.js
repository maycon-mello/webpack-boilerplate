import React from 'react';
import ReactDOM from 'react-dom';

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  up() {
    this.setState({
      value: this.state.value + 10,
    });
  }

  render() {
    return (
      <div>
        <span>Test Component</span>
        <input type="text" value={this.state.value}/>
        <button className="Test" onClick={this.up.bind(this)}>Test</button>
      </div>
    );
  }
}