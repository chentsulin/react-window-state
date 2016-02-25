import React, { Component } from 'react';
import windowState from 'react-window-state';
import InnerComponent from './InnerComponent';


class App extends Component {
  render() {
    const OuterComponent = windowState(InnerComponent);
    return (
      <div>
        <OuterComponent />
      </div>
    );
  }
}


export default App;
