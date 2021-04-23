import React from 'react';
import styled from 'styled-components';

const ProjectVideo = ({ project }) => (
  <StyledWrapper>
    <div className="asset-container">
      <video className="demo-video" controls disablePictureInPicture controlsList="nodownload">
        <source src={project.video.source} type={project.video.type} />
      </video>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  object-fit: contain;
  padding: 2rem 1rem 0 2rem;
  & .asset-container {
    margin: 0 auto 50px auto;
  }
  & .demo-video {
    border: 1px solid;
    max-width: 600px;
    width: 100%;
    transform: translateX(-5px) translateY(-5px);
  }
`;

export default ProjectVideo;
