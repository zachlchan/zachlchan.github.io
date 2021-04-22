import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader.jsx';
import SectionParagraph from './SectionParagraph.jsx';


const About = () => {
  return (
    <StyledWrap>
      <a id="about" />
      <div>
        <picture>
          <source srcSet="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.webp" type="image/webp" />
          <source srcSet="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jxr" type="image/webp" />
          <source srcSet="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jp2" type="image/webp" />
          <source srcSet="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg" type="image/webp" />
          <img className="profile-photo" src="https://zc-portfolio.s3-us-west-1.amazonaws.com/profile-photo.jpeg" alt="profile photo" />
        </picture>
        <SectionHeader text="about" />
        <section className="description">
          <SectionParagraph text={aboutText} />
        </section>
      </div>
    </StyledWrap>
  )
}

const aboutText = 'I am a full stack software engineer with a passion for hands-on problem solving and great design. With my background in mechanical engineering I excel at navigating complex systems and thrive in fast-paced, demanding environments.';

const StyledWrap = styled.div`
  & #about {
    position: relative;
    top: -192px;
    visibility: hidden;
    @media (max-width: 768px) {
      top: -112px;
    }
    @media (max-width: 425px) {
      top: -60px;
    }
  }
  & .profile-photo {
    display: block;
    max-width: 1024px;
    width: 75%;
    margin: 0 auto 0 auto;
    @media (max-width: 768px) {
      margin: 10px auto 10px auto;
    }
    @media (max-width: 425px) {
      width: 100%
    }
  }
  & .description {
    background-color: #dfd4bf;
    color: #312f2b;
    padding: 2rem;
  }
`;

export default About;
