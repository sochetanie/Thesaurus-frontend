import React, { Component } from 'react';
import TextContainer from './TextContainer'
import NavBar from './NavBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <TextContainer />
      </div>
    )
  }
}

export default App
