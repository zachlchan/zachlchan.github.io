import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import NextGenIMG from '../NextGenIMG.jsx';

const ProjectImageCarousel = ({ project }) => (
  <StyledCarousel interval={null} wrap={false}>
    {project.images.map((image, index) => (
      <Carousel.Item key={index}>
        <div className="asset-container">
          <NextGenIMG
            className="carousel-img"
            srcWebp={image.srcWebp}
            srcJp2={image.srcJp2}
            fallback={image.fallback}
            alt={image.description}
          />
        </div>
      </Carousel.Item>
    ))}
  </StyledCarousel>
);

const StyledCarousel = styled(Carousel)`
  flex: 1;
  margin-top: 20px;
  & .asset-container {
    margin: 0 auto 50px auto;
  }
  & .carousel-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border: 5px solid #000;
    border-radius: 15px;
  }

  // BOOTSRAP STYLING OVERRIDES

  & .carousel-indicators > li {
    background-color: #000;
  }
  & .carousel-indicators > li:hover,
    .carousel-indicators > li:focus {
    transition: transform 0.2s;
    transform: scale(1.2);
  }
  & .carousel-control-next-icon,
    .carousel-control-prev-icon {
    filter: invert(1);
  }
  & .carousel-control-next:focus, .carousel-control-next:hover,
    .carousel-control-prev:focus, .carousel-control-prev:hover  {
    transition: transform 0.2s;
    transform: scale(1.1);
    color: #556b2f;
  }
  @media (max-width: 425px) {
    & .carousel-control-next-icon,
    .carousel-control-prev-icon {
      display: none;
    }
  }

`;

export default ProjectImageCarousel;
