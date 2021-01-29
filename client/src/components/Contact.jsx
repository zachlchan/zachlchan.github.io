import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from './SectionHeader.jsx';
import SectionParagraph from './SectionParagraph.jsx';

const Contact = () => {
  return (
    <StyledFooter id="contact">
      <SectionHeader className="contact-header" text="contact" />
      <div className="info-container">
        <SectionParagraph className="instructions" text={contactText} />
        <a target="_blank" rel="noopener noreferrer" className="dl-link" href="https://www.linkedin.com/in/zachlchan/">
          <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
        </a>
      </div>
    </StyledFooter>
  )
}

const contactText = 'add me on linkedin';

const StyledFooter = styled.footer`
  background-color: #dfd4bf;
  & .contact-header {
    padding: 0.5rem;
    margin-top: 0;
  }
  & .info-container {
    text-align: center;
  }
  & .linkedin-icon {
    //color: #cf8a0c;
    color: #556b2f;
    font-size: 2rem;
    margin-bottom: 1rem;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.5);
    }
  }
  & .instructions {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export default Contact;
