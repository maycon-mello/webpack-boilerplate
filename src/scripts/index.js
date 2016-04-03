import React from 'react';
import ReactDOM from 'react-dom';
import note from './test';

//Scss entry point
require('../scss/base.scss');

class Panel extends React.Component {

  render() {
    return (
      <div>{note}</div>
    );
  }
}

ReactDOM.render(<Panel />, document.getElementById('root'));
