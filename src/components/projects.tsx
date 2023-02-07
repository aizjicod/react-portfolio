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
      <ul>
        {projectsData.map((project) => <ProjectLi {...project} key={project.name} />)}
      </ul>
    </section>
  )
}

export default Projects