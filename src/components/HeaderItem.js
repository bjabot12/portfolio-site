import React from "react"
import styled from "styled-components"


const Container = styled.div`
flex: 1;
color: white;
`

const HeaderItem = (props) => {
  return (
    <Container >
      <h3>{props.name}</h3>
    </Container>
  )
}

export default HeaderItem