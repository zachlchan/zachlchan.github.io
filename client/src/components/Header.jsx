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

const Header = () => {
  return (
    <StyledHeader>
      ZACH | CHAN
    </StyledHeader>
  )
}

export default Header;