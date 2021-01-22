import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .085rem;
  display: table;
  margin: 0 auto;
  padding-top: 0.625rem;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding 0;
`;
const StyledLi = styled.li`
  list-style-type: none;
  padding-left: .875rem;
  padding-right: .875rem;
  line-height: 3rem;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: #312f2b;
`;

let displayValue;

const StyledDiv = styled.div`
  display: ${() => displayValue};
`;

const MenuModal = ({ visible }) => {
  if (visible) {
    displayValue = 'block';
  } else {
    displayValue = 'none';
  }
  return (
    <StyledDiv>
      <StyledNav>
        <StyledUl>
          <StyledLi><StyledA href="#projects">Projects</StyledA></StyledLi>
          <StyledLi><StyledA href="#skills">Skills</StyledA></StyledLi>
          <StyledLi><StyledA href="#workexp">Work Experience</StyledA></StyledLi>
          <StyledLi><StyledA href="#education">Education</StyledA></StyledLi>
          <StyledLi><StyledA href="#contact">Contact</StyledA></StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledDiv>
  )
}

export default MenuModal;