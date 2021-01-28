import React from 'react';
import styled from 'styled-components';

let displayValue;
let widthVal;
let heightVal;

const MenuModal = ({ visible, width, height, click }) => {
  visible ? displayValue = 'block' : displayValue = 'none';
  if (width < 769) {
    widthVal = `${width}px`;
    heightVal = `${height}px`;
   } else {
    widthVal = '600px';
    heightVal = 'auto';
   }

  return (
    <StyledWrap>
      <div className="modal-container">
        <div className="close-button" onClick={click}>
          <svg className="close-icon" viewBox="0 0 24 24">
            <line className="close-line" x1="24" y1="0" y2="24" strokeMiterlimit="10"/>
            <line className="close-line" x1="24" y1="24" y2="0" strokeMiterlimit="10"/>
          </svg>
        </div>
        <nav className="modal-nav">
          <ul className="nav-list">
            <div>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={click}>About</a>
              </li>

            </div>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={click}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={click}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workexp" onClick={click}>Work Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={click}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={click}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="overlay" onClick={click}></div>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  & .modal-container {
    display: ${() => displayValue};
    position: sticky;
    background-color: #fff;
    opacity: 0.95;
    width: ${() => `${widthVal}`};
    height: ${() => `${heightVal}`};
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 22;
  }
  & .close-button {
    float: right;
    width: 1.5rem;
    margin: 20px;
  }
  & .close-icon {
    vertical-align: bottom;
    stroke-width: 1.5;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  & .close-line {
    stroke: #000
  }
  & .modal-nav {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: .085rem;
    margin: 0 auto;
    padding: 15%;
  }
  & .nav-list {
    list-style-type: none;
    margin: 0;
    padding 0;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  & .nav-item {
    width: fit-content;
    list-style-type: none;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  & .nav-link {
    position: relative;
    text-decoration: none;
    color: #312f2b;
    margin: 0.5rem 1rem;
    padding: 0;
    &:hover {
      color: #312f2b;
      font-weight: 500;
      text-decoration: none;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #556b2f;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: 0 50%;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin:0 50%;
    }
  }
  & .overlay {
    display: ${() => displayValue};
    z-index: 21;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.75;
  }
`;

export default MenuModal;
