import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Drawer from './Drawer.jsx';
import MenuModal from './MenuModal.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import WorkExperience from './WorkExperience.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      showMenu: false,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize, false);
  }

  handleResize() {
    const width = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    this.setState({ width });
  }

  handleDrawerClick() {
    console.log('click');
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { width, showMenu } = this.state;
    return (
      <div>
        <Header width={width} />
        <Navigation width={width} />
        <Drawer click={this.handleDrawerClick} />
        <MenuModal visible={showMenu} click={this.handleDrawerClick} />
        <About width={width} />
        <Projects width={width} />
        <WorkExperience width={width} />
        <Education width={width}/>
        <Contact width={width} />
      </div>
    );
  }
}

export default App;
