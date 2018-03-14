import React, { Component } from 'react'; // Uses destructuring
// Could also do:
//const Component = React.Component;
// Below could also use React.Component instead of Component

import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    // Uses JSX - JavaScript XML, react interprets this behind the scenes
    // Allows us to use HTML as if it is part of JavaScript
    // Behind the scenes it is doing things like:
    // const div = React.createElement("div", null, "React Intro");
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
