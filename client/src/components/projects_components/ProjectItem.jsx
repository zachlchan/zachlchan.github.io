import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../SectionHeader.jsx';
import ProjectImageSingle from './ProjectImageSingle.jsx';
import ProjectImageCarousel from './ProjectImageCarousel.jsx';
import ProjectVideo from './ProjectVideo.jsx';
import ProjectItemDescription from './ProjectItemDescription.jsx';

const ProjectItem = ({ project, lastItem }) => {
  const getAssetType = () => {
    if (project.images && project.images.length === 1) {
      return (
        <ProjectImageSingle project={project} />
      );
    } else if (project.images && project.images.length > 1) {
      return (
        <ProjectImageCarousel project={project} />
      );
    } else if (project.video) {
      return (
        <ProjectVideo project={project} />
      );
    } else {
      return null;
    }
  }

  const projectAsset = getAssetType();
  const projectDivider = !lastItem ? <StyledDivider /> : null;

  return (
    <div>
      <StyledSection>
        {projectAsset}
        <ProjectItemDescription project={project} />
      </StyledSection>
      {projectDivider}
    </div>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 4rem 1rem 0 1rem;
  @media (max-width: 1024px) {
    padding: 0;
    display: block;
  }
`;
const StyledDivider = styled.div`
  border-bottom: 1px solid #000;
  opacity: 0.1;
  margin: 0 1rem;
`;

export default ProjectItem;
