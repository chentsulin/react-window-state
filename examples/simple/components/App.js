import React, { Component } from 'react';
import { withWindowState } from 'react-window-state';
import InnerComponent from './InnerComponent';


class App extends Component {
  render() {
    const OuterComponent = withWindowState(InnerComponent);
    return (
      <div>
        <OuterComponent />
      </div>
    );
  }
}


export default App;
