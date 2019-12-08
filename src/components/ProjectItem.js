import React/*, { useState, useEffect }*/ from "react"
import styled from "styled-components"
import image from '../images/ghb.png'

const Container = styled.div`
  /*display: flex;
  flex-direction: column;
  justfiy-conent: space-between;
  align-items: center;*/
  /*flex: 1;*/
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
  // const [gif, setGif] = useState()

  // useEffect(() => {
  //   // api call
  //   const fetchData = async () => {
  //     let res = await fetch('')
  //     let json = await res.json()
  //     console.log(json)
  //     setGif(json[0])
  //   }
  //   fetchData()
  // }, [])

  return (
    <Container>
      <h2>{props.project.title}</h2>
      <p>{props.project.type}</p>
      <div style={{position:"absolute", top:"0", right:"0", padding:"2em", paddingRight:"6em"}}>
        <ul>
        {props.project.tags.map(tag => 
          <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <a href={props.project.link} target="_blank" rel="noopener noreferrer" style={{/*textAlign: "right", marginRight:"2em"*/}}>
        <img src={image} width="40" height="40" alt="github" />
      </a>
      <p>{props.project.descr}</p>
    </Container>
  )
}

export default ProjectItem