import React from 'react';
import styled from 'styled-components';

const Drawer = ({ click }) => {
  return (
    <StyledNav>
      <a href="#menu" onClick={click}>
        <StyledSVG viewBox="0 0 24 24">
          <StyledLine x1="24" y1="6.5" y2="6.5" strokeMiterlimit="10"/>
          <StyledLine x1="24" y1="17.5" y2="17.5" strokeMiterlimit="10"/>
        </StyledSVG>
      </a>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: absolute;
  width: 1.5rem;
  right: 22px;
  top: 44px;
  @media (max-width: 425px) {
    top: 18px;
    right: 10px;
  }
`;
const StyledLine = styled.line`
  stroke: #000
`;
const StyledSVG = styled.svg`
  vertical-align: bottom;
  stroke-width: 1.5;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default Drawer;
