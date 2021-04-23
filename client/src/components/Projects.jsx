import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectItem from './projects_components/ProjectItem.jsx';
import { projectData } from '../../project-data.js';

const Projects = () => {
  const projectItems = projectData.map((project, index) => {
    const isLast = index === (projectData.length - 1) ? true : false;

    return (
      <ProjectItem key={index} project={project} lastItem={isLast} />
    )
  });

  return (
    <StyledWrap>
      <a id="projects" />
      <SectionHeader text="projects" />
      {projectItems}
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
`;

export default Projects;
