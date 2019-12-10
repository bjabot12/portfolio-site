import React/*, { useState, useEffect }*/ from "react"
import styled from "styled-components"
import image from '../images/ghb.png'

const Container = styled.div`
  background: white;
  padding: 1em;
  margin: 1em;
  border: 2px white;
  border-radius: 2px;
  position: relative;
  z-index: 0;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const ProjectItem = (props) => {

  let isDesktop = window.innerWidth > 730
  
  return (
    <Container>
      <h1>{props.project.title}</h1>
      <a href={props.project.host} target="_blank" rel="noopener noreferrer" style={{color:"black"}}>{props.project.host}</a>
      <p>{props.project.type}</p>
      { isDesktop ? (<div style={{position:"absolute", top:"0", right:"0", padding:"2em", paddingRight:"6em"}}>
        <ul>
          {props.project.tags.map(tag => 
            <li key={tag}>{tag}</li>
          )}
        </ul>
      </div>)
      :
      <React.Fragment></React.Fragment>
      }
      
      <a href={props.project.link} target="_blank" rel="noopener noreferrer">
        <img src={image} width="40" height="40" alt="github" />
      </a>
      <p>{props.project.descr}</p>
    </Container>
  )
}

export default ProjectItem