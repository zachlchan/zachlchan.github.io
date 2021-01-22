import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Drawer from './Drawer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize, false);
  }

  handleResize() {
    const width = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    this.setState({width});
  }

  render() {
    const { width } = this.state;
    return (
      <div>
        <Header width={width}/>
        <Navigation />
        <Drawer />
      </div>
    );
  }
}

export default App;
