import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default App;
