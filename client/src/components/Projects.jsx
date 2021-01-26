import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from './SectionHeader.jsx';

const Projects = () => {
  return (
    <StyledWrap id="projects">
      <SectionHeader text="projects" />
      <section className="flex-grid">
        <StyledCarousel interval={null} wrap={false}>
          <Carousel.Item>
            <div className="img-container">
              <img className="screen-shot" src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.png" alt="start screen"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-container">
              <img className="screen-shot" src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.png" alt="tracking screen"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-container">
              <img className="screen-shot" src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.png" alt="paused screen"/>
            </div>
          </Carousel.Item>
        </StyledCarousel>
        <div className="project-container">
          <header className="project-name">fawego</header>
          <p className="project-desc">
            An activity tracking mobile application. Built using React Native and the Geolocation API with Apple Maps.
          </p>
        </div>
      </section>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  & .flex-grid {
    display: flex;
    border-bottom: 2px solid #dfd4bf;
    align-items: center;
    justify-items: center;
  }
  & .img-container {
    margin: 50px;
    width: 300px;
  }
  & .screen-shot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border: 5px solid #000;
    border-radius: 15px;
  }
  & .project-container {
    flex: 1;
    padding: 2rem;
  }
  & .project-name {
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.5rem;
    color: #312f2b;
    margin-bottom: 1rem;
  }
  & .project-desc {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    & .flex-grid {
      display: block;
    }
  }
`;
const StyledCarousel = styled(Carousel)`
  flex: 1;
  & .carousel-indicators > li {
    background-color: #000;
  }
  & .carousel-control-next-icon,
    .carousel-control-prev-icon {
    filter: invert(1);
  }
`;

export default Projects;
