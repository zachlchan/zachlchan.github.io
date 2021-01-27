import React from 'react';
import styled from 'styled-components';

const SectionParagraph = ({ className, text }) => {
  return (
    <StyledP className={className}>
      {text}
    </StyledP>
  )
}

const StyledP = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5rem;
  max-width: 1024px;
  width: 75%;
  margin: auto;
  @media (max-width: 425px) {
    width: 100%
  }
`;

export default SectionParagraph;
