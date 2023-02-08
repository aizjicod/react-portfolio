import '../styles/projects.css'
import projectsData from '../modules/projects-data'
import ProjectLi from './project-li'
import { useState } from 'react'
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const handleClick = (number: number) => {
    console.log(projectIndex)
    setProjectIndex(prev => prev + number)
    console.log(projectIndex)
  }
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul id='projects-container'>
        <div id='prev-button'>left</div>
        {projectsData.map((project) => <ProjectLi {...project} key={project.name} />)}
        <div id='next-button'>rigth</div>
      </ul>
    </section>
  )
}

export default Projects