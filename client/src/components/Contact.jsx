import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader.jsx';
import SectionParagraph from './SectionParagraph.jsx';

const Contact = () => {
  return (
    <footer id="contact">
      <SectionHeader text="contact" />
      <StyledDiv>
        <a href="https://www.linkedin.com/in/zachlchan/">
          <StyledIcon icon={faLinkedin} />
        </a>
        <StyledP text={contactText} />
      </StyledDiv>
    </footer>
  )
}

const contactText = 'add me on linkedin';
const StyledDiv = styled.div`
  text-align: center;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: #cf8a0c;
  font-size: 2rem;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;
const StyledP = styled(SectionParagraph)`
  text-align: center;
`;

export default Contact;
