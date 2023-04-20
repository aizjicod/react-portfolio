import '../styles/projects.css'
import projectsData from '../modules/projects-data'
import ProjectLi from './project-li'
import { useState } from 'react'
import TechUl from './techUl'
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const handleClickArrows: Function = (number: number) => {
    setProjectIndex(prev => prev + number)
    return projectIndex
  }
  const handleClickIndex: Function = (number:number) => {
    setProjectIndex(number)
  }
  
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul id='projectsIndex-ul'>
        {projectsData.map((project, index) => {
          return <li value={index} className={(index === projectIndex) ? 'projectIndex-ul__li focused' : 'projectIndex-ul__li'} onClick={() => handleClickIndex(index)}> 
          </li>
        })}
      </ul>
      <ul id='projects-container'>
        <button type='button' disabled={projectIndex === 0} id='prev-button' onClick={() => { handleClickArrows(-1) }}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        {projectsData.map((project, index) => {
          if (index !== projectIndex) {
            return <ProjectLi {...{ ...project, position: true }} key={project.name} />
          } else {
            return <ProjectLi {...{ ...project, position: false }} key={project.name} />
          }
        })}
        <button type='button' disabled={projectIndex === projectsData.length - 1} id='next-button' onClick={() => { handleClickArrows(1) }}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </ul>
      <TechUl {...projectsData[projectIndex].techUsed.sort()} />
    </section >
  )
}

export default Projects