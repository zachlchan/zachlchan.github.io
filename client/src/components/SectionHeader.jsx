import React from 'react';
import styled from 'styled-components';

const SectionHeader = ({ text }) => {
  return (
    <StyledHeader>
      {text}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: block;
  font-family: 'Work Sans', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  color: #312f2b;
  padding: 1.25rem;
`;

export default SectionHeader;