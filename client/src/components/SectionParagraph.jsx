import React from 'react';
import styled from 'styled-components';

let imgWidth;

const SectionParagraph = ({ className, text, width }) => {
  width > 425 ? imgWidth = '75%' : imgWidth = '100%';

  return (
    <StyledP className={className}>
      {text}
    </StyledP>
  )
}

const StyledP = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5rem;
  width: ${() => imgWidth};
  margin: auto;
`;

export default SectionParagraph;