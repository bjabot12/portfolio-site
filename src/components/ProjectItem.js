import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  background: white;
  padding: 1em;
  margin: 1em;
  border: 2px white;
  border-radius: 2px;
`

const ProjectItem = (props) => {

  return (
    <Container>
      <h1>{props.project.title}</h1>
      <p>{props.project.type}</p>
      <p style={{textAlign: "right", marginRight:"2em"}}>github</p>
      <p>{props.project.descr}</p>
    </Container>
  )

}

export default ProjectItem