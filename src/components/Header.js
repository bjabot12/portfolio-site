import React, { Component } from "react"
import HeaderItem from "./HeaderItem"
import styled from "styled-components"

class Header extends Component {

  render() {
    return (
      <Container>
        <HeaderItem name="Om meg"/>
        <HeaderItem name="Prosjekter"/>
        <HeaderItem name="Ta kontakt"/>
      </Container>
    )
  }
}


const Container = styled.div`
position: fixed;
background-image: linear-gradient(45deg, rgba(56, 224, 101), rgba(54, 97, 255, 1) 150%);
top:0;
width: 100%;
display: flex;
zIndex: 1;
// margin-bottom: 10em;
`


export default Header