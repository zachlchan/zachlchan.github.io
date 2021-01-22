import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: absolute;
  width: 1.5rem;
  right: 2%;
  top: 5%;
`;

const StyledLine = styled.line`
  stroke: #000
`;

const StyledSVG = styled.svg`
  vertical-align: bottom;
`;

const Drawer = () => {
  return (
    <StyledNav>
      <a href="#menu">
        <StyledSVG viewBox="0 0 24 24">
          <StyledLine x1="24" y1="6.5" y2="6.5" strokeMiterlimit="10"/>
          <StyledLine x1="24" y1="17.5" y2="17.5" strokeMiterlimit="10"/>
        </StyledSVG>
      </a>
    </StyledNav>
  )
}

export default Drawer;