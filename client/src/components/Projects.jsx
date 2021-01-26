import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from './SectionHeader.jsx';

const Projects = () => {
  return (
    <div id="projects">
      <SectionHeader text="projects" />
      <StyledSection>
        <StyledCarousel interval={null} wrap={false}>
          <Carousel.Item>
            <StyledDiv>
              <StyledImg src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.png" alt="start screen"/>
            </StyledDiv>
          </Carousel.Item>
          <Carousel.Item>
            <StyledDiv>
              <StyledImg src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.png" alt="tracking screen"/>
            </StyledDiv>
          </Carousel.Item>
          <Carousel.Item>
            <StyledDiv>
              <StyledImg src="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.png" alt="paused screen"/>
            </StyledDiv>
          </Carousel.Item>
        </StyledCarousel>
        <StyledUl>fawego
          <Description>
            An activity tracking mobile application. Built using React Native and the Geolocation API with Apple Maps.
          </Description>
        </StyledUl>
      </StyledSection>
    </div>
  )
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  border-bottom: 2px solid #dfd4bf;
  align-items: center;
  justify-items: center;
`;
const StyledCarousel = styled(Carousel)`
  & .carousel-indicators > li {
    background-color: #000;
  }
  & .carousel-control-next-icon,
    .carousel-control-prev-icon {
    filter: invert(1);
  }
`;
const StyledDiv = styled.div`
  margin: 50px;
  width: 400px;
`;
const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 5px solid #000;
  border-radius: 15px;
`;
const StyledUl = styled.ul`
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.5rem;
  color: #312f2b;
  margin-bottom: 2rem;
  background-color: #fff;
`;
const Description = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  text-transform: none;
  list-style-type: none;
`;

export default Projects;
