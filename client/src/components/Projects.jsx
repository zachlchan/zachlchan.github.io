import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from './SectionHeader.jsx';
import NextGenIMG from './NextGenIMG.jsx';

const Projects = () => {
  return (
    <StyledWrap>
      <a id="projects" />
      <SectionHeader text="projects" />
        <section className="flex-grid fawego">
          <StyledCarousel interval={null} wrap={false}>
            <Carousel.Item>
              <div className="img-container">
                <NextGenIMG
                  className="screen-shot"
                  srcWebp="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.webp"
                  srcJxr="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.jxr"
                  srcJp2="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.jp2"
                  fallback="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.jpeg"
                  alt="fawego start screen"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <NextGenIMG
                  className="screen-shot"
                  srcWebp="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.webp"
                  srcJxr="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.jxr"
                  srcJp2="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.jp2"
                  fallback="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.jpeg"
                  alt="fawego tracking screen"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <NextGenIMG
                  className="screen-shot"
                  srcWebp="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.webp"
                  srcJxr="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.jxr"
                  srcJp2="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.jp2"
                  fallback="https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.jpeg"
                  alt="fawego pause screen"
                />
              </div>
            </Carousel.Item>
          </StyledCarousel>
          <div className="project-container">
            <header className="project-name">fawego</header>
            <p className="project-desc">
              An activity tracking mobile application. Built using React Native and the Geolocation API with Apple Maps.
            </p>
            <header className="tech-header">tech used:</header>
            <div>
              <ul>
                <li className="tech-item">JavaScript</li>
                <li className="tech-item">React Native</li>
                <li className="tech-item">Geolocation API</li>
              </ul>
            </div>
          </div>
        </section>
      <div className="project-divider"/>
        <section className="flex-grid atc">
          <div className="single-img-container">
            <div className="img-container">
              <video className="atc-demo" controls disablePictureInPicture controlsList="nodownload">
                <source src="https://zc-portfolio.s3-us-west-1.amazonaws.com/atc_demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project-container">
            <header className="project-name">engineered outfitters</header>
            <p className="project-desc">
              Built an interactive and responsive "add to cart" component using the microservice architecture.
            </p>
            <header className="tech-header">tech used:</header>
            <div>
              <ul>
                <li className="tech-item">JavaScript</li>
                <li className="tech-item">React</li>
                <li className="tech-item">webpack</li>
                <li className="tech-item">Node.js</li>
                <li className="tech-item">Express.js</li>
                <li className="tech-item">MongoDB</li>
                <li className="tech-item">AWS S3</li>
                <li className="tech-item">AWS EC2</li>
              </ul>
            </div>
          </div>
        </section>
      <div className="project-divider"/>
        <section className="flex-grid portfolio">
          <div className="single-img-container">
            <div className="img-container">
              <NextGenIMG
                className="portfolio-img"
                srcWebp="https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.webp"
                srcJxr="https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.jxr"
                srcJp2="https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.jp2"
                fallback="https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.jpeg"
                alt="portfolio thumbnail"
              />
            </div>
          </div>
          <div className="project-container">
            <header className="project-name">portfolio (this site)</header>
            <p className="project-desc">
              A responsive single page portfolio website built from scratch and hosted using GitHub Pages.
            </p>
            <header className="tech-header">tech used:</header>
            <div>
              <ul>
                <li className="tech-item">JavaScript</li>
                <li className="tech-item">React</li>
                <li className="tech-item">React Bootstrap</li>
                <li className="tech-item">styled components</li>
                <li className="tech-item">webpack</li>
                <li className="tech-item">Node.js</li>
                <li className="tech-item">Express.js</li>
                <li className="tech-item">AWS S3</li>
                <li className="tech-item">GitHub Pages</li>
              </ul>
            </div>
          </div>
        </section>
    </StyledWrap>
  )
}

const StyledWrap = styled.div`
  border-bottom: 1px solid #dfd4bf;
  & #projects {
    position: relative;
    top: -160px;
    visibility: hidden;
    @media (max-width: 768px) {
      top: -82px;
    }
    @media (max-width: 425px) {
      top: -58px;
    }
  }
  & ul {
    padding-inline-start: 0;
  }
  & .flex-grid {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 1rem;
    @media (max-width: 425px) {
      padding: 0;
      display: block;
    }
  }
  & .flex-grid.atc {
    @media (max-width: 1024px) {
      display: block;
      width: 100%;
    }
  }
  & .flex-grid.portfolio {
    @media (max-width: 1024px) {
      display: block;
    }
  }
  & .project-divider {
    border-bottom: 1px solid #000;
    opacity: 0.1;
    margin: 0 1rem;
  }
  & .img-container {
    margin: 0 auto 50px auto;
  }
  & .screen-shot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border: 5px solid #000;
    border-radius: 15px;
  }
  & .atc-demo {
    border: 1px solid;
    max-width: 600px;
    width: 100%;
    @media (max-width: 910px) {
      width: 100%;
    }
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
  & .tech-header {
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #cf8a0c;
    margin-top: 2rem;
  }
  & .tech-item {
    font-size: 0.875rem;
    color: #000;
    opacity: 0.5;
    display: inline-flex;
    padding: 0.5rem 1rem 0.5rem 0;
  }
  & .single-img-container {
    flex: 1;
    display: flex;
    justify-content: center;
    object-fit: contain;
    padding: 2rem 1rem 0 2rem;
  }
  & .portfolio-img {
    box-shadow: -10px -10px #dfd4bf;
    border: 1px solid;
    padding: 2rem;
    max-width: 600px;
    width: 100%;
  }
`;
const StyledCarousel = styled(Carousel)`
  flex: 1;
  margin-top: 20px;
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

export default Projects;
