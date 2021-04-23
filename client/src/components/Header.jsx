import React from 'react';
import styled from 'styled-components';
import Navigation from './navigation_components/Navigation.jsx';
import Drawer from './navigation_components/Drawer.jsx';

let name = '';

const Header = ({ width, click }) => {
  width < 501 ? name = 'zach chan' : name = 'zach l. chan';

  return (
    <StyledWrap>
      <StyledHeader>
        {name}
      </StyledHeader>
      <Navigation />
      <Drawer click={click} />
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #fff;
  margin-bottom: 30px;
`;
const StyledHeader = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-align: center;
  color: #556b2f;
  padding: 1.25rem;
  @media (max-width: 425px) {
    font-size: 2rem;
    text-align: left;
    margin-left: 5%;
    padding: 0.375rem;
  }
`;

export default Header;
