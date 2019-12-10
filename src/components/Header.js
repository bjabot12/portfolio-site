import React, { Component } from "react"
import HeaderItem from "./HeaderItem"
import styled from "styled-components"
import imagegh from "../images/ghw.png"
import imageli from "../images/li.png"
import { Link } from "react-scroll"

class Header extends Component {

  render() {
    return (
      <Container>
        <div style={{width:"67%", display:"flex"}}>
        {/* Link to where I found the smooth scrolling tutorial.
        https://scotch.io/tutorials/implementing-smooth-scrolling-in-react */}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration= {700}
            style={{flex:"1"}}
          >
            <HeaderItem name="About me"/></Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration= {700}
            style={{flex:"1"}}
          >
            <HeaderItem name="Projects"/>
          </Link>
        </div>
        <div style={{flex:"1", padding:".8em"/*textAlign:"right", marginRight:"3em"*/}}>
          <a href="https://github.com/bjabot12" target="_blank" rel="noopener noreferrer">
            <img src={imagegh} width="30" height="30" alt="linkedIn"></img>
          </a>
          <a href="https://www.linkedin.com/in/bjarte-botnevik-336a7317b/" target="_blank" rel="noopener noreferrer">
            <img style={{paddingLeft:"1em"}}src={imageli} width="30" height="30" alt="GitHub"></img>
          </a>
        </div>
      </Container>
      
    )
  }
}


const Container = styled.div`
  position: fixed;
  /*background-image: linear-gradient(45deg, rgba(56, 224, 101), rgba(54, 97, 255, 1) 150%);*/
  background-color: rgba(20, 97, 200, 1);
  top: 0;
  width: 100%;
  display: flex;
  z-index: 2;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

export default Header