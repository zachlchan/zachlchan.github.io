import React from 'react';
import styled from 'styled-components';

const SectionHeader = ({ className, text }) => {
  return (
    <StyledHeader className={className}>
      {text}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: block;
  font-family: 'Work Sans', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  color: #312f2b;
  margin-top: 50px;
  padding: 1.25rem;
`;

export default SectionHeader;