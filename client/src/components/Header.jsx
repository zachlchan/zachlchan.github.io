import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-align: center;
  color: #312f2b;
  background-color: #dfd4bf;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;
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

export default Header;