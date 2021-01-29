import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <StyledFooter id="contact">
      <div className="info-container">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zachlchan/">
          <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zachlchan">
          <FontAwesomeIcon className="contact-icon" icon={faGithub} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:zacharyleechan@gmail.com">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelopeSquare} />
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
  & .contact-icon {
    //color: #cf8a0c;
    color: #556b2f;
    opacity: 0.7;
    font-size: 2rem;
    margin: 2rem 1rem;
    transition: opacity 250ms;
    &:hover {
      opacity: 1;
    }
  }
  & .instructions {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export default Contact;
