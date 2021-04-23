import React from 'react';
import styled from 'styled-components';
import NextGenIMG from '../NextGenIMG.jsx';

const ProjectImageSingle = ({ project }) => {
  const image = project.images[0];

  return (
    <StyledWrapper>
      <div className="asset-container">
        <NextGenIMG
          className="shadow-img"
          srcWebp={image.srcWebp}
          srcJp2={image.srcJp2}
          fallback={image.fallback}
          alt={image.description}
        />
      </div>
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  object-fit: contain;
  padding: 2rem 1rem 0 2rem;
  & .asset-container {
    margin: 0 auto 50px auto;
  }
  & .shadow-img {
    box-shadow: -10px -10px #dfd4bf;
    border: 1px solid;
    padding: 1rem;
    max-width: 600px;
    width: 100%;
  }
`;

export default ProjectImageSingle;
