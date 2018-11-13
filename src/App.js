import React, { Component } from 'react';
import KeepItClassy from './KeepItClassy/KeepItClassy'
import HooksCounter from './HooksCounter/HooksCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <KeepItClassy />
        {/* <HooksCounter /> */}
      </div>
    );
  }
}

export default App;
