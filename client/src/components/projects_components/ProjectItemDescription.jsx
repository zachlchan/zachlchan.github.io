import React from 'react';
import styled from 'styled-components';

const ProjectItemDescription = ({ project }) => {
  const techList = project.techUsed.map((tech,index) =>
    <li className="tech-item" key={index}>{tech}</li>
  );

  return (
    <StyledWrapper>
      <header className="project-name">{project.name}</header>
      <p className="project-desc">{project.description}</p>
      <header className="tech-header">tech used:</header>
      <div>
        <ul>
          {techList}
        </ul>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  flex: 1;
  padding: 2rem;
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
  & ul {
    padding-inline-start: 0;
  }
  & .tech-item {
    font-size: 0.875rem;
    color: #000;
    opacity: 0.5;
    display: inline-flex;
    padding: 0.5rem 1rem 0.5rem 0;
  }
`;

export default ProjectItemDescription;
