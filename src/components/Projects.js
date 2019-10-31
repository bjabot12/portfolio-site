import React from "react"
import styled from "styled-components"
import myProjects from './../projects.json';
 
const Container = styled.div`
height: 50em;
background: grey;
text-align: center;
`

const Projects = () => {

  console.log(myProjects)
  return (
    <Container>
      <h2>Prosjekter</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum."</p>
    </Container>
  )

}

export default Projects