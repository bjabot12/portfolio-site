import React, { useState } from "react"
import styled from "styled-components"
import myProjects from './../projects.json'
import ProjectItem from "./ProjectItem"

// Container for the project section
const Container = styled.div`
  text-align: center;
  padding-bottom: 25em;
`

// Container for each project
const ProjContainer = styled.div`
  border: 1px;
  width: 80%;
  margin: auto;
`

const Projects = () => {

  // Using hooks to read from a json file
  const projects = useState(myProjects)
  const project = projects[0]

  return (
    <Container id="projects">
      <h1 style={{fontSize:"3em", marginBottom:"2em"}}>Projects</h1>
      {project ? (
        <React.Fragment>
          {project.projects.map(proj => <ProjContainer key={proj.id}>
            <ProjectItem project={proj}/>
            {/* <h2>{proj.title}</h2>
            <p>{proj.descr}</p> */}
          </ProjContainer>)}
      </React.Fragment>)
    :
    <h1>No projects yet</h1>}
    </Container>
  )
}

export default Projects