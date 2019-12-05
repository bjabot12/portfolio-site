import React, { useState } from "react"
import styled from "styled-components"
import myProjects from './../projects.json';
import ProjectItem from "./ProjectItem"

// Container for the project section
const Container = styled.div`
height: 50em;
text-align: center;
`

// Container for each project
const ProjContainer = styled.div`
border: 1px;
width: 65%;
margin: auto;
`

const Projects = () => {

  // Using hooks to read from a json file
  const proj = useState(myProjects)
  const p = proj[0]

  return (
    <Container>
      {p ? (
        <React.Fragment>
          {p.projects.map(proj => <ProjContainer key={proj.id}>
            <ProjectItem project={proj}/>
            {/* <h2>{proj.title}</h2>
            <p>{proj.descr}</p> */}
          </ProjContainer>)}
      </React.Fragment>)
    :
    <h1>nothing</h1>}
      {/* <h2>Prosjekter</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum."</p> */}
    </Container>
  )

}

export default Projects