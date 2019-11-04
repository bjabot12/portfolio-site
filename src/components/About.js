import React from "react"
import styled from "styled-components"


const Container = styled.div`
height: 50em;
background: darkgrey;
margin-top: 5em;
min-height: 100%;
text-align: center;
`

const About = () => {

  return (
    <Container>
      <h2>Om meg</h2>
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

export default About