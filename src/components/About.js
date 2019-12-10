import React from "react"
import styled from "styled-components"
import Fab from "@material-ui/core/Fab"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import { Link } from "react-scroll"

const Container = styled.div`
  width: 80%;
  /*height: 100vh;*/
  margin: auto;
`

const About = () => {

  return (
    <Container id="about">
      <h2 style={{paddingTop:"4em", fontSize:"4em"}}>Bjarte Botnevik</h2>
      <p style={{marginTop:"-2em", marginBottom:"3em"}}><i>Portfolio site</i></p>
      <p>I am a student at University of Stavanger. I finished my bachelor's degree in computer engineering spring of 2019. I am
        currently finishing my master's degree in Data Science, which is expected to be done in the spring of 2021. In my spare
        time I do some web development, using mostly React.js. I also do some small projects with Arduino and some in 
        Data Science.
      </p> 
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-150}
        duration= {700}
      >
        <Fab style={{marginTop:"13em", marginBottom:"10em", color:"white", backgroundColor:"rgba(20, 97, 200, 1)"}}>
          <ArrowDownwardIcon/>
        </Fab>
      </Link>
    </Container>
    
  )

}

export default About