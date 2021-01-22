import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Drawer from './Drawer.jsx';

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
        <Drawer />
      </div>
    );
  }
}

export default App;
