import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 50em;
  width: 80%;
  /*background: darkgrey;*/ 
  min-height: 100%;
  margin: auto;
`

const About = () => {

  return (
    <Container>
      <h2 style={{paddingTop:"4em", fontSize:"4em"}}>Bjarte Botnevik</h2>
      <p>I am a student at University of Stavanger. I finished my bachelor's degree in computer engineering spring of 2019. I am
        currently finishing my master's degree in Data Science, which is expected to be done in the spring of 2021. In my spare
        time I do some web development, using mostly React.js. I also do some small projects with Arduino and some in 
        Data Science.
      </p>
    </Container>
  )

}

export default About