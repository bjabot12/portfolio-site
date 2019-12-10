import React from "react"
import styled from "styled-components"
import imagegh from "../images/ghw.png"
import imageli from "../images/li.png"


const Container = styled.div`
  height: 15em;
  background-image: linear-gradient(180deg, gainsboro, rgba(20, 97, 200, 1) 90%);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <div style={{paddingTop:"6em"}}>
        <a href="https://github.com/bjabot12" target="_blank" rel="noopener noreferrer">
          <img src={imagegh} width="50" height="50" alt="linkedIn"></img>
        </a>
        <a href="https://www.linkedin.com/in/bjarte-botnevik-336a7317b/" target="_blank" rel="noopener noreferrer">
          <img style={{paddingLeft:"1em"}}src={imageli} width="50" height="50" alt="GitHub"></img>
        </a>
      </div>
    </Container>
  )
}

export default Footer