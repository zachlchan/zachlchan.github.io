import React from 'react';
import styled from 'styled-components';

let name = '';

const Header = ({ width }) => {
  width < 501 ? name = 'zach chan' : name = 'zach l. chan';

  return (
    <StyledHeader>
      {name}
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5rem;
  text-align: center;
  color: #556b2f;
  background-color: #fff;
  padding: 1.25rem;
  @media (max-width: 425px) {
    font-size: 2rem;
    text-align: left;
    margin-left: 5%;
    padding: 0.375rem;
  }
`;

export default Header;
