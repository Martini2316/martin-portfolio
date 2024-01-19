import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projekty</Title>
        <Desc>
          Kilka moich projektów, które wykonałem jako junior developer.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Wszystko</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Wszystko</ToggleButton>
          }
          <Divider />
          {toggle === 'web' ?
            <ToggleButton active value="web" onClick={() => setToggle('web')}>WWW</ToggleButton>
            :
            <ToggleButton value="web" onClick={() => setToggle('web')}>WWW</ToggleButton>
          }
          <Divider />
          {toggle === 'game' ?
            <ToggleButton active value="game" onClick={() => setToggle('game')}>GAME DEV</ToggleButton>
            :
            <ToggleButton value="game" onClick={() => setToggle('game')}>GAME DEV</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects