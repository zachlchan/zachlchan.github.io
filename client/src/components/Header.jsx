import React from 'react';
import styled from 'styled-components';

let name = '';

const Header = ({ width }) => {
  if (width < 501) {
    name = 'ZACH CHAN';
  } else {
    name = 'ZACH | CHAN';
  }
  return (
    <StyledHeader>
      {name}
    </StyledHeader>
  )
}

// tan background, grey text:
// background-color: #dfd4bf;
// color: #312f2b;

const StyledHeader = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-align: center;
  color: #556b2f;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

export default Header;
