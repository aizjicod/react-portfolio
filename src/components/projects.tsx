import '../styles/projects.css'
import projectsData from '../modules/projects-data'
import ProjectLi from './project-li'
import { useState } from 'react'
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const handleClick:Function = (number: number) => {
    setProjectIndex(prev => prev + number)
    return projectIndex
  }
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul id='projects-container'>
        <button type='button' disabled={projectIndex === 0} id='prev-button' onClick={() => {handleClick(-1)}}>left</button>
        {projectsData.map((project,index) => {
          if(index === projectIndex){
            return <ProjectLi {...{...project,position: 'center'}} key={project.name} />
          }else if(index < projectIndex){
            return <ProjectLi {...{...project,position: 'left'}} key={project.name} />
          }else {
            return <ProjectLi {...{...project,position: 'right'}} key={project.name} />

          }
        })}
        <button type='button' disabled={projectIndex === projectsData.length - 1} id='next-button' onClick={() => {handleClick(1)}}>rigth</button>
      </ul>
    </section>
  )
}

export default Projects